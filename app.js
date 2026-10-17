

const COLORS = ["#F9543A","#FF8A5C","#FFC94D","#7DD3FC","#4ADE80","#F0ABFC"];
const FIRST = ["Sofia","Liam","Valentina","Mateo","Emma","Lucas","Isabella","Diego","Camila","Noah","Luciana","Martin"];
const LAST = ["Rios","Carter","Mendoza","Alvarez","Bennett","Torres","Vega","Salazar","Paredes","Quinn","Herrera","Campos"];
const STUDIOS = ["Pilates","CrossFit","Martial Arts"];
const PLANS = [49, 59, 79, 89];

// ---------------- i18n ----------------
const I18N = {
en: {
  "nav.dash":"Dashboard","nav.how":"How it works","nav.why":"Why MemberPulse","nav.pricing":"Pricing","nav.demo":"Book a 5-min demo",
  "login.tag":"Member retention for boutique studios","login.title":"Welcome back","login.sub":"Sign in to see your studio's live retention demo.",
  "login.name":"Studio / coach name","login.email":"Email","login.pass":"Password","login.enter":"Enter demo →",
  "login.fill":"Use demo account","login.note":"Local demo — no backend. Any credentials work.","login.out":"Log out",
  "hero.eyebrow":"Member retention for boutique studios · Pilates · CrossFit · Martial Arts",
  "hero.title":"What if you knew <em>first?</em>",
  "hero.lede":"Some members stop coming <strong>weeks before they cancel</strong> — from 3× a week to once, then they disappear. MemberPulse tracks attendance and flags who is losing motivation, so you step in <strong>before</strong> they leave.",
  "hero.cta1":"See live alerts ↓","hero.cta2":"Simulate 1 week →",
  "hero.note":"It starts with one missed class. This demo uses fictional studio data.",
  "hero.live":"LIVE ALERT","hero.foot":"Every warning sign in one place — no spreadsheets.",
  "kpi.members":"Active members","kpi.across":"Across 3 programs","kpi.attn":"Needs attention",
  "kpi.visits":"Avg visits / week","kpi.last4":"studio-wide, last 4 wks","kpi.rev":"Revenue at risk","kpi.monthly":"monthly, at-risk members",
  "dash.title":"Risk queue","dash.sub":"— proactive, not reactive","dash.search":"Search member…",
  "dash.allProg":"All programs","dash.allRisk":"All risk levels","dash.sim":"Simulate 1 week →",
  "risk.highOnly":"High only","risk.medOnly":"Medium only","risk.stableOnly":"Stable only",
  "detail.chart":"Attendance — last 8 weeks","detail.next":"Suggested next step for staff:",
  "detail.msg":"Friendly, personalized message (editable):","detail.send":"Send message ✓",
  "detail.checkin":"+ Check-in today","detail.saved":"Mark as saved ♥","detail.log":"Activity log",
  "how.title":"How MemberPulse works","how.s1t":"Detect a significant drop",
  "how.s1p":"We compare each member's last 2 weeks vs. their normal rhythm. A 30%+ dip raises a flag — 50%+ is high risk.",
  "how.s2t":"Alert the team","how.s2p":"One list, ready to act. No hours reviewing records, no reports to dig through. The warning comes to you.",
  "how.s3t":"Staff sends a friendly message","how.s3p":"Maybe they need a new schedule, motivation, or help getting back into routine. Reach out at the right moment.",
  "why.title":"Why MemberPulse","why.sub":"Not just tracking who shows up — knowing when someone needs support.",
  "why.c1":"Spreadsheets","why.c2":"Typical booking software","why.r1":"Spotting drops","why.r1a":"Manual review",
  "why.r1b":"Logs visits, no alerts","why.r1c":"Automatic alerts ✓","why.r2":"When you act","why.r2a":"After they cancel",
  "why.r2a2":"After they cancel","why.r2c":"When attendance starts to fall ✓","why.r3":"Staff time","why.r3a":"Hours of records",
  "why.r3b":"Reports to dig through","why.r3c":"One list, ready to act ✓",
  "price.per":"/ location / month",
  "price.p1":"Simple monthly subscription per studio · Free 14-day trial — studios see their first alerts before they pay.",
  "price.p2":"Pays for itself: keeping just <strong>one member a month</strong> covers the subscription. At 100 studios → <strong>$70,800 ARR</strong>.",
  "price.p3":"Boutique fitness: $47.9B (2023) → $85.9B (2030) ≈ 8.7% yearly growth. ~9,900 CrossFit gyms alone.",
  "price.ask":"The ask: $120K pre-seed","price.l1":"50% product & integrations ($60K)","price.l2":"30% pilots & sales ($36K)",
  "price.l3":"20% operations ($24K)","price.ms":"Month 3: pilot with 5 studios · Month 6: 25 paying · Month 12: 100 paying.",
  "foot.slogan":"MemberPulse: Spot the drop. Step in. Keep them moving.",
  "foot.sub":"Because keeping a member is better than winning them back."
},
es: {
  "nav.dash":"Panel","nav.how":"Cómo funciona","nav.why":"Por qué MemberPulse","nav.pricing":"Precios","nav.demo":"Agenda demo de 5 min",
  "login.tag":"Retención para estudios boutique","login.title":"Bienvenido","login.sub":"Inicia sesión para ver la demo de retención de tu estudio.",
  "login.name":"Estudio / entrenador","login.email":"Correo","login.pass":"Contraseña","login.enter":"Entrar a la demo →",
  "login.fill":"Usar cuenta demo","login.note":"Demo local — sin servidor. Cualquier dato funciona.","login.out":"Salir",
  "hero.eyebrow":"Retención para estudios boutique · Pilates · CrossFit · Artes marciales",
  "hero.title":"¿Y si fueras el <em>primero</em> en saberlo?",
  "hero.lede":"Algunos miembros dejan de venir <strong>semanas antes de cancelar</strong> — de 3× por semana a una vez, y luego desaparecen. MemberPulse monitorea la asistencia y detecta quién pierde motivación, para que actúes <strong>antes</strong> de que se vayan.",
  "hero.cta1":"Ver alertas en vivo ↓","hero.cta2":"Simular 1 semana →",
  "hero.note":"Todo empieza con una clase perdida. Esta demo usa datos ficticios.",
  "hero.live":"ALERTA EN VIVO","hero.foot":"Todas las señales en un solo lugar — sin hojas de cálculo.",
  "kpi.members":"Miembros activos","kpi.across":"En 3 programas","kpi.attn":"Necesitan atención",
  "kpi.visits":"Visitas prom. / semana","kpi.last4":"todo el estudio, últ. 4 sem","kpi.rev":"Ingresos en riesgo","kpi.monthly":"mensual, miembros en riesgo",
  "dash.title":"Cola de riesgo","dash.sub":"— proactivo, no reactivo","dash.search":"Buscar miembro…",
  "dash.allProg":"Todos los programas","dash.allRisk":"Todos los niveles","dash.sim":"Simular 1 semana →",
  "risk.highOnly":"Solo alto","risk.medOnly":"Solo medio","risk.stableOnly":"Solo estable",
  "detail.chart":"Asistencia — últimas 8 semanas","detail.next":"Próximo paso sugerido para el equipo:",
  "detail.msg":"Mensaje amable y personalizado (editable):","detail.send":"Enviar mensaje ✓",
  "detail.checkin":"+ Registrar visita hoy","detail.saved":"Marcar como recuperado ♥","detail.log":"Registro de actividad",
  "how.title":"Cómo funciona MemberPulse","how.s1t":"Detecta una caída importante",
  "how.s1p":"Comparamos las últimas 2 semanas de cada miembro con su ritmo normal. Una caída del 30%+ genera alerta — 50%+ es riesgo alto.",
  "how.s2t":"Alerta al equipo","how.s2p":"Una sola lista, lista para actuar. Sin horas revisando registros ni reportes eternos. La alerta llega a ti.",
  "how.s3t":"El equipo envía un mensaje amable","how.s3p":"Quizá necesita otro horario, motivación o ayuda para retomar la rutina. Escríbele en el momento justo.",
  "why.title":"Por qué MemberPulse","why.sub":"No solo registrar quién viene — saber cuándo alguien necesita apoyo.",
  "why.c1":"Hojas de cálculo","why.c2":"Software de reservas típico","why.r1":"Detectar caídas","why.r1a":"Revisión manual",
  "why.r1b":"Registra visitas, sin alertas","why.r1c":"Alertas automáticas ✓","why.r2":"Cuándo actúas","why.r2a":"Después de que cancelan",
  "why.r2a2":"Después de que cancelan","why.r2c":"Cuando la asistencia empieza a caer ✓","why.r3":"Tiempo del equipo","why.r3a":"Horas de registros",
  "why.r3b":"Reportes difíciles de leer","why.r3c":"Una lista, lista para actuar ✓",
  "price.per":"/ sede / mes",
  "price.p1":"Suscripción mensual simple por estudio · Prueba gratis de 14 días — el estudio ve sus primeras alertas antes de pagar.",
  "price.p2":"Se paga solo: retener apenas <strong>un miembro al mes</strong> cubre la suscripción. Con 100 estudios → <strong>$70,800 ARR</strong>.",
  "price.p3":"Fitness boutique: $47.9B (2023) → $85.9B (2030) ≈ 8.7% crecimiento anual. ~9,900 gimnasios CrossFit solamente.",
  "price.ask":"La propuesta: $120K pre-semilla","price.l1":"50% producto e integraciones ($60K)","price.l2":"30% pilotos y ventas ($36K)",
  "price.l3":"20% operaciones ($24K)","price.ms":"Mes 3: piloto con 5 estudios · Mes 6: 25 de pago · Mes 12: 100 de pago.",
  "foot.slogan":"MemberPulse: Detecta la caída. Actúa. Mantenlos en movimiento.",
  "foot.sub":"Porque retener un miembro es mejor que intentar recuperarlo."
}};

