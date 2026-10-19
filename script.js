(function () {
  'use strict';

  /* ---------- Ícones (estilo linha) ---------- */
  const svg = (d) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const I = {
    bolt: svg('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
    help: svg('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7"/><circle cx="12" cy="17" r=".5"/>'),
    redo: svg('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
    building: svg('<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4"/>'),
    file: svg('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
    cal: svg('<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>'),
    sliders: svg('<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>'),
    chat: svg('<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21l3-4M8 9h3M13 9h3M8 12h6"/>'),
    tags: svg('<path d="M3 12V4h8l9 9-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>'),
    bell: svg('<path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
    clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    calcheck: svg('<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4M9 15l2 2 4-4"/>'),
    org: svg('<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="2" y="16" width="6" height="5" rx="1"/><rect x="9" y="16" width="6" height="5" rx="1"/><rect x="16" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>')
  };

  /* ---------- Conversa (dados fictícios, anonimizados) ---------- */
  const INTRO = 'Olá, tudo bem? Sou a Laura da Incorporadora C2S! Vi que você se interessou pelo Residencial Aurora.';
  const FORM_CARD = (ts) => ({
    card: ['Informações de interesse', [['Empreendimento', 'Residencial Aurora'], ['Configuração', 'Duplex 75m²'], ['Plataforma', 'Instagram Leads']], ts]
  });
  const RESUMO = {
    card: ['Resumo da conversa', [['Empreendimento', 'Residencial Bosque'], ['Intenção', 'Moradia · 2 dorm.'], ['Financiamento', 'FGTS + 10% de entrada'], ['Visita', 'Sáb., 10h (pré-agendada)'], ['Próximo passo', 'Confirmar a visita']], null, true]
  };
  const ia = (t, tm, link) => ({ w: 'ia', t, tm, link });
  const lead = (t, tm) => ({ w: 'lead', t, tm });
  const chip = (t) => ({ chip: t });
  const date = (t) => ({ date: t });

  const STEPS = [
    { n: '01', title: 'Responde na hora', icon: I.bolt, msgs: [date('18/10/2026'), FORM_CARD('18/10/2026 19:57'), ia(INTRO, '19:57'), ia('Sua opção seria moradia ou investimento?', '19:57'), chip('Respondido em segundos')] },
    { n: '02', title: 'Faz perguntas inteligentes', icon: I.help, msgs: [lead('Moradia', '19:59'), ia('Ótimo, Ana! Em qual faixa de valor você está buscando?', '20:00'), lead('Até R$ 700 mil', '20:00'), ia('Você prefere 1 ou 2 dormitórios?', '20:01'), lead('2 dormitórios', '20:01'), ia('Tem alguma região de preferência?', '20:02')] },
    { n: '03', title: 'Follow-up automático', icon: I.redo, msgs: [date('Hoje'), chip('Follow-up automático'), ia('Ana, ainda tem interesse em conhecer o Residencial Aurora?', '10:02'), ia('Segue o book do Residencial Aurora para você conhecer melhor:', '10:02', 'c2s.com/book-aurora'), lead('Gostei, tem outras opções no mesmo bairro?', '10:15')] },
    { n: '04', title: 'Indica empreendimentos', icon: I.building, msgs: [ia('Claro! Olha essas opções:', '10:15'), ia('Residencial Aurora – Duplex 75m²', '10:15', 'c2s.com/residencial-aurora'), ia('Residencial Bosque – 2 dorm. 38m²', '10:15', 'c2s.com/residencial-bosque'), lead('Gostei do Bosque!', '10:16'), ia('Boa escolha, Ana! Você pretende financiar?', '10:16')] },
    { n: '05', title: 'Coleta dados para financiamento', icon: I.file, msgs: [lead('Sim', '10:17'), ia('Perfeito! Qual a sua renda familiar mensal?', '10:17'), lead('Cerca de R$ 12 mil', '10:18'), ia('Você tem FGTS ou valor de entrada em mente?', '10:18'), lead('Tenho FGTS e 10% de entrada', '10:19'), chip('Dados coletados no C2S')] },
    { n: '06', title: 'Agenda pré-visita', icon: I.cal, msgs: [ia('Ótimo! Vamos marcar uma visita ao Residencial Bosque?', '10:20'), lead('Pode ser sábado de manhã', '10:21'), ia('Perfeito! Visita pré-agendada para sábado, às 10h. Um consultor vai confirmar por aqui.', '10:21'), chip('Atendimento assumido no C2S por Rafael'), RESUMO] }
  ];

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function msgHTML(m, i) {
    const d = `style="animation-delay:${i * 90}ms"`;
    if (m.card) {
      const [title, rows, ts, accent] = m.card;
      return `<div class="icard${accent ? ' icard--accent' : ''}" ${d}><h5>${esc(title)}</h5><dl>${rows
        .map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>${ts ? `<time>${esc(ts)}</time>` : ''}</div>`;
    }
    if (m.date) return `<div class="chip chip--date" ${d}>${esc(m.date)}</div>`;
    if (m.chip) return `<div class="chip" ${d}>${esc(m.chip)}</div>`;
    return `<div class="m m--${m.w}" ${d}>${esc(m.t)}${m.link ? `<a href="#" tabindex="-1" onclick="return false">${esc(m.link)}</a>` : ''}<time>${esc(m.tm)}</time></div>`;
  }

  function chatHTML(msgs, bar) {
    return `<div class="chat__head"><span class="chat__av">IA</span><div><b>C2S IA</b><small>online</small></div></div>
      <div class="chat__msgs">${msgs.map(msgHTML).join('')}</div>${bar ? '<div class="chat__bar"><div>Mensagem</div></div>' : ''}`;
  }

  /* ---------- Hero ---------- */
  const heroChat = document.getElementById('hero-chat');
  if (heroChat) {
    heroChat.innerHTML = chatHTML([FORM_CARD('18/10/2026 19:57'), ia(INTRO, '19:57'), ia('Sua opção seria moradia ou investimento?', '19:57')], false);
  }

  /* ---------- Como funciona ---------- */
  const stepsEl = document.getElementById('steps');
  const chatEl = document.getElementById('story-chat');
  const dotsEl = document.getElementById('dots');
  let current = 0, timer = null, userTouched = false, visible = false;

  stepsEl.innerHTML = STEPS.map((s, i) => `<li><button class="step" role="tab" aria-selected="false" data-i="${i}">
    <span class="step__ic">${s.icon}</span><span><small>Passo ${s.n}</small><b>${s.title}</b></span></button></li>`).join('');
  dotsEl.innerHTML = STEPS.map(() => '<i></i>').join('');

  function show(i) {
    current = i;
    chatEl.innerHTML = chatHTML(STEPS[i].msgs, true);
    stepsEl.querySelectorAll('.step').forEach((b, k) => { b.classList.toggle('is-on', k === i); b.setAttribute('aria-selected', k === i); });
    dotsEl.querySelectorAll('i').forEach((d, k) => d.classList.toggle('is-on', k === i));
  }
  function play() { stop(); if (userTouched || !visible) return; timer = setInterval(() => show((current + 1) % STEPS.length), 6500); }
  function stop() { if (timer) clearInterval(timer); timer = null; }

  stepsEl.addEventListener('click', (e) => {
    const b = e.target.closest('.step'); if (!b) return;
    userTouched = true; stop(); show(+b.dataset.i);
  });
  show(0);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((en) => { visible = en[0].isIntersecting; visible ? play() : stop(); }, { threshold: 0.35 })
      .observe(document.getElementById('story-phone'));
  }

  /* ---------- Funcionalidades ---------- */
  const FEATS = [
    ['Personalização', ' 100% segundo o seu processo', I.sliders, 1],
    ['Simulação', ' de conversas antes de ativar a IA', I.chat, 0],
    ['Classificação', ' com quantas etiquetas quiser', I.tags, 1],
    ['Resumo inteligente', ' do lead para o corretor', I.file, 5],
    ['Alertas via WhatsApp', ' em momentos importantes', I.bell, 5],
    ['Atendimento 24/7', ' fora do horário e feriados', I.clock, 0],
    ['Visitas agendadas', ' sem depender do corretor', I.calcheck, 5],
    ['Empreendimentos', ' indicados automaticamente', I.building, 3]
  ];
  document.getElementById('feats').innerHTML = FEATS.map(([b, r, ic, step]) =>
    `<div class="feat">${ic}<p><b>${b}</b>${r}</p><button type="button" data-step="${step}"><span></span>Ver na prática</button></div>`).join('');
  document.getElementById('feats').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-step]'); if (!b) return;
    userTouched = true; stop(); show(+b.dataset.step);
    document.getElementById('como-funciona').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- Benefícios (abas) ---------- */
  const BENEF = {
    corretores: ['Corretores', [
      ['Leads mais qualificados', 'A IA filtra e prepara o cliente antes de chegar até você.'],
      ['Menos tempo com curiosos', 'Qualificação e triagem automáticas, para você focar em quem quer comprar.'],
      ['Resumo pronto para agir', 'Interesse, intenção, etapa da jornada e próximo passo recomendado de cada lead.'],
      ['Alerta no WhatsApp', 'Aviso quando o lead pede atendimento humano ou quando uma visita é agendada.']]],
    gerencias: ['Gerências', [
      ['Leads organizados sozinhos', 'A IA classifica os leads por comportamento e respostas, com as etiquetas que você criar.'],
      ['Mais visitas agendadas', 'A IA marca as visitas sem depender do corretor, inclusive fora do horário.'],
      ['Alertas no WhatsApp', 'Aviso quando um lead pede atendimento humano, uma visita é agendada ou algo precisa de atenção.'],
      ['Dados sempre organizados', 'Mais eficiência na operação, com as informações do lead registradas automaticamente.']]],
    diretorias: ['Diretorias', [
      ['Atendimento 24/7', 'Resposta em segundos para todos os leads, inclusive fora do horário, feriados e fins de semana.'],
      ['Sem mudar a operação', 'Funciona direto no seu C2S. Você vende mais com os leads que já recebe.'],
      ['Você controla o atendimento', 'Defina como a IA conversa, qualifica e conduz seus clientes, de acordo com o seu processo.'],
      ['Teste antes de ativar', 'Simule conversas e ajuste tudo antes de colocar a IA para falar com clientes reais.']]]
  };
  const tabs = document.getElementById('benef-tabs');
  function setBenef(k) {
    const [title, items] = BENEF[k];
    document.getElementById('benef-title').textContent = title;
    document.getElementById('benef-grid').innerHTML = items.map(([h, p]) => `<div class="bi"><i>✓</i><h4>${h}</h4><p>${p}</p></div>`).join('');
    tabs.querySelectorAll('.tab').forEach((t) => { const on = t.dataset.k === k; t.classList.toggle('is-on', on); t.setAttribute('aria-selected', on); });
  }
  tabs.addEventListener('click', (e) => { const t = e.target.closest('.tab'); if (t) setBenef(t.dataset.k); });
  setBenef('corretores');

  /* ---------- FAQ ---------- */
  const FAQ = [
    ['A IA substitui os corretores?', 'Não. A IA cuida do primeiro contato, da qualificação e das retomadas, e o corretor assume a conversa para conduzir a visita e fechar a venda.'],
    ['A IA funciona com os leads que já chegam à minha operação?', 'Sim. O C2S IA funciona direto no seu C2S, com os leads que você já recebe. Você não muda sua operação.'],
    ['O que o corretor vê depois do atendimento da IA?', 'Um resumo completo do lead, com interesse, intenção, etapa da jornada e próximo passo recomendado. O corretor também é avisado no WhatsApp quando precisa agir.'],
    ['Quanto tempo leva para começar?', 'Você define como o C2S IA conversa e qualifica, testa tudo na simulação e só depois ativa para falar com clientes reais.']
  ];
  const faq = document.getElementById('faq');
  faq.innerHTML = FAQ.map(([q, a], i) => `<div class="qa${i === 0 ? ' is-open' : ''}">
    <button class="qa__q" aria-expanded="${i === 0}"><small>0${i + 1}</small><b>${q}</b><i>${i === 0 ? '−' : '+'}</i></button>
    <div class="qa__a">${a}</div></div>`).join('');
  faq.addEventListener('click', (e) => {
    const b = e.target.closest('.qa__q'); if (!b) return;
    const item = b.parentElement, open = !item.classList.contains('is-open');
    faq.querySelectorAll('.qa').forEach((x) => { x.classList.remove('is-open'); x.querySelector('.qa__q').setAttribute('aria-expanded', 'false'); x.querySelector('i').textContent = '+'; });
    if (open) { item.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); b.querySelector('i').textContent = '−'; }
  });

  /* ---------- Formulário ---------- */
  const form = document.getElementById('lead-form');
  const msg = document.getElementById('form-msg');
  const btn = document.getElementById('form-btn');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.className = 'form__msg'; msg.textContent = '';
    let valid = true;
    form.querySelectorAll('[required]').forEach((el) => {
      const ok = el.value.trim() !== '' && el.checkValidity();
      el.closest('.field').classList.toggle('err', !ok);
      if (!ok) valid = false;
    });
    if (!valid) { msg.className = 'form__msg bad'; msg.textContent = 'Confira os campos obrigatórios.'; return; }
    const data = Object.fromEntries(new FormData(form).entries());
    data.pagina = location.href;
    data.utm = Object.fromEntries(new URLSearchParams(location.search).entries());
    btn.disabled = true; btn.textContent = 'Enviando...';
    try {
      const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error('http ' + r.status);
      form.reset();
      msg.className = 'form__msg ok'; msg.textContent = 'Recebemos seu contato! Em breve nossa equipe fala com você.';
      if (window.dataLayer) window.dataLayer.push({ event: 'lead_enviado' });
      if (window.fbq) window.fbq('track', 'Lead');
    } catch (err) {
      msg.className = 'form__msg bad'; msg.textContent = 'Não foi possível enviar agora. Tente novamente em instantes.';
    } finally { btn.disabled = false; btn.textContent = 'Enviar'; }
  });
})();
