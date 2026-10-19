// Função serverless da Vercel: recebe o formulário da LP e repassa para o destino configurado.
// Configure a variável de ambiente LEAD_WEBHOOK_URL (CRM, Zapier, Make, n8n, etc.) no painel da Vercel.

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

  const lead = {
    nome: clean(body.nome),
    email: clean(body.email),
    whatsapp: clean(body.whatsapp),
    cargo: clean(body.cargo),
    tipo_empresa: clean(body.tipo),
    empresa: clean(body.empresa),
    mensagem: clean(body.mensagem, 2000),
    pagina: clean(body.pagina),
    utm: body.utm && typeof body.utm === 'object' ? body.utm : {},
    origem: 'lp-c2s-ia-incorporadoras',
    recebido_em: new Date().toISOString(),
  };

  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    // Sem destino configurado: não perde o lead, registra no log da Vercel e avisa.
    console.error('LEAD_WEBHOOK_URL não configurada. Lead:', JSON.stringify(lead));
    return res.status(500).json({ ok: false, error: 'webhook_not_configured' });
  }

  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    if (!r.ok) throw new Error('webhook_status_' + r.status);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Falha ao enviar lead:', err.message, JSON.stringify(lead));
    return res.status(502).json({ ok: false, error: 'webhook_failed' });
  }
};

function clean(v, max = 300) {
  return v == null ? '' : String(v).trim().slice(0, max);
}
function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