const RISK_L = { High:{en:"High",es:"Alto"}, Medium:{en:"Medium",es:"Media"}, Stable:{en:"Stable",es:"Estable"}, Saved:{en:"Saved",es:"Recuperado"} };

let lang = localStorage.getItem("mp_lang") || "en";
const t = k => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;
const rl = level => (RISK_L[level] && RISK_L[level][lang]) || level;

function setLang(l){
  lang = l; localStorage.setItem("mp_lang", l);
  document.documentElement.lang = l === "es" ? "es" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{ el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll(".lang-toggle button").forEach(b=>b.classList.toggle("active", b.dataset.lang===l));
  renderAll();
}

// ---------------- data ----------------
let weekOffset = 0, members = [], selectedId = null;
const rand = (a,b)=>Math.floor(Math.random()*(b-a+1))+a;

function seedMembers(){
  members = [];
  const base = [
    [3,3,4,3,3,2,1,0],[3,2,3,3,1,1,0,1],[4,4,3,4,2,1,1,1],
    [3,3,3,2,2,2,1,1],[2,3,2,3,2,1,2,1],[3,2,2,3,3,2,2,2],
    [3,3,3,3,3,3,3,2],[2,2,3,2,2,3,2,3],[4,3,4,4,3,4,3,3],
    [3,3,2,1,2,2,1,2],[2,2,2,2,1,0,1,0],[3,4,3,2,3,3,2,3],
  ];
  const absent = [9,12,8,5,6,1,0,2,1,4,11,2];
  for(let i=0;i<12;i++){
    members.push({ id:i+1, name:FIRST[i]+" "+LAST[i], initials:FIRST[i][0]+LAST[i][0],
      color:COLORS[i%COLORS.length], studio:STUDIOS[i%3], plan:PLANS[i%PLANS.length],
      attendance:[...base[i]], daysSinceVisit:absent[i], contacted:false, saved:false, log:[] });
  }
  selectedId = 1;
}

const baseline = att => att.slice(0,6).reduce((a,b)=>a+b,0)/6;
const recent = att => att.slice(6,8).reduce((a,b)=>a+b,0)/2;

function riskOf(m){
  if(m.saved) return {level:"Saved", drop:0};
  const b = baseline(m.attendance), r = recent(m.attendance);
  if(b === 0) return {level:"Stable", drop:0};
  const drop = Math.round((1-r/b)*100);
  if((r<=0.5 && b>=2) || drop>=50) return {level:"High", drop:Math.max(drop,55)};
  if(drop>=30) return {level:"Medium", drop};
  return {level:"Stable", drop:Math.max(drop,0)};
}

// ---------------- localized dynamic strings ----------------
const perMonth = ()=> lang==="es" ? "/mes" : "/mo";
const usuallyW = ()=> lang==="es" ? "promedio ~" : "usually ~";
const lastVisitW = ()=> lang==="es" ? "últ. visita hace" : "last visit";
const agoW = ()=> lang==="es" ? "d" : "d ago";
const absentSuffix = ()=> lang==="es" ? "d ausente" : "d absent";

function metaLine(m){
  return `${m.studio} · $${m.plan}${perMonth()} · ${usuallyW()}${baseline(m.attendance).toFixed(1)}×/sem · ${lastVisitW()} ${m.daysSinceVisit}${agoW()}`;
}
function suggestedNext(m, risk){
  if(lang==="es"){
    if(risk.level==="High") return `Contacto personal en 24h. Menciona su rutina de ${m.studio} por nombre, ofrece 2 horarios alternos e invítalo a traer un amigo gratis esta semana.`;
    if(risk.level==="Medium") return `Empujón amable esta semana. Celebra su progreso en ${m.studio}, pregunta si el horario aún le funciona y sugiérele reservar una clase ahora.`;
    if(risk.level==="Saved") return `Miembro recuperado ♥ Mantén el ritmo: reconoce su regreso en la próxima clase.`;
    return `Sin acción necesaria. Mantenlo motivado con un reto mensual o una mención en ${m.studio}.`;
  }
  if(risk.level==="High") return `Personal check-in within 24h. Mention their ${m.studio} routine by name, offer 2 alternative class times, and invite them to bring a friend free this week.`;
  if(risk.level==="Medium") return `Friendly nudge this week. Celebrate their progress in ${m.studio}, ask if the schedule still fits, suggest one class to book right now.`;
  if(risk.level==="Saved") return `Member recovered ♥ Keep the rhythm: acknowledge their comeback in the next class.`;
  return `No action needed. Keep them engaged with a monthly challenge or a shout-out in ${m.studio}.`;
}
function messageFor(m, risk){
  const first = m.name.split(" ")[0];
  const coach = lang==="es" ? "Coach Dani" : "Coach Dani";
  if(lang==="es"){
    if(risk.level==="High") return `¡Hola ${first}! Soy ${coach} del estudio 💪 Te extrañamos en ${m.studio} — venías increíble a 3×/semana. ¿Todo bien con tu horario? Te aparté un lugar mar 6pm + jue 7am. ¿Te reservo?`;
    if(risk.level==="Medium") return `¡Hola ${first}! ${coach} por aquí 👋 Noté que bajaste un poco el ritmo en ${m.studio}. ¿Ajustamos algo — horarios, intensidad? Llevas un gran progreso, ¡retomemos con una clase esta semana!`;
    return `¡Hola ${first}! ${coach} por aquí — la estás rompiendo en ${m.studio} 🔥 ¿Te animas al reto del próximo mes con nosotros?`;
  }
  if(risk.level==="High") return `Hi ${first}! It's ${coach} from the studio 💪 We miss seeing you in ${m.studio} — you were doing amazing at 3x/week. Is everything OK with your schedule? I saved you a spot Tue 6pm + Thu 7am. Want me to book you in?`;
  if(risk.level==="Medium") return `Hey ${first}! ${coach} here 👋 Noticed you slowed down a bit in ${m.studio} lately. Anything we can adjust — times, intensity? You've got great momentum, let's keep it going with one class this week!`;
  return `Hi ${first}! ${coach} here — just saying you're crushing it in ${m.studio} 🔥 Want to try next month's challenge with us?`;
}
function insightHTML(m, r){
  const b = baseline(m.attendance).toFixed(1), rc = recent(m.attendance).toFixed(1);
  if(lang==="es"){
    if(r.level==="High") return `⚠️ <strong>Señal de alerta:</strong> de <strong>${b}×/sem</strong> a <strong>${rc}×/sem</strong> (−${r.drop}%). Pasó de 3× por semana a casi cero — el patrón clásico <em>semanas antes de cancelar</em>.`;
    if(r.level==="Medium") return `🔶 <strong>Señal temprana:</strong> de <strong>${b}×/sem</strong> a <strong>${rc}×/sem</strong> (−${r.drop}%). Una clase perdida se volvió patrón — escríbele ahora que aún es recuperable.`;
    if(r.level==="Saved") return `💚 <strong>Recuperado:</strong> este miembro retomó el ritmo gracias a tu mensaje.`;
    return `✅ <strong>Saludable:</strong> estable en <strong>${rc}×/sem</strong> vs promedio <strong>${b}×/sem</strong>. Sin acción necesaria.`;
  }
  if(r.level==="High") return `⚠️ <strong>Warning sign:</strong> from <strong>${b}×/week</strong> to <strong>${rc}×/week</strong> (−${r.drop}%). From 3× a week to almost zero — the classic pattern <em>weeks before cancelling</em>.`;
  if(r.level==="Medium") return `🔶 <strong>Early signal:</strong> from <strong>${b}×/week</strong> to <strong>${rc}×/week</strong> (−${r.drop}%). One missed class became a pattern — reach out now while motivation is recoverable.`;
  if(r.level==="Saved") return `💚 <strong>Recovered:</strong> this member is back on track after your outreach.`;
  return `✅ <strong>Healthy:</strong> holding at <strong>${rc}×/week</strong> vs usual <strong>${b}×/week</strong>. No action needed.`;
}
const L = {
  noMatch: ()=> lang==="es" ? "Ningún miembro coincide con los filtros." : "No members match the filters.",
  noOutreach: ()=> lang==="es" ? "Aún sin contacto — sé el primero en actuar." : "No outreach yet — be the first to step in.",
  allClear: ()=> lang==="es" ? "Todo despejado — sin miembros en alto riesgo. 🎉" : "All clear — no high-risk members right now. 🎉",
  highRiskN: n => lang==="es" ? `${n} miembros en alto riesgo` : `${n} high-risk members`,
  riskSub: (h,md)=> lang==="es" ? `${h} alto · ${md} medio` : `${h} high · ${md} medium`,
  steady: ()=> "steady ✓",
  trendDown: d => `▼ -${d}%`,
  msgSentLog: txt => lang==="es" ? `Mensaje enviado: “${txt}…” ✉` : `Message sent: “${txt}…” ✉`,
  checkinLog: n => lang==="es" ? `Visita registrada hoy ✅ (${n} visitas esta semana)` : `Checked in today ✅ (${n} visits this week)`,
  refireLog: w => lang==="es" ? `Semana ${w}: faltó a todo — alerta reactivada 🔔` : `Week ${w}: missed all classes — alert re-fired 🔔`,
  savedLog: ()=> lang==="es" ? "Marcado como RECUPERADO ♥ — retomó la rutina" : "Marked as SAVED ♥ — back in routine",
  toastWeek: h => lang==="es" ? `⏩ <strong>1 semana simulada</strong> (semana ${8+weekOffset}). <strong>${h} en alto riesgo</strong> te necesitan.` : `⏩ <strong>1 week simulated</strong> (now week ${8+weekOffset}). <strong>${h} high-risk</strong> members need you.`,
  toastSend: n => lang==="es" ? `✉ Mensaje enviado a <strong>${n}</strong>. Bien — actuaste <em>antes</em> de la cancelación.` : `✉ Message sent to <strong>${n}</strong>. Great — you stepped in <em>before</em> the cancel.`,
  toastCheck: n => lang==="es" ? `✅ <strong>${n}</strong> registró visita. Mira cómo sube esa tendencia.` : `✅ <strong>${n}</strong> checked in. Watch that trend climb.`,
  toastSaved: n => lang==="es" ? `♥ <strong>${n}</strong> está de vuelta. Retener es mejor que recuperar.` : `♥ <strong>${n}</strong> is back! Keeping a member beats winning them back.`,
};

// ---------------- rendering ----------------
const $ = id => document.getElementById(id);

function filteredMembers(){
  const q = ($("search").value||"").toLowerCase();
  const st = $("filterStudio").value, rk = $("filterRisk").value;
  return members.filter(m=>{
    const r = riskOf(m).level;
    if(st!=="all" && m.studio!==st) return false;
    if(rk!=="all" && r!==rk) return false;
    if(q && !m.name.toLowerCase().includes(q)) return false;
    return true;
  }).sort((a,b)=>{
    const o = {High:0,Medium:1,Stable:2,Saved:3};
    return o[riskOf(a).level]-o[riskOf(b).level];
  });
}

function sparkHTML(att){
  const max = Math.max(...att,1);
  return `<div class="spark">` + att.map(v=>{
    const h = Math.round(6+(v/max)*26);
    const cls = v<=1 ? "hot" : v===2 ? "warm" : "ok";
    return `<i class="${cls}" style="height:${h}px" title="${v}"></i>`;
  }).join("") + `</div>`;
}

function renderList(){
  const list = filteredMembers();
  $("memberList").innerHTML = list.map(m=>{
    const r = riskOf(m);
    return `<button class="mcard ${m.id===selectedId?'selected':''} ${m.contacted?'contacted':''}" data-id="${m.id}">
      <div class="mini-avatar" style="background:${m.color}">${m.initials}</div>
      <div><h4>${m.name} ${m.contacted?'· ✉':''}</h4>
        <div class="sub">${m.studio} · $${m.plan}${perMonth()} · ${lastVisitW()} ${m.daysSinceVisit}${agoW()}</div>
        ${sparkHTML(m.attendance)}
      </div>
      <div style="text-align:right"><span class="badge ${r.level}">${rl(r.level)}</span>
        <div class="drop ${r.drop>0?'down':'up'}" style="margin-top:6px">${r.drop>0?'▼ -':''}${r.drop}%</div>
      </div>
    </button>`;
  }).join("") || `<p class="muted">${L.noMatch()}</p>`;
  document.querySelectorAll(".mcard").forEach(c=>
    c.addEventListener("click", ()=>{ selectedId=+c.dataset.id; renderList(); renderDetail(); }));
}

function drawChart(att){
  const cv = $("trendChart"), ctx = cv.getContext("2d");
  const W = cv.width, H = cv.height;
  ctx.clearRect(0,0,W,H);
  const max = Math.max(...att,4);
  ctx.strokeStyle = "#1E3E5C"; ctx.lineWidth = 1;
  for(let g=0; g<=4; g++){ const y = 14+g*(H-34)/4;
    ctx.beginPath(); ctx.moveTo(34,y); ctx.lineTo(W-8,y); ctx.stroke(); }
  const b = baseline(att), by = H-20-(b/max)*(H-40);
  ctx.setLineDash([6,5]); ctx.strokeStyle = "#9DB2C4";
  ctx.beginPath(); ctx.moveTo(34,by); ctx.lineTo(W-8,by); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = "#9DB2C4"; ctx.font = "11px sans-serif";
  ctx.fillText(lang==="es"?"ritmo":"usual", W-52, by-6);
  const px = i=>34+i*(W-46)/7, py = v=>H-20-(v/max)*(H-40);
  const grad = ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,"rgba(249,84,58,.35)"); grad.addColorStop(1,"rgba(249,84,58,0)");
  ctx.beginPath(); ctx.moveTo(px(0),py(att[0]));
  att.forEach((v,i)=>ctx.lineTo(px(i),py(v)));
  ctx.lineTo(px(7),H-20); ctx.lineTo(px(0),H-20); ctx.closePath();
  ctx.fillStyle = grad; ctx.fill();
  ctx.beginPath(); att.forEach((v,i)=> i?ctx.lineTo(px(i),py(v)):ctx.moveTo(px(i),py(v)));
  ctx.strokeStyle = "#F9543A"; ctx.lineWidth = 3; ctx.lineJoin = "round"; ctx.stroke();
  att.forEach((v,i)=>{
    ctx.beginPath(); ctx.arc(px(i),py(v),5,0,7);
    ctx.fillStyle = i>=6 && v<=1 ? "#F9543A" : "#0A2135";
    ctx.fill(); ctx.lineWidth = 2.5;
    ctx.strokeStyle = i>=6 && v<=1 ? "#F9543A" : "#FF8A5C"; ctx.stroke();
    ctx.fillStyle = "#fff"; ctx.font = "bold 11px sans-serif";
    ctx.fillText(v, px(i)-3.5, py(v)-10);
  });
}

