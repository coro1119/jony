// Lucky Hub Main Script - Web Components, i18n & Professional Fortune Logic

const translations = {
  en: {
    nav_home: "Home", nav_lotto: "Lotto", nav_fortune: "Daily Saju", nav_cookie: "Fortune Cookie", nav_tarot: "Tarot",
    nav_newyear: "New Year", nav_zodiac: "Zodiac", nav_horoscope: "Horoscope",
    hero_title: "Lucky Hub", hero_desc: "Professional spiritual guidance through traditional Saju and modern Tarot.",
    card_lotto_title: "Lucky Numbers", card_lotto_desc: "Generate your winning combination with our advanced lotto engine.",
    card_fortune_title: "Four Pillars (Saju)", card_fortune_desc: "Deep analysis of your destiny using traditional Manse-ryeok principles.",
    card_cookie_title: "Fortune Cookie", card_cookie_desc: "Crack open a piece of wisdom and see what the day holds for you.",
    card_tarot_title: "Tarot Reading", card_tarot_desc: "Deep insight into your past, present, and future with a 3-card spread.",
    footer_text: "© 2026 Lucky Hub. All paths lead to wisdom.",
    lotto_btn: "Reveal My Luck",
    lotto_type_645: "Lotto 6/45", lotto_type_pension: "Pension 720+", lotto_group: "Grp",
    fortune_birthdate: "Birth Date", fortune_birthtime: "Birth Time", fortune_gender: "Gender",
    fortune_male: "Male", fortune_female: "Female", fortune_btn: "Analyze My Destiny",
    fortune_unknown_time: "Unknown", fortune_calculating: "Calculating Four Pillars...",
    fortune_general: "General", fortune_wealth: "Wealth", fortune_love: "Love", fortune_success: "Success",
    pillar_year: "Year", pillar_month: "Month", pillar_day: "Day", pillar_hour: "Hour",
    tarot_title: "Tarot Reading", tarot_focus: "Focus on:", tarot_gen: "General", tarot_love: "Love", tarot_career: "Career",
    tarot_past: "Past", tarot_present: "Present", tarot_future: "Future", tarot_reset: "New Reading",
    tarot_summary: "Comprehensive Interpretation", tarot_waiting: "Flip all cards for summary...",
    cookie_title: "Fortune Cookie", cookie_click: "Click to crack",
    contact_title: "Connect", contact_email: "Email", contact_msg: "Message", contact_send: "Send",
    zodiac_rat: "Rat", zodiac_ox: "Ox", zodiac_tiger: "Tiger", zodiac_rabbit: "Rabbit", zodiac_dragon: "Dragon", zodiac_snake: "Snake",
    zodiac_horse: "Horse", zodiac_goat: "Goat", zodiac_monkey: "Monkey", zodiac_rooster: "Rooster", zodiac_dog: "Dog", zodiac_pig: "Pig",
    horo_aries: "Aries", horo_taurus: "Taurus", horo_gemini: "Gemini", horo_cancer: "Cancer", horo_leo: "Leo", horo_virgo: "Virgo",
    horo_libra: "Libra", horo_scorpio: "Scorpio", horo_sagittarius: "Sagittarius", horo_capricorn: "Capricorn", horo_aquarius: "Aquarius", horo_pisces: "Pisces"
  },
  ko: {
    nav_home: "홈", nav_lotto: "로또", nav_fortune: "오늘의 운세", nav_cookie: "포춘쿠키", nav_tarot: "타로",
    nav_newyear: "신년운세", nav_zodiac: "띠별운세", nav_horoscope: "별자리운세",
    hero_title: "럭키 허브", hero_desc: "정통 사주 명리학과 타로를 통한 전문적인 운세 솔루션입니다.",
    card_lotto_title: "행운의 번호", card_lotto_desc: "정교한 로또 엔진을 통해 당신만의 당첨 조합을 만들어보세요.",
    card_fortune_title: "정통 사주 명리", card_fortune_desc: "만세력 원리를 적용하여 당신의 사주팔자와 일일 흐름을 분석합니다.",
    card_cookie_title: "포춘쿠키", card_cookie_desc: "쿠키를 열어 오늘 하루 당신을 기다리는 지혜의 한 마디를 확인하세요.",
    card_tarot_title: "타로 상담", card_tarot_desc: "3카드 스프레드를 통해 과거, 현재, 미래를 깊이 있게 들여다보세요.",
    footer_text: "© 2026 럭키 허브. 모든 길은 지혜로 통합니다.",
    lotto_btn: "번호 추첨하기",
    lotto_type_645: "로또 6/45", lotto_type_pension: "연금복권 720+", lotto_group: "조",
    fortune_birthdate: "생년월일", fortune_birthtime: "태어난 시간", fortune_gender: "성별",
    fortune_male: "남성", fortune_female: "여성", fortune_btn: "사주 분석하기",
    fortune_unknown_time: "모름/기타", fortune_calculating: "만세력을 계산 중입니다...",
    fortune_general: "종합운", fortune_wealth: "재물운", fortune_love: "애정운", fortune_success: "성공운",
    pillar_year: "년(年)", pillar_month: "월(月)", pillar_day: "일(日)", pillar_hour: "시(時)",
    tarot_title: "타로 리딩", tarot_focus: "고민 분야:", tarot_gen: "종합 가이드", tarot_love: "연애운", tarot_career: "직업운",
    tarot_past: "과거", tarot_present: "현재", tarot_future: "미래", tarot_reset: "다시 뽑기",
    tarot_summary: "종합 해설", tarot_waiting: "모든 카드를 뒤집으면 종합 해설이 나타납니다...",
    cookie_title: "행운의 과자", cookie_click: "클릭하여 열기",
    contact_title: "문의하기", contact_email: "이메일", contact_msg: "내용", contact_send: "보내기",
    zodiac_rat: "쥐띠", zodiac_ox: "소띠", zodiac_tiger: "호랑이띠", zodiac_rabbit: "토끼띠", zodiac_dragon: "용띠", zodiac_snake: "뱀띠",
    zodiac_horse: "말띠", zodiac_goat: "양띠", zodiac_monkey: "원숭이띠", zodiac_rooster: "닭띠", zodiac_dog: "개띠", zodiac_pig: "돼지띠",
    horo_aries: "양자리", horo_taurus: "황소자리", horo_gemini: "쌍둥이자리", horo_cancer: "게자리", horo_leo: "사자자리", horo_virgo: "처녀자리",
    horo_libra: "천칭자리", horo_scorpio: "전갈자리", horo_sagittarius: "사수자리", horo_capricorn: "염소자리", horo_aquarius: "물병자리", horo_pisces: "물고기자리"
  }
};

