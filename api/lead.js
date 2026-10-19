// Função serverless da Vercel: recebe o formulário da LP e cria/atualiza o lead no RD Station Marketing
// (endpoint de Conversões). Variáveis de ambiente (Vercel → Settings → Environment Variables):
//   RD_PUBLIC_TOKEN         (obrigatória) token público do RD Station (Integrações → Tokens de API)
//   RD_CONVERSION_ID        (opcional)    identificador da conversão. Padrão: lp-c2s-ia-incorporadoras
//   RD_CF_TIPO_EMPRESA      (opcional)    nome do campo personalizado do RD para "Tipo da empresa", ex.: cf_tipo_da_empresa
//   RD_CF_MENSAGEM          (opcional)    nome do campo personalizado do RD para "Mensagem", ex.: cf_mensagem
//   LEAD_WEBHOOK_URL        (opcional)    cópia extra do lead (Zapier, Make, planilha...)

const REQUIRED = ['nome', 'email', 'whatsapp', 'cargo', 'tipo', 'empresa'];

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};

  // Honeypot: bots preenchem o campo escondido. Responde "ok" sem enviar nada.
  if (body.website) return res.status(200).json({ ok: true });

  for (const k of REQUIRED) {
    if (!body[k] || String(body[k]).trim() === '') {
      return res.status(400).json({ ok: false, error: 'missing_' + k });
    }
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
    return res.status(400).json({ ok: false, error: 'invalid_email' });
  }

  const utm = body.utm && typeof body.utm === 'object' ? body.utm : {};
  const lead = {
    nome: clean(body.nome),
    email: clean(body.email).toLowerCase(),
    whatsapp: clean(body.whatsapp),
    cargo: clean(body.cargo),
    tipo_empresa: clean(body.tipo),
    empresa: clean(body.empresa),
    mensagem: clean(body.mensagem, 2000),
    pagina: clean(body.pagina),
    utm,
    origem: 'lp-c2s-ia-incorporadoras',
    recebido_em: new Date().toISOString(),
  };

  const token = process.env.RD_PUBLIC_TOKEN;
  const hook = process.env.LEAD_WEBHOOK_URL;
  if (!token && !hook) {
    console.error('Nenhum destino configurado (RD_PUBLIC_TOKEN ou LEAD_WEBHOOK_URL). Lead:', JSON.stringify(lead));
    return res.status(500).json({ ok: false, error: 'destination_not_configured' });
  }

  let rdOk = !token;
  let hookOk = !hook;

  if (token) {
    const payload = {
      conversion_identifier: process.env.RD_CONVERSION_ID || 'lp-c2s-ia-incorporadoras',
      email: lead.email,
      name: lead.nome,
      personal_phone: lead.whatsapp,
      company_name: lead.empresa,
      job_title: lead.cargo,
      tags: ['lp-c2s-ia', 'incorporadoras'],
    };
    if (process.env.RD_CF_TIPO_EMPRESA) payload[process.env.RD_CF_TIPO_EMPRESA] = lead.tipo_empresa;
    if (process.env.RD_CF_MENSAGEM && lead.mensagem) payload[process.env.RD_CF_MENSAGEM] = lead.mensagem;
    if (body.rd_client_id) payload.client_tracking_id = clean(body.rd_client_id);
    if (utm.utm_source) payload.traffic_source = clean(utm.utm_source);
    if (utm.utm_medium) payload.traffic_medium = clean(utm.utm_medium);
    if (utm.utm_campaign) payload.traffic_campaign = clean(utm.utm_campaign);
    if (utm.utm_content) payload.traffic_value = clean(utm.utm_content);

    try {
      const r = await fetch('https://api.rd.services/platform/conversions?api_key=' + encodeURIComponent(token), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_type: 'CONVERSION', event_family: 'CDP', payload }),
      });
      if (!r.ok) throw new Error('rd_status_' + r.status + ' ' + (await r.text()).slice(0, 300));
      rdOk = true;
    } catch (err) {
      console.error('Falha ao enviar para o RD Station:', err.message, JSON.stringify(lead));
    }
  }

  if (hook) {
    try {
      const r = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
      if (!r.ok) throw new Error('webhook_status_' + r.status);
      hookOk = true;
    } catch (err) {
      console.error('Falha ao enviar para o webhook:', err.message, JSON.stringify(lead));
    }
  }

  // Considera sucesso se o RD (destino principal) recebeu; sem RD, vale o webhook.
  const ok = token ? rdOk : hookOk;
  return res.status(ok ? 200 : 502).json({ ok });
};

function clean(v, max = 300) {
  return v == null ? '' : String(v).trim().slice(0, max);
}
function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