function renderDetail(){
  const m = members.find(x=>x.id===selectedId) || filteredMembers()[0];
  if(!m) return;
  selectedId = m.id;
  const r = riskOf(m);
  $("dAvatar").textContent = m.initials;
  $("dAvatar").style.background = m.color;
  $("dName").textContent = m.name;
  $("dMeta").textContent = metaLine(m);
  const badge = $("dRisk");
  badge.textContent = (m.contacted?"✉ ":"")+rl(r.level);
  badge.className = "badge "+r.level;
  $("dTrendText").textContent = r.drop>0 ? L.trendDown(r.drop)+(lang==="es"?" vs ritmo":" vs usual") : L.steady();
  drawChart(m.attendance);
  $("weekLabels").innerHTML = m.attendance.map((_,i)=>`<span>W${i+1+weekOffset}</span>`).join("");
  $("dInsight").innerHTML = insightHTML(m, r);
  $("dNext").textContent = suggestedNext(m, r);
  if(document.activeElement!==$("msgBox")) $("msgBox").value = messageFor(m, r);
  $("activityLog").innerHTML = m.log.length ? m.log.map(l=>`<li>${l}</li>`).join("") : `<li>${L.noOutreach()}</li>`;
}

function renderKPIs(){
  const risks = members.map(riskOf);
  const h = risks.filter(r=>r.level==="High").length, md = risks.filter(r=>r.level==="Medium").length;
  $("kpiRisk").textContent = h+md;
  $("kpiRiskSub").textContent = L.riskSub(h,md);
  $("kpiAvg").textContent = (members.reduce((a,m)=>a+recent(m.attendance),0)/members.length).toFixed(1)+"×";
  $("kpiRev").textContent = "$"+members.filter(m=>["High","Medium"].includes(riskOf(m).level)).reduce((a,m)=>a+m.plan,0).toLocaleString();
  $("heroAlertCount").textContent = L.highRiskN(h);
  const highs = members.filter(m=>riskOf(m).level==="High").slice(0,3);
  $("heroAlerts").innerHTML = highs.map(m=>{
    const r = riskOf(m);
    return `<div class="hero-alert"><span class="badge High">${rl("High").toUpperCase()}</span><span><strong>${m.name.split(" ")[0]}</strong> · ${m.studio} · −${r.drop}% · ${m.daysSinceVisit}${absentSuffix()}</span></div>`;
  }).join("") || `<p class="muted">${L.allClear()}</p>`;
}