const userLang = (navigator.language || navigator.userLanguage).startsWith('ko') ? 'ko' : 'en';
const t = (key) => translations[userLang][key] || key;
document.documentElement.lang = userLang;

// --- SHARED LOGIC ---
const cheonGan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const jiJi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const ganjiNames = { "甲": "갑", "乙": "을", "丙": "병", "丁": "정", "戊": "무", "己": "기", "庚": "경", "辛": "신", "壬": "임", "癸": "계", "子": "자", "丑": "축", "寅": "인", "卯": "묘", "辰": "진", "巳": "사", "午": "오", "未": "미", "申": "신", "酉": "유", "戌": "술", "亥": "해" };

function getGanji(idx) {
  const c = cheonGan[idx % 10]; const j = jiJi[idx % 12];
  return userLang === 'ko' ? `${c}(${ganjiNames[c]})${j}(${ganjiNames[j]})` : `${c}${j}`;
}

const getHash = (seed) => {
  let hash = 0; for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i);
  return Math.abs(hash);
};

// --- COMPONENTS ---

class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.type = '645';
  }
  connectedCallback() { this.render(); }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; padding: 3rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); text-align: center; color: var(--text-color); }
        h1 { font-size: 3rem; font-weight: 900; margin-bottom: 2rem; letter-spacing: -0.06em; }
        .tabs { display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; }
        .tab { padding: 0.8em 1.5em; border-radius: 1rem; cursor: pointer; transition: 0.3s; background: rgba(255,255,255,0.05); border: 1px solid var(--surface-border); font-weight: 600; color: var(--text-muted); }
        .tab.active { background: var(--primary-color); color: #12121a; border-color: transparent; }
        .numbers { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 3rem; flex-wrap: wrap; }
        .number { display: grid; place-content: center; width: 3.5rem; height: 3.5rem; font-size: 1.5rem; font-weight: 800; border-radius: 1.25rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); transition: 0.6s; transform: translateY(20px) scale(0.5); opacity: 0; position: relative; }
        .number.visible { transform: translateY(0) scale(1); opacity: 1; }
        .number.p-group { border-color: var(--primary-color); color: var(--primary-color); width: 4.5rem; }
        .number.p-group::after { content: '${t('lotto_group')}'; font-size: 0.6rem; position: absolute; bottom: 4px; }
        button#genBtn { font-size: 1.25rem; font-weight: 700; padding: 1.25em 2.5em; border: none; border-radius: 1.25rem; background: var(--primary-color); color: #12121a; cursor: pointer; transition: 0.3s; }
      </style>
      <h1>${t('card_lotto_title')}</h1>
      <div class="tabs">
        <div class="tab ${this.type === '645' ? 'active' : ''}" data-type="645">${t('lotto_type_645')}</div>
        <div class="tab ${this.type === 'pension' ? 'active' : ''}" data-type="pension">${t('lotto_type_pension')}</div>
      </div>
      <div class="numbers" id="numContainer">
        ${this.type === '645' ? Array(6).fill('<div class="number">?</div>').join('') : '<div class="number p-group">?</div>' + Array(6).fill('<div class="number">?</div>').join('')}
      </div>
      <button id="genBtn">${t('lotto_btn')}</button>
    `;
    this.shadowRoot.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => { this.type = tab.dataset.type; this.render(); });
    });
    this.shadowRoot.querySelector('#genBtn').addEventListener('click', () => this.generate());
  }
  generate() {
    const slots = this.shadowRoot.querySelectorAll('.number');
    let res = [];
    if (this.type === '645') {
      const n = new Set(); while(n.size < 6) n.add(Math.floor(Math.random() * 45) + 1);
      res = [...n].sort((a, b) => a - b);
    } else {
      res = [Math.floor(Math.random() * 5) + 1, ...Array.from({length: 6}, () => Math.floor(Math.random() * 10))];
    }
    slots.forEach((el, i) => {
      el.classList.remove('visible');
      setTimeout(() => {
        el.textContent = res[i];
        const hue = (res[i] * (this.type==='645'?10:40) + i*20) % 360;
        el.style.background = `oklch(75% 0.15 ${hue} / 20%)`;
        el.classList.add('visible');
      }, i * 150);
    });
  }
}
customElements.define('lotto-generator', LottoGenerator);

class DailyFortune extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.renderInput(); }
  renderInput() {
    this.shadowRoot.innerHTML = `
      <style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:3rem;backdrop-filter:blur(40px);border:1px solid var(--surface-border);text-align:center;}h2{font-size:2.5rem;margin:0 0 2rem;color:var(--text-color);}.form{display:grid;gap:1.5rem;text-align:left;max-width:400px;margin:0 auto;}.field{display:flex;flex-direction:column;gap:0.5rem;}label{font-size:0.9rem;font-weight:600;color:var(--text-muted);}input,select{padding:1rem;border-radius:1rem;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.03);color:var(--text-color);font-family:inherit;}select option{background-color:#1a1a2e;color:#fff;}button{margin-top:1rem;padding:1.25rem;border-radius:1rem;border:none;background:var(--primary-color);color:#12121a;font-weight:700;cursor:pointer;transition:0.3s;}</style>
      <h2>${t('card_fortune_title')}</h2><div class="form"><div class="field"><label>${t('fortune_birthdate')}</label><input type="date" id="dob" required></div><div class="field"><label>${t('fortune_birthtime')}</label><select id="tob"><option value="unknown">${t('fortune_unknown_time')}</option>${Array.from({length:12},(_,i)=>`<option value="${i}">${jiJi[i]} (${['23:30-01:29','01:30-03:29','03:30-05:29','05:30-07:29','07:30-09:29','09:30-11:29','11:30-13:29','13:30-15:29','15:30-17:29','17:30-19:29','19:30-21:29','21:30-23:29'][i]})</option>`).join('')}</select></div><button id="sub">${t('fortune_btn')}</button></div>
    `;
    this.shadowRoot.querySelector('#sub').addEventListener('click', () => this.calculate());
  }
  calculate() {
    const dob = this.shadowRoot.querySelector('#dob').value; if(!dob) return;
    this.shadowRoot.innerHTML = `<style>:host{display:block;padding:4rem;background:var(--surface-color);border-radius:3rem;text-align:center;}.l{color:var(--primary-color);font-weight:700;animation:p 1.5s infinite;}@keyframes p{0%,100%{opacity:1;}50%{opacity:0.5;}}</style><div class="l">${t('fortune_calculating')}</div>`;
    setTimeout(() => this.renderResult(dob), 1500);
  }
  renderResult(dob) {
    const date = new Date(dob); const y = date.getFullYear(); const m = date.getMonth()+1; const tob = this.shadowRoot.querySelector('#tob')?.value || "unknown";
    const hash = getHash(dob);
    const pillars = { year: getGanji((y-4)%60), month: getGanji((y*12+m+2)%60), day: getGanji(hash%60), hour: tob==="unknown"?"??":getGanji((hash+parseInt(tob))%60) };
    const dSeed = dob + new Date().toISOString().split('T')[0]; const dHash = getHash(dSeed);
    const scores = { gen: 60+(dHash%41), wealth: 50+(dHash%51) };
    const txt = userLang==='ko'?["막혔던 운이 풀리고 귀인의 도움을 받습니다.","재물이 서쪽에서 오니 금전 거래에 길합니다.","내실을 다지면 복이 절로 들어옵니다."]:["Luck is opening up with help from a mentor.","Wealth comes from the west today.","Focus on inner strength for lasting luck."];
    this.shadowRoot.innerHTML = `
      <style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:3rem;text-align:center;color:var(--text-color);}.ps{display:flex;justify-content:center;gap:1rem;margin-bottom:2rem;}.p{background:rgba(255,255,255,0.05);padding:1rem;border-radius:1rem;width:80px;}.pv{font-size:1.1rem;font-weight:900;color:var(--primary-color);}.pl{font-size:0.7rem;color:var(--text-muted);margin-top:0.5rem;}.ss{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:2rem 0;}.s{background:rgba(255,255,255,0.03);padding:1rem;border-radius:1rem;}.sv{font-size:1.5rem;font-weight:800;color:var(--primary-color);}.text{font-size:1.25rem;line-height:1.6;margin:2rem 0;}button{padding:1rem 2rem;border-radius:1rem;border:1px solid var(--surface-border);background:transparent;color:var(--text-muted);cursor:pointer;}</style>
      <h2>${t('card_fortune_title')}</h2><div class="ps"><div class="p"><div class="pv">${pillars.hour}</div><div class="pl">${t('pillar_hour')}</div></div><div class="p"><div class="pv">${pillars.day}</div><div class="pl">${t('pillar_day')}</div></div><div class="p"><div class="pv">${pillars.month}</div><div class="pl">${t('pillar_month')}</div></div><div class="p"><div class="pv">${pillars.year}</div><div class="pl">${t('pillar_year')}</div></div></div>
      <div class="ss"><div class="s"><div class="sv">${scores.gen}%</div><div>${t('fortune_general')}</div></div><div class="s"><div class="sv">${scores.wealth}%</div><div>${t('fortune_wealth')}</div></div></div>
      <div class="text">${txt[dHash%txt.length]}</div><button id="back">← Back</button>
    `;
    this.shadowRoot.querySelector('#back').addEventListener('click', () => this.renderInput());
  }
}
customElements.define('daily-fortune', DailyFortune);

class NewYearFortune extends DailyFortune {
  renderResult(dob) {
    const seed = dob + "2026"; const hash = getHash(seed);
    const txt = userLang==='ko'?["명예와 재물이 동시에 따르는 해입니다.","노력이 결실을 맺는 수확의 해입니다."]:["Honor and wealth will follow you this year.","A year of harvest for your hard work."];
    this.shadowRoot.innerHTML = `<style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:3rem;text-align:center;color:var(--text-color);}.text{font-size:1.5rem;line-height:1.8;margin:3rem 0;font-weight:700;color:var(--primary-color);}</style><h2>2026 ${t('nav_newyear')}</h2><div class="text">${txt[hash%txt.length]}</div><p style="color:var(--text-muted)">丙午年 (병오년) 사주 조화 해설</p><button onclick="location.reload()">← Back</button>`;
  }
}
customElements.define('new-year-fortune', NewYearFortune);

class ZodiacFortune extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const zn = ["rat","ox","tiger","rabbit","dragon","snake","horse","goat","monkey","rooster","dog","pig"];
    this.shadowRoot.innerHTML = `<style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:3rem;text-align:center;}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:1rem;}.sign{padding:1.5rem;background:rgba(255,255,255,0.05);border-radius:1.5rem;cursor:pointer;transition:0.3s;}.sign:hover{background:rgba(255,255,255,0.1);transform:translateY(-5px);}</style><h2>${t('nav_zodiac')}</h2><div class="grid">${zn.map((s,i)=>`<div class="sign" data-idx="${i}"><div>${['🐭','🐮','🐯','🐰','🐲','🐍','🐴','🐏','🐵','🐔','🐶','🐷'][i]}</div><div>${t('zodiac_'+s)}</div></div>`).join('')}</div>`;
    this.shadowRoot.querySelectorAll('.sign').forEach(el=>el.addEventListener('click',()=>{
      const h = getHash(zn[el.dataset.idx]+new Date().toISOString().split('T')[0]);
      const txt = userLang==='ko'?["길운이 가득하니 뜻을 펼치세요.","주변의 도움으로 어려운 일을 해결합니다."]:["Luck is on your side today.","Solve problems with help from others."];
      this.shadowRoot.innerHTML = `<style>:host{display:block;padding:3rem;text-align:center;}.text{font-size:1.25rem;margin:2rem 0;}</style><h2>${t('zodiac_'+zn[el.dataset.idx])} ${t('nav_zodiac')}</h2><div class="text">${txt[h%txt.length]}</div><button onclick="location.reload()">← Back</button>`;
    }));
  }
}
customElements.define('zodiac-fortune', ZodiacFortune);

class HoroscopeFortune extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const sn = ["aries","taurus","gemini","cancer","leo","virgo","libra","scorpio","sagittarius","capricorn","aquarius","pisces"];
    this.shadowRoot.innerHTML = `<style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:3rem;text-align:center;}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:1rem;}.sign{padding:1.5rem;background:rgba(255,255,255,0.05);border-radius:1.5rem;cursor:pointer;transition:0.3s;}.sign:hover{background:rgba(255,255,255,0.1);transform:translateY(-5px);}</style><h2>${t('nav_horoscope')}</h2><div class="grid">${sn.map((s,i)=>`<div class="sign" data-idx="${i}"><div>${['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'][i]}</div><div>${t('horo_'+s)}</div></div>`).join('')}</div>`;
    this.shadowRoot.querySelectorAll('.sign').forEach(el=>el.addEventListener('click',()=>{
      const h = getHash(sn[el.dataset.idx]+new Date().toISOString().split('T')[0]);
      const txt = userLang==='ko'?["창의적인 영감이 떠오르는 하루입니다.","새로운 인연이 운명처럼 다가옵니다."]:["Creative inspiration flows today.","A new connection approaches like destiny."];
      this.shadowRoot.innerHTML = `<style>:host{display:block;padding:3rem;text-align:center;}.text{font-size:1.25rem;margin:2rem 0;}</style><h2>${t('horo_'+sn[el.dataset.idx])} ${t('nav_horoscope')}</h2><div class="text">${txt[h%txt.length]}</div><button onclick="location.reload()">← Back</button>`;
    }));
  }
}
customElements.define('horoscope-fortune', HoroscopeFortune);

class TarotReader extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); this.results = []; 
    this.deck = [{n:"Fool",i:"9/90/RWS_Tarot_00_Fool.jpg",m:"New starts"},{n:"Magician",i:"d/de/RWS_Tarot_01_Magician.jpg",m:"Power"},{n:"Priestess",i:"8/88/RWS_Tarot_02_High_Priestess.jpg",m:"Intuition"},{n:"Empress",i:"d/d2/RWS_Tarot_03_Empress.jpg",m:"Abundance"},{n:"Emperor",i:"c/c3/RWS_Tarot_04_Emperor.jpg",m:"Authority"},{n:"Lovers",i:"3/3a/RWS_Tarot_06_Lovers.jpg",m:"Choice"},{n:"Chariot",i:"9/9b/RWS_Tarot_07_Chariot.jpg",m:"Victory"},{n:"Strength",i:"f/f5/RWS_Tarot_08_Strength.jpg",m:"Courage"},{n:"Death",i:"d/d7/RWS_Tarot_13_Death.jpg",m:"Transition"},{n:"Sun",i:"1/17/RWS_Tarot_19_Sun.jpg",m:"Success"},{n:"World",i:"f/ff/RWS_Tarot_21_World.jpg",m:"Completion"}];
  }
  connectedCallback() { this.render(); }
  render() {
    this.shadowRoot.innerHTML = `
      <style>:host{display:block;padding:4rem 2rem;background:var(--surface-color);border-radius:3rem;text-align:center;color:var(--text-color);}.spread{display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;perspective:1000px;}.slot{width:180px;height:300px;position:relative;transform-style:preserve-3d;transition:transform 0.8s ease;cursor:pointer;}.slot.flipped{transform:rotateY(180deg);}.face{position:absolute;inset:0;backface-visibility:hidden;border-radius:1rem;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(0,0,0,0.5);}.back{background:linear-gradient(135deg,#2a2a3e,#1a1a2e);border:2px solid rgba(255,255,255,0.1);}.back::after{content:'🔮';font-size:3rem;}.front{transform:rotateY(180deg);overflow:hidden;background:#000;}.front img{width:100%;height:100%;object-fit:cover;}.summary{margin-top:4rem;padding:2rem;background:rgba(255,255,255,0.05);border-radius:2rem;display:none;opacity:0;transition:1s;border:1px solid var(--surface-border);}</style>
      <h2>${t('tarot_title')}</h2><div class="spread">${[t('tarot_past'),t('tarot_present'),t('tarot_future')].map((l,i)=>`<div class="card-container"><div class="label">${l}</div><div class="slot" id="slot${i}"><div class="face back"></div><div class="face front"><img src=""></div></div><div id="n${i}" style="margin-top:1rem;font-weight:800;opacity:0;"></div></div>`).join('')}</div>
      <div class="summary" id="sum"><h3>✨ ${t('tarot_summary')}</h3><p id="stxt"></p><button onclick="location.reload()" style="background:var(--primary-color);border:none;padding:1rem 2rem;border-radius:1rem;font-weight:700;cursor:pointer;margin-top:1rem;">${t('tarot_reset')}</button></div><p id="wait" style="margin-top:2rem;color:var(--text-muted);">${t('tarot_waiting')}</p>
    `;
    [0,1,2].forEach(i=>this.shadowRoot.querySelector(`#slot${i}`).addEventListener('click',()=>this.flip(i)));
  }
  flip(i) {
    const s=this.shadowRoot.querySelector(`#slot${i}`); if(s.classList.contains('flipped')) return;
    const c=this.deck[Math.floor(Math.random()*this.deck.length)]; this.results[i]=c;
    s.querySelector('img').src=`https://upload.wikimedia.org/wikipedia/commons/${c.i}`; s.classList.add('flipped');
    const n=this.shadowRoot.querySelector(`#n${i}`); n.textContent=c.n; n.style.opacity=1;
    if(this.results.filter(x=>x).length===3) {
      const txt = userLang==='ko'?`과거의 ${this.results[0].n} 기운이 현재의 ${this.results[1].n} 상황을 만들었습니다. 미래는 ${this.results[2].n}의 흐름인 ${this.results[2].m}에 집중하세요.`:`Past ${this.results[0].n} energy led to current ${this.results[1].n}. Focus on ${this.results[2].m} for your future.`;
      this.shadowRoot.querySelector('#sum').style.display='block'; setTimeout(()=>this.shadowRoot.querySelector('#sum').style.opacity=1,10);
      this.shadowRoot.querySelector('#stxt').textContent=txt; this.shadowRoot.querySelector('#wait').style.display='none';
    }
  }
}
customElements.define('tarot-reader', TarotReader);

