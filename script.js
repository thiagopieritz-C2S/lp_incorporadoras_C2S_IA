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

  /* ---------- Ícones das etapas (idênticos ao Figma, 20px) ---------- */
  const sv20 = (d) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const S = {
    bolt: sv20('<path d="M10.8333 1.6665L2.5 11.6665H10L9.16667 18.3332L17.5 8.33317H10L10.8333 1.6665Z"/>'),
    help: sv20('<path d="M10.0003 18.3332C14.6027 18.3332 18.3337 14.6022 18.3337 9.99984C18.3337 5.39746 14.6027 1.6665 10.0003 1.6665C5.39795 1.6665 1.66699 5.39746 1.66699 9.99984C1.66699 14.6022 5.39795 18.3332 10.0003 18.3332Z"/><path d="M7.5752 7.49999C7.77112 6.94304 8.15782 6.47341 8.66682 6.17426C9.17583 5.87512 9.77427 5.76577 10.3562 5.86558C10.9381 5.96539 11.4659 6.26792 11.8461 6.71959C12.2263 7.17126 12.4344 7.74292 12.4335 8.33332C12.4335 9.99999 9.93353 10.8333 9.93353 10.8333"/><path d="M10 14.1665H10.0083"/>'),
    redo: sv20('<path d="M2.5 10C2.5 11.4834 2.93987 12.9334 3.76398 14.1668C4.58809 15.4001 5.75943 16.3614 7.12987 16.9291C8.50032 17.4968 10.0083 17.6453 11.4632 17.3559C12.918 17.0665 14.2544 16.3522 15.3033 15.3033C16.3522 14.2544 17.0665 12.918 17.3559 11.4632C17.6453 10.0083 17.4968 8.50032 16.9291 7.12987C16.3614 5.75943 15.4001 4.58809 14.1668 3.76398C12.9334 2.93987 11.4834 2.5 10 2.5C7.90329 2.50789 5.89081 3.32602 4.38333 4.78333L2.5 6.66667"/><path d="M2.5 2.5V6.66667H6.66667"/>'),
    building: sv20('<path d="M14.9997 1.6665H4.99967C4.0792 1.6665 3.33301 2.4127 3.33301 3.33317V16.6665C3.33301 17.587 4.0792 18.3332 4.99967 18.3332H14.9997C15.9201 18.3332 16.6663 17.587 16.6663 16.6665V3.33317C16.6663 2.4127 15.9201 1.6665 14.9997 1.6665Z"/><path d="M7.5 18.3333V15H12.5V18.3333"/><path d="M6.66699 5H6.67533M13.3337 5H13.342M10.0003 5H10.0087M10.0003 8.33333H10.0087M10.0003 11.6667H10.0087M13.3337 8.33333H13.342M13.3337 11.6667H13.342M6.66699 8.33333H6.67533M6.66699 11.6667H6.67533"/>'),
    file: sv20('<path d="M12.083 1.6665H4.99967C4.55765 1.6665 4.13372 1.8421 3.82116 2.15466C3.5086 2.46722 3.33301 2.89114 3.33301 3.33317V16.6665C3.33301 17.1085 3.5086 17.5325 3.82116 17.845C4.13372 18.1576 4.55765 18.3332 4.99967 18.3332H14.9997C15.4417 18.3332 15.8656 18.1576 16.1782 17.845C16.4907 17.5325 16.6663 17.1085 16.6663 16.6665V6.24984L12.083 1.6665Z"/><path d="M11.667 1.6665V6.6665H16.667"/><path d="M13.3337 10.8333H6.66699M13.3337 14.1667H6.66699M8.33366 7.5H6.66699"/>'),
    cal: sv20('<path d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"/><path d="M13.3333 1.6665V4.99984M6.66667 1.6665V4.99984M2.5 8.33317H17.5"/>')
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
    { n: '01', title: 'Responde na hora', icon: S.bolt, msgs: [date('18/10/2026'), FORM_CARD('18/10/2026 19:57'), ia(INTRO, '19:57'), ia('Sua opção seria moradia ou investimento?', '19:57'), chip('Respondido em segundos')] },
    { n: '02', title: 'Faz perguntas inteligentes', icon: S.help, msgs: [lead('Moradia', '19:59'), ia('Ótimo, Ana! Em qual faixa de valor você está buscando?', '20:00'), lead('Até R$ 700 mil', '20:00'), ia('Você prefere 1 ou 2 dormitórios?', '20:01'), lead('2 dormitórios', '20:01'), ia('Tem alguma região de preferência?', '20:02')] },
    { n: '03', title: 'Follow-up automático', icon: S.redo, msgs: [date('Hoje'), chip('Follow-up automático'), ia('Ana, ainda tem interesse em conhecer o Residencial Aurora?', '10:02'), ia('Segue o book do Residencial Aurora para você conhecer melhor', '10:02', 'c2s.com/book-aurora'), lead('Gostei, tem outras opções no mesmo bairro?', '10:15')] },
    { n: '04', title: 'Indica empreendimentos', icon: S.building, msgs: [ia('Claro! Olha essas opções:', '10:15'), ia('Residencial Aurora – Duplex 75m²', '10:15', 'c2s.com/residencial-aurora'), ia('Residencial Bosque – 2 dorm. 38m²', '10:15', 'c2s.com/residencial-bosque'), lead('Gostei do Bosque!', '10:16'), ia('Boa escolha, Ana! Você pretende financiar?', '10:16')] },
    { n: '05', title: 'Coleta dados para financiamento', icon: S.file, msgs: [lead('Sim', '10:17'), ia('Perfeito! Qual a sua renda familiar mensal?', '10:17'), lead('Cerca de R$ 12 mil', '10:18'), ia('Você tem FGTS ou valor de entrada em mente?', '10:18'), lead('Tenho FGTS e 10% de entrada', '10:19'), chip('Dados coletados no C2S')] },
    { n: '06', title: 'Agenda pré-visita', icon: S.cal, msgs: [ia('Ótimo! Vamos marcar uma visita ao Residencial Bosque?', '10:20'), lead('Pode ser sábado de manhã', '10:21'), ia('Perfeito! Visita pré-agendada para sábado, às 10h. Um consultor vai confirmar por aqui.', '10:21'), chip('Atendimento assumido no C2S por Rafael'), RESUMO] }
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
    return `<div class="m m--${m.w}" ${d}><span class="m__t">${esc(m.t)}</span>${m.link ? `<a href="#" tabindex="-1" onclick="return false">${esc(m.link)}</a>` : ''}<time>${esc(m.tm)}</time></div>`;
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
    <span class="step__ic">${s.icon}</span><span class="step__t"><small>Passo ${s.n}</small><b>${s.title}</b></span></button></li>`).join('');
  dotsEl.innerHTML = STEPS.map(() => '<i></i>').join('');

  function show(i) {
    current = i;
    chatEl.innerHTML = chatHTML(STEPS[i].msgs, true);
    stepsEl.querySelectorAll('.step').forEach((b, k) => { b.classList.toggle('is-on', k === i); b.setAttribute('aria-selected', k === i); });
    dotsEl.querySelectorAll('i').forEach((d, k) => d.classList.toggle('is-on', k === i));
  }
  function play() { stop(); if (scrollMode() || userTouched || !visible) return; timer = setInterval(() => show((current + 1) % STEPS.length), 6500); }
  function stop() { if (timer) clearInterval(timer); timer = null; }

  stepsEl.addEventListener('click', (e) => {
    const b = e.target.closest('.step'); if (!b) return;
    userTouched = true; stop(); goStep(+b.dataset.i);
  });
  show(0);

  /* Rolagem controla as etapas (desktop): o celular fica fixo e só o conteúdo muda */
  const track = document.getElementById('story-track'), storyEl = document.getElementById('story');
  const mq = window.matchMedia('(min-width: 901px)');
  function scrollMode() { return mq.matches; }
  const stepPx = () => Math.round(window.innerHeight * 0.5);
  const stickyTop = () => parseFloat(getComputedStyle(storyEl).top) || 0;
  function sizeTrack() {
    track.style.height = scrollMode() ? (storyEl.offsetHeight + (STEPS.length - 1) * stepPx() + Math.round(stepPx() * 0.6)) + 'px' : '';
  }
  function onScroll() {
    if (!scrollMode()) return;
    const scrolled = stickyTop() - track.getBoundingClientRect().top;
    const i = Math.max(0, Math.min(STEPS.length - 1, Math.floor(scrolled / stepPx() + 0.0001)));
    if (i !== current) show(i);
  }
  function goStep(i) {
    if (!scrollMode()) { show(i); return; }
    const top = window.scrollY + track.getBoundingClientRect().top - stickyTop() + i * stepPx() + 2;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  sizeTrack(); onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { sizeTrack(); onScroll(); });
  mq.addEventListener && mq.addEventListener('change', () => { sizeTrack(); onScroll(); });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver((en) => { visible = en[0].isIntersecting; visible ? play() : stop(); }, { threshold: 0.35 })
      .observe(document.getElementById('story-phone'));
  }

  /* ---------- Funcionalidades ---------- */
  const FI = (d) => `<svg class="feat__ic" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const FIC = {
    hier: FI('<path d="M32 17C34.7614 17 37 14.7614 37 12C37 9.23858 34.7614 7 32 7C29.2386 7 27 9.23858 27 12C27 14.7614 29.2386 17 32 17Z" stroke="#0F172A"/><path d="M32 17V25V31M14 31V25H50V31" stroke="#1F72EA"/><path d="M14 43C16.7614 43 19 40.7614 19 38C19 35.2386 16.7614 33 14 33C11.2386 33 9 35.2386 9 38C9 40.7614 11.2386 43 14 43Z" stroke="#0F172A"/><path d="M32 43C34.7614 43 37 40.7614 37 38C37 35.2386 34.7614 33 32 33C29.2386 33 27 35.2386 27 38C27 40.7614 29.2386 43 32 43Z" stroke="#0F172A"/><path d="M50 43C52.7614 43 55 40.7614 55 38C55 35.2386 52.7614 33 50 33C47.2386 33 45 35.2386 45 38C45 40.7614 47.2386 43 50 43Z" stroke="#0F172A"/><path d="M8 54C8 50 11 47 14 47C17 47 20 50 20 54M26 54C26 50 29 47 32 47C35 47 38 50 38 54M44 54C44 50 47 47 50 47C53 47 56 50 56 54" stroke="#0F172A"/>'),
    camp: FI('<path d="M52 12H12C9.79086 12 8 13.7909 8 16V48C8 50.2091 9.79086 52 12 52H52C54.2091 52 56 50.2091 56 48V16C56 13.7909 54.2091 12 52 12Z" stroke="#0F172A"/><path d="M8 22H56" stroke="#0F172A"/><path d="M26 42L30 32L34 42M27.5 38H32.5M40 32V42" stroke="#1F72EA"/>'),
    emp: FI('<path d="M24 30H10C8.89543 30 8 30.8954 8 32V52C8 53.1046 8.89543 54 10 54H24C25.1046 54 26 53.1046 26 52V32C26 30.8954 25.1046 30 24 30Z" stroke="#0F172A"/><path d="M46 14H28C26.8954 14 26 14.8954 26 16V52C26 53.1046 26.8954 54 28 54H46C47.1046 54 48 53.1046 48 52V16C48 14.8954 47.1046 14 46 14Z" stroke="#0F172A"/><path d="M32 22H36M40 22H42M32 30H36M40 30H42M32 38H36M40 38H42M4 54H60" stroke="#1F72EA"/><path d="M50 6V14M47 9C47 7 53 7 53 9C53 11 47 11 47 9ZM47 9C47 7 53 8 53 10" stroke="#0F172A"/>'),
    inv: FI('<path d="M32 20C35.3137 20 38 17.3137 38 14C38 10.6863 35.3137 8 32 8C28.6863 8 26 10.6863 26 14C26 17.3137 28.6863 20 32 20Z" stroke="#0F172A"/><path d="M22 28C24 23 28 22 32 22C36 22 40 23 42 28" stroke="#0F172A"/><path d="M14 51C16.7614 51 19 48.7614 19 46C19 43.2386 16.7614 41 14 41C11.2386 41 9 43.2386 9 46C9 48.7614 11.2386 51 14 51Z" stroke="#0F172A"/><path d="M50 51C52.7614 51 55 48.7614 55 46C55 43.2386 52.7614 41 50 41C47.2386 41 45 43.2386 45 46C45 48.7614 47.2386 51 50 51Z" stroke="#0F172A"/><path d="M24 36L28 40L32 36L36 40L40 36" stroke="#1F72EA"/><path d="M6 60C6 55 9 52 14 52M58 60C58 55 55 52 50 52" stroke="#0F172A"/>'),
    dist: FI('<path d="M30 29C34.9706 29 39 24.9706 39 20C39 15.0294 34.9706 11 30 11C25.0294 11 21 15.0294 21 20C21 24.9706 25.0294 29 30 29Z" stroke="#0F172A"/><path d="M16 50C16 41 22 36 30 36C38 36 44 41 44 50" stroke="#0F172A"/><path d="M46 46H14C12.8954 46 12 46.8954 12 48V56C12 57.1046 12.8954 58 14 58H46C47.1046 58 48 57.1046 48 56V48C48 46.8954 47.1046 46 46 46Z" stroke="#1F72EA"/><path d="M48 12C51 14 52 17 52 20M52 8C56 11 58 16 58 20" stroke="#1F72EA"/>'),
    ia: FI('<path d="M32 6C23 6 16 13 16 22C16 28 19 32 23 36C25 38 26 40 26 43H38C38 40 39 38 41 36C45 32 48 28 48 22C48 13 41 6 32 6Z" stroke="#0F172A"/><path d="M26 50H38M28 56H36" stroke="#0F172A"/><path d="M26 24L32 16L38 24L32 30L26 24Z" stroke="#1F72EA"/>'),
    tech: FI('<path d="M36 6H18C15.7909 6 14 7.79086 14 10V52C14 54.2091 15.7909 56 18 56H36C38.2091 56 40 54.2091 40 52V10C40 7.79086 38.2091 6 36 6Z" stroke="#0F172A"/><path d="M22 50H32" stroke="#0F172A"/><path d="M38 40V30C38 29.2044 38.3161 28.4413 38.8787 27.8787C39.4413 27.3161 40.2044 27 41 27C41.7956 27 42.5587 27.3161 43.1213 27.8787C43.6839 28.4413 44 29.2044 44 30V36L53 38C55 38.5 56 40 56 42L54 52H40L36 44" stroke="#1F72EA"/>'),
    arq: FI('<path d="M6 19.9999V51.9999C6 52.5303 6.21071 53.039 6.58579 53.4141C6.96086 53.7892 7.46957 53.9999 8 53.9999H50C50.5304 53.9999 51.0391 53.7892 51.4142 53.4141C51.7893 53.039 52 52.5303 52 51.9999V25.9999H28L24 19.9999H8C7.69596 19.8243 7.35107 19.7319 7 19.7319C6.64893 19.7319 6.30404 19.8243 6 19.9999Z" stroke="#0F172A"/><path d="M14 14H40M18 8H40" stroke="#1F72EA"/><path d="M6 54L14 34H60L52 54" stroke="#0F172A"/>')
  };
  const FEATS = [
    ['Personalização', ' 100%<br>segundo o seu processo', FIC.hier, 1],
    ['Simulação', ' de conversas<br>antes de ativar a IA', FIC.camp, 0],
    ['Classificação', '<br>com quantas etiquetas quiser', FIC.emp, 1],
    ['Resumo inteligente', '<br>do lead para o corretor', FIC.inv, 5],
    ['Alertas via WhatsApp', '<br>em momentos importantes', FIC.dist, 5],
    ['Atendimento 24/7', '<br>fora do horário e feriados', FIC.ia, 0],
    ['Visitas agendadas', '<br>sem depender do corretor', FIC.tech, 5],
    ['Empreendimentos', '<br>indicados automaticamente', FIC.arq, 3]
  ];
  const PLAY = '<span class="feat__play"><svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true"><path d="M1 1L11 7L1 13V1Z" fill="white"/></svg></span>';
  document.getElementById('feats').innerHTML = FEATS.map(([b, r, ic, step]) =>
    `<div class="feat">${ic}<p><b>${b}</b>${r}</p><button type="button" data-step="${step}">${PLAY}Ver na prática</button></div>`).join('');
  document.getElementById('feats').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-step]'); if (!b) return;
    userTouched = true; stop();
    if (scrollMode()) goStep(+b.dataset.step); else { show(+b.dataset.step); document.getElementById('como-funciona').scrollIntoView({ behavior: 'smooth' }); }
  });

  /* ---------- Benefícios (abas) ---------- */
  const BENEF = {
    corretores: ['Benefícios para corretores', [
      ['Leads mais qualificados', 'A IA filtra e prepara o cliente antes de chegar até você.'],
      ['Menos tempo com curiosos', 'Qualificação e triagem automáticas, para você focar em quem quer comprar.'],
      ['Resumo pronto para agir', 'Interesse, intenção, etapa da jornada e próximo passo recomendado de cada lead.'],
      ['Alerta no WhatsApp', 'Aviso quando o lead pede atendimento humano ou quando uma visita é agendada.']]],
    gerencias: ['Benefícios para gerências', [
      ['Leads organizados sozinhos', 'A IA classifica os leads por comportamento e respostas, com as etiquetas que você criar.'],
      ['Mais visitas agendadas', 'A IA marca as visitas sem depender do corretor, inclusive fora do horário.'],
      ['Alertas no WhatsApp', 'Aviso quando um lead pede atendimento humano, uma visita é agendada ou algo precisa de atenção.'],
      ['Dados sempre organizados', 'Mais eficiência na operação, com as informações do lead registradas automaticamente.']]],
    diretorias: ['Benefícios para diretorias', [
      ['Atendimento 24/7', 'Resposta em segundos para todos os leads, inclusive fora do horário, feriados e fins de semana.'],
      ['Sem mudar a operação', 'Funciona direto no seu C2S. Você vende mais com os leads que já recebe.'],
      ['Você controla o atendimento', 'Defina como a IA conversa, qualifica e conduz seus clientes, de acordo com o seu processo.'],
      ['Teste antes de ativar', 'Simule conversas e ajuste tudo antes de colocar a IA para falar com clientes reais.']]]
  };
  const tabs = document.getElementById('benef-tabs');
  function setBenef(k) {
    const [title, items] = BENEF[k];
    document.getElementById('benef-title').textContent = title;
    document.getElementById('benef-grid').innerHTML = items.map(([h, p]) => `<div class="bi"><i><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M11.4 14.6L14.9 21.4L20.8 10.9" stroke="#166534" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></i><div><h4>${h}</h4><p>${p}</p></div></div>`).join('');
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
  // Não usamos <form>/evento submit de propósito: o script de rastreamento do RD captura
  // qualquer <form> sozinho e criaria uma conversão duplicada ("lead-form").
  const fields = () => form.querySelectorAll('input, select, textarea');
  const send = async () => {
    msg.className = 'form__msg'; msg.textContent = '';
    let valid = true;
    form.querySelectorAll('[required]').forEach((el) => {
      const ok = el.value.trim() !== '' && el.checkValidity();
      el.closest('.field').classList.toggle('err', !ok);
      if (!ok) valid = false;
    });
    if (!valid) { msg.className = 'form__msg bad'; msg.textContent = 'Confira os campos obrigatórios.'; return; }
    const data = {}; fields().forEach((el) => { if (el.name) data[el.name] = el.value; });
    data.pagina = location.href;
    data.referrer = document.referrer || '';
    data.utm = Object.fromEntries(new URLSearchParams(location.search).entries());
    // Atribuição do RD Station: o script de rastreamento do RD grava o id do visitante no cookie "rdtrk"
    try {
      const m = document.cookie.match(/(?:^|; )rdtrk=([^;]*)/);
      if (m) { const v = decodeURIComponent(m[1]); const j = v.startsWith('{') ? JSON.parse(v).id : v; if (j && String(j).length < 100) data.rd_client_id = String(j); }
    } catch (e) {}
    btn.disabled = true; btn.textContent = 'Enviando...';
    try {
      const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error('http ' + r.status);
      fields().forEach((el) => { el.value = ''; });
      msg.className = 'form__msg ok'; msg.textContent = 'Recebemos seu contato! Em breve nossa equipe fala com você.';
      if (window.dataLayer) window.dataLayer.push({ event: 'lead_enviado' });
      if (window.fbq) window.fbq('track', 'Lead');
    } catch (err) {
      msg.className = 'form__msg bad'; msg.textContent = 'Não foi possível enviar agora. Tente novamente em instantes.';
    } finally { btn.disabled = false; btn.textContent = 'Enviar'; }
  };
  btn.addEventListener('click', send);
  form.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'BUTTON') { e.preventDefault(); send(); } });
})();