function toast(msg){
  const d = document.createElement("div");
  d.className = "toast"; d.innerHTML = msg;
  $("toasts").appendChild(d);
  setTimeout(()=>d.remove(), 4200);
}

function simulateWeek(){
  weekOffset++;
  members.forEach(m=>{
    const r = riskOf(m);
    m.attendance.shift();
    let next;
    if(m.saved) next = Math.max(2, Math.round(baseline(m.attendance)));
    else if(r.level==="High") next = Math.random()<0.45 ? 1 : 0;
    else if(r.level==="Medium") next = rand(0,2);
    else next = Math.max(0, Math.round(baseline(m.attendance))+rand(-1,1));
    m.attendance.push(next);
    m.daysSinceVisit = next>0 ? 0 : m.daysSinceVisit+7;
    if(next===0 && !m.saved) m.log.push(L.refireLog(8+weekOffset));
  });
  renderAll();
  toast(L.toastWeek(members.filter(m=>riskOf(m).level==="High").length));
}

function renderAll(){ renderKPIs(); renderList(); renderDetail(); }

// ---------------- login ----------------
function refreshAuth(){
  let user = null;
  try{ user = JSON.parse(localStorage.getItem("mp_user")||"null"); }catch(e){}
  $("loginOverlay").classList.toggle("hidden", !!user);
  $("userChip").classList.toggle("hidden", !user);
  if(user) $("userName").textContent = "👤 "+(user.name||user.email);
}