class FortuneCookie extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const fs = userLang==='ko'?["성취가 다가옵니다.","여행의 기운이 있습니다.","인내심이 필요합니다."]:["Success is near.","Travel is coming.","Patience is key."];
    this.shadowRoot.innerHTML = `<style>:host{display:block;padding:4rem;background:var(--surface-color);border-radius:3rem;text-align:center;}.cookie{font-size:100px;cursor:pointer;transition:0.6s;}.cookie.cracked{opacity:0;pointer-events:none;transform:scale(1.5);}#f{font-size:1.5rem;font-weight:700;color:var(--primary-color);opacity:0;transition:0.8s;}</style><h2>${t('cookie_title')}</h2><div class="cookie">🥠</div><div id="f"></div>`;
    const c=this.shadowRoot.querySelector('.cookie'); const f=this.shadowRoot.querySelector('#f');
    c.addEventListener('click',()=>{ c.classList.add('cracked'); f.textContent=fs[Math.floor(Math.random()*fs.length)]; setTimeout(()=>f.style.opacity=1,300); });
  }
}
customElements.define('fortune-cookie', FortuneCookie);

class ContactForm extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.shadowRoot.innerHTML=`<style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:2rem;}h2{font-size:2rem;color:var(--text-color);}form{display:flex;flex-direction:column;gap:1.5rem;text-align:left;}input,textarea{padding:1rem;border-radius:1rem;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.03);color:var(--text-color);font-family:inherit;}button{padding:1.25rem;border-radius:1rem;border:none;background:var(--primary-color);color:#12121a;font-weight:700;cursor:pointer;}</style><h2>${t('contact_title')}</h2><form action="https://formspree.io/f/mpqjlvro" method="POST"><input type="email" name="email" required placeholder="Email"><textarea name="message" rows="4" required placeholder="Message"></textarea><button type="submit">${t('contact_send')}</button></form>`; }
}
customElements.define('contact-form', ContactForm);

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n'); if (translations[userLang][k]) el.textContent = translations[userLang][k];
  });
}
document.addEventListener('DOMContentLoaded', translatePage);