// ---------------- boot ----------------
window.addEventListener("DOMContentLoaded", ()=>{
  seedMembers();
  document.querySelectorAll(".lang-toggle button").forEach(b=>
    b.addEventListener("click", ()=>setLang(b.dataset.lang)));
  setLang(lang);
  refreshAuth();

  $("loginForm").addEventListener("submit", e=>{
    e.preventDefault();
    localStorage.setItem("mp_user", JSON.stringify({name:$("loginName").value.trim(), email:$("loginEmail").value.trim()}));
    refreshAuth();
    toast(lang==="es" ? `👋 ¡Hola, <strong>${$("loginName").value.trim()}</strong>! Demo lista.` : `👋 Welcome, <strong>${$("loginName").value.trim()}</strong>! Demo ready.`);
  });
  $("btnDemoFill").addEventListener("click", ()=>{
    $("loginName").value = "Iron Pulse Studio";
    $("loginEmail").value = "demo@memberpulse.fit";
    $("loginPass").value = "pulse123";
  });
  $("btnLogout").addEventListener("click", ()=>{
    localStorage.removeItem("mp_user"); refreshAuth();
  });

  $("search").addEventListener("input", renderList);
  $("filterStudio").addEventListener("change", renderList);
  $("filterRisk").addEventListener("change", renderList);
  $("btnSimulate").addEventListener("click", simulateWeek);
  $("btnSimulateTop").addEventListener("click", simulateWeek);
  $("btnSend").addEventListener("click", ()=>{
    const m = members.find(x=>x.id===selectedId); if(!m) return;
    m.contacted = true;
    m.log.unshift(L.msgSentLog($("msgBox").value.slice(0,70)));
    renderAll();
    toast(L.toastSend(m.name.split(" ")[0]));
  });
  $("btnCheckin").addEventListener("click", ()=>{
    const m = members.find(x=>x.id===selectedId); if(!m) return;
    m.attendance[7]++; m.daysSinceVisit = 0;
    m.log.unshift(L.checkinLog(m.attendance[7]));
    renderAll();
    toast(L.toastCheck(m.name.split(" ")[0]));
  });
  $("btnSaved").addEventListener("click", ()=>{
    const m = members.find(x=>x.id===selectedId); if(!m) return;
    m.saved = true; m.contacted = true;
    m.log.unshift(L.savedLog());
    renderAll();
    toast(L.toastSaved(m.name.split(" ")[0]));
  });
});
