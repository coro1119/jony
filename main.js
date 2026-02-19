// Lucky Hub Main Script - Web Components, i18n & Advanced Fortune Logic

const translations = {
  en: {
    nav_home: "Home", nav_lotto: "Lotto", nav_fortune: "Daily Saju", nav_cookie: "Fortune Cookie", nav_tarot: "Tarot",
    nav_newyear: "New Year", nav_zodiac: "Chinese Zodiac", nav_horoscope: "Horoscope",
    hero_title: "Lucky Hub", hero_desc: "Your spiritual sanctuary for exploring destiny and luck through traditional and modern wisdom.",
    card_lotto_title: "Lucky Numbers", card_lotto_desc: "Generate your winning combination with our advanced lotto engine.",
    card_fortune_title: "Daily Saju", card_fortune_desc: "Traditional personalized daily fortune based on your specific birth details.",
    card_cookie_title: "Fortune Cookie", card_cookie_desc: "Crack open a piece of wisdom and see what the day holds for you.",
    card_tarot_title: "Tarot Reading", card_tarot_desc: "Deep insight into your past, present, and future with a 3-card spread.",
    card_newyear_title: "New Year 2026", card_newyear_desc: "Detailed yearly outlook covering wealth, health, and career paths.",
    card_zodiac_title: "Animal Zodiac", card_zodiac_desc: "Today's guidance based on your birth year animal sign.",
    card_horoscope_title: "Horoscope", card_horoscope_desc: "Daily cosmic energy reading based on your astrological star sign.",
    footer_text: "© 2026 Lucky Hub. All paths lead to wisdom.",
    lotto_btn: "Reveal My Luck",
    fortune_birthdate: "Birth Date", fortune_birthtime: "Birth Time", fortune_gender: "Gender",
    fortune_male: "Male", fortune_female: "Female", fortune_btn: "Read My Destiny",
    fortune_unknown_time: "Unknown", fortune_calculating: "Analyzing your destiny...",
    fortune_general: "General", fortune_wealth: "Wealth", fortune_love: "Love", fortune_success: "Success",
    cookie_title: "Cracking Fortune", cookie_click: "Click to crack",
    tarot_title: "Tarot Reading", tarot_focus: "Focus on:", tarot_gen: "General Guidance", tarot_love: "Love & Relationships", tarot_career: "Career & Work",
    tarot_past: "Past", tarot_present: "Present", tarot_future: "Future", tarot_reset: "New Reading",
    contact_title: "Connect", contact_email: "Email", contact_msg: "Message", contact_send: "Send",
    zodiac_rat: "Rat", zodiac_ox: "Ox", zodiac_tiger: "Tiger", zodiac_rabbit: "Rabbit", zodiac_dragon: "Dragon", zodiac_snake: "Snake",
    zodiac_horse: "Horse", zodiac_goat: "Goat", zodiac_monkey: "Monkey", zodiac_rooster: "Rooster", zodiac_dog: "Dog", zodiac_pig: "Pig",
    horo_aries: "Aries", horo_taurus: "Taurus", horo_gemini: "Gemini", horo_cancer: "Cancer", horo_leo: "Leo", horo_virgo: "Virgo",
    horo_libra: "Libra", horo_scorpio: "Scorpio", horo_sagittarius: "Sagittarius", horo_capricorn: "Capricorn", horo_aquarius: "Aquarius", horo_pisces: "Pisces"
  },
  ko: {
    nav_home: "홈", nav_lotto: "로또", nav_fortune: "오늘의 운세", nav_cookie: "포춘쿠키", nav_tarot: "타로",
    nav_newyear: "신년운세", nav_zodiac: "띠별운세", nav_horoscope: "별자리운세",
    hero_title: "럭키 허브", hero_desc: "전통과 현대의 지혜를 통해 당신의 운명과 행운을 탐험하는 영혼의 안식처입니다.",
    card_lotto_title: "행운의 번호", card_lotto_desc: "정교한 로또 엔진을 통해 당신만의 당첨 조합을 만들어보세요.",
    card_fortune_title: "오늘의 운세", card_fortune_desc: "상세 사주 정보를 바탕으로 한 전통 방식의 맞춤형 일일 운세입니다.",
    card_cookie_title: "포춘쿠키", card_cookie_desc: "쿠키를 열어 오늘 하루 당신을 기다리는 지혜의 한 마디를 확인하세요.",
    card_tarot_title: "타로 상담", card_tarot_desc: "3카드 스프레드를 통해 과거, 현재, 미래를 깊이 있게 들여다보세요.",
    card_newyear_title: "2026 신년운세", card_newyear_desc: "재물, 건강, 직업 등 한 해의 흐름을 상세히 분석해 드립니다.",
    card_zodiac_title: "띠별 운세", card_zodiac_desc: "당신이 태어난 해의 동물을 통해 오늘의 지침을 확인하세요.",
    card_horoscope_title: "별자리 운세", card_horoscope_desc: "우주의 에너지가 당신의 별자리에 전하는 오늘의 메시지입니다.",
    footer_text: "© 2026 럭키 허브. 모든 길은 지혜로 통합니다.",
    lotto_btn: "번호 추첨하기",
    fortune_birthdate: "생년월일", fortune_birthtime: "태어난 시간", fortune_gender: "성별",
    fortune_male: "남성", fortune_female: "여성", fortune_btn: "운세 확인하기",
    fortune_unknown_time: "모름/기타", fortune_calculating: "운명을 분석 중입니다...",
    fortune_general: "종합운", fortune_wealth: "재물운", fortune_love: "애정운", fortune_success: "성공운",
    cookie_title: "행운의 과자", cookie_click: "클릭하여 열기",
    tarot_title: "타로 리딩", tarot_focus: "고민 분야:", tarot_gen: "종합 가이드", tarot_love: "연애운", tarot_career: "직업운",
    tarot_past: "과거", tarot_present: "현재", tarot_future: "미래", tarot_reset: "다시 뽑기",
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

// Correct Saju Time Blocks
const sajuTimeOptions = [
  { val: "unknown", label: { en: "Unknown", ko: "모름/기타" } },
  { val: "0", label: { en: "Jasi (23:30 - 01:29)", ko: "자시 (23:30 - 01:29)" } },
  { val: "1", label: { en: "Chuksi (01:30 - 03:29)", ko: "축시 (01:30 - 03:29)" } },
  { val: "2", label: { en: "Insi (03:30 - 05:29)", ko: "인시 (03:30 - 05:29)" } },
  { val: "3", label: { en: "Myosi (05:30 - 07:29)", ko: "묘시 (05:30 - 07:29)" } },
  { val: "4", label: { en: "Jinsi (07:30 - 09:29)", ko: "진시 (07:30 - 09:29)" } },
  { val: "5", label: { en: "Sasi (09:30 - 11:29)", ko: "사시 (09:30 - 11:29)" } },
  { val: "6", label: { en: "Osi (11:30 - 13:29)", ko: "오시 (11:30 - 13:29)" } },
  { val: "7", label: { en: "Misi (13:30 - 15:29)", ko: "미시 (13:30 - 15:29)" } },
  { val: "8", label: { en: "Sinsi (15:30 - 17:29)", ko: "신시 (15:30 - 17:29)" } },
  { val: "9", label: { en: "Yusi (17:30 - 19:29)", ko: "유시 (17:30 - 19:29)" } },
  { val: "10", label: { en: "Sulsi (19:30 - 21:29)", ko: "술시 (19:30 - 21:29)" } },
  { val: "11", label: { en: "Haesi (21:30 - 23:29)", ko: "해시 (21:30 - 23:29)" } }
];

// Helper: Deterministic Hash
const getHash = (seed) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i);
  return Math.abs(hash);
};

// Fortune Data Sets
const yearlySajuData = {
  ko: [
    "용이 여의주를 물고 하늘로 오르는 격이니 큰 뜻을 펼치게 됩니다.",
    "뿌리 깊은 나무는 바람에 흔들리지 않으니 내실을 다지면 큰 성취가 따릅니다.",
    "묵은 것을 버리고 새것을 취하니 변화의 기운이 매우 길합니다.",
    "만물이 소생하는 봄과 같으니 그동안 지지부진했던 일들이 풀리기 시작합니다."
  ],
  en: [
    "Like a dragon rising to the sky with a pearl, you will realize great ambitions.",
    "A deep-rooted tree does not shake; focusing on your inner strength will bring great success.",
    "Discard the old and embrace the new; the energy of change is very auspicious.",
    "Like spring where everything comes to life, stalled projects will finally start moving."
  ]
};

const dailySajuData = {
  ko: [
    "나무가 물을 만나 잎이 푸르러지니 새로운 시작에 아주 좋은 날입니다.",
    "귀인이 동쪽에서 나타나 당신의 고민을 해결해줄 것입니다.",
    "재물이 강물처럼 흘러들어오니 투자나 계약에 좋은 시기입니다.",
    "작은 것을 탐하다 큰 것을 잃을 수 있으니 오늘은 자중하세요.",
    "구름 사이로 햇살이 비치니 노력이 결실을 맺는 하루입니다.",
    "가까운 사람과의 말다툼을 주의하고 인내심을 발휘하세요."
  ],
  en: [
    "Wood meeting water makes leaves green; it's a perfect day for new beginnings.",
    "A benefactor will appear from the east to help solve your problems.",
    "Wealth flows like a river; it's an excellent time for investments or contracts.",
    "Greed for small gains may lead to large losses; be cautious today.",
    "Sunlight breaks through clouds; your hard work will be rewarded today.",
    "Watch out for disputes with close ones; practice patience today."
  ]
};

const chineseZodiacNames = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
const horoscopeSigns = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

// --- COMPONENTS ---

class DailyFortune extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.renderInput(); }
  renderInput() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; padding: 3rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); text-align: center; }
        h2 { font-size: 2.5rem; margin: 0 0 2rem; color: var(--text-color); }
        .form { display: grid; gap: 1.5rem; text-align: left; max-width: 400px; margin: 0 auto; }
        .field { display: flex; flex-direction: column; gap: 0.5rem; }
        label { font-size: 0.9rem; font-weight: 600; color: var(--text-muted); }
        input, select { padding: 1rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--text-color); font-family: inherit; }
        select option { background-color: #1a1a2e; color: #ffffff; }
        button { margin-top: 1rem; padding: 1.25rem; border-radius: 1rem; border: none; background: var(--primary-color); color: #12121a; font-weight: 700; cursor: pointer; transition: 0.3s; }
      </style>
      <h2>${t('card_fortune_title')}</h2>
      <div class="form">
        <div class="field"><label>${t('fortune_birthdate')}</label><input type="date" id="dob" required></div>
        <div class="field"><label>${t('fortune_birthtime')}</label>
          <select id="tob">${sajuTimeOptions.map(o => `<option value="${o.val}">${o.label[userLang]}</option>`).join('')}</select>
        </div>
        <div class="field"><label>${t('fortune_gender')}</label><select id="gender"><option value="m">${t('fortune_male')}</option><option value="f">${t('fortune_female')}</option></select></div>
        <button id="submitBtn">${t('fortune_btn')}</button>
      </div>
    `;
    this.shadowRoot.querySelector('#submitBtn').addEventListener('click', () => this.calculate());
  }
  calculate() {
    const dob = this.shadowRoot.querySelector('#dob').value;
    if (!dob) return;
    this.shadowRoot.innerHTML = `<style>:host{display:block;padding:4rem;background:var(--surface-color);border-radius:3rem;text-align:center;}.l{font-size:1.25rem;color:var(--primary-color);font-weight:700;animation:p 1.5s infinite;}@keyframes p{0%,100%{opacity:1;}50%{opacity:0.5;}}</style><div class="l">${t('fortune_calculating')}</div>`;
    setTimeout(() => this.renderResult(dob), 1500);
  }
  renderResult(dob) {
    const seed = dob + new Date().toISOString().split('T')[0];
    const hash = getHash(seed);
    const scores = { gen: 60+(hash%41), wealth: 50+(hash%51), love: 40+(hash%61), success: 55+(hash%46) };
    const text = dailySajuData[userLang][hash % dailySajuData[userLang].length];
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; padding: 3rem; background: var(--surface-color); border-radius: 3rem; border: 1px solid var(--surface-border); text-align: center; color: var(--text-color); }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0; }
        .item { background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 1.5rem; }
        .val { font-size: 2rem; font-weight: 900; color: var(--primary-color); }
        .label { font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-top: 0.5rem; }
        .text { font-size: 1.25rem; line-height: 1.6; margin: 2rem 0; }
        button { padding: 1rem 2rem; border-radius: 1rem; border: 1px solid var(--surface-border); background: transparent; color: var(--text-muted); cursor: pointer; }
      </style>
      <h2>${t('card_fortune_title')}</h2>
      <div class="grid">
        <div class="item"><div class="val">${scores.gen}%</div><div class="label">${t('fortune_general')}</div></div>
        <div class="item"><div class="val">${scores.wealth}%</div><div class="label">${t('fortune_wealth')}</div></div>
        <div class="item"><div class="val">${scores.love}%</div><div class="label">${t('fortune_love')}</div></div>
        <div class="item"><div class="val">${scores.success}%</div><div class="label">${t('fortune_success')}</div></div>
      </div>
      <div class="text">${text}</div>
      <button id="backBtn">← Back</button>
    `;
    this.shadowRoot.querySelector('#backBtn').addEventListener('click', () => this.renderInput());
  }
}
customElements.define('daily-fortune', DailyFortune);

class NewYearFortune extends DailyFortune {
  renderResult(dob) {
    const seed = dob + "2026";
    const hash = getHash(seed);
    const text = yearlySajuData[userLang][hash % yearlySajuData[userLang].length];
    this.shadowRoot.innerHTML = `
      <style>:host { display: block; padding: 3rem; background: var(--surface-color); border-radius: 3rem; border: 1px solid var(--surface-border); text-align: center; color: var(--text-color); }.text { font-size: 1.5rem; line-height: 1.8; margin: 3rem 0; font-weight: 700; color: var(--primary-color); }button { padding: 1rem 2rem; border-radius: 1rem; border: 1px solid var(--surface-border); background: transparent; color: var(--text-muted); cursor: pointer; }</style>
      <h2>${t('card_newyear_title')}</h2>
      <div class="text">${text}</div>
      <p style="color:var(--text-muted); margin-bottom: 2rem;">2026년은 병오년(丙午年), 붉은 말의 해입니다. 당신의 사주와 말의 기운이 만나 새로운 에너지를 만들어냅니다.</p>
      <button id="backBtn">← Back</button>
    `;
    this.shadowRoot.querySelector('#backBtn').addEventListener('click', () => this.renderInput());
  }
}
customElements.define('new-year-fortune', NewYearFortune);

class ZodiacFortune extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:3rem;text-align:center;}h2{font-size:2rem;margin-bottom:2rem;} .grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:1rem;} .sign{padding:1.5rem;background:rgba(255,255,255,0.05);border-radius:1.5rem;cursor:pointer;transition:0.3s;border:1px solid transparent;} .sign:hover{border-color:var(--primary-color);background:rgba(255,255,255,0.1);transform:translateY(-5px);} .icon{font-size:2rem;margin-bottom:0.5rem;}</style>
      <h2>${t('nav_zodiac')}</h2>
      <div class="grid">${chineseZodiacNames.map((s, i) => `<div class="sign" data-idx="${i}"><div class="icon">${['🐭','🐮','🐯','🐰','🐲','🐍','🐴','🐏','🐵','🐔','🐶','🐷'][i]}</div><div>${t('zodiac_'+s)}</div></div>`).join('')}</div>
    `;
    this.shadowRoot.querySelectorAll('.sign').forEach(el => el.addEventListener('click', () => this.showResult(el.dataset.idx)));
  }
  showResult(idx) {
    const hash = getHash(chineseZodiacNames[idx] + new Date().toISOString().split('T')[0]);
    const text = dailySajuData[userLang][hash % dailySajuData[userLang].length];
    this.shadowRoot.innerHTML = `
      <style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:3rem;text-align:center;}.text{font-size:1.25rem;margin:2rem 0;}button{padding:1rem 2rem;border-radius:1rem;border:1px solid var(--surface-border);background:transparent;color:var(--text-muted);cursor:pointer;}</style>
      <h2>${t('zodiac_'+chineseZodiacNames[idx])} ${t('nav_zodiac')}</h2>
      <div class="text">${text}</div>
      <button onclick="location.reload()">← Back</button>
    `;
  }
}
customElements.define('zodiac-fortune', ZodiacFortune);

class HoroscopeFortune extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:3rem;text-align:center;}h2{font-size:2rem;margin-bottom:2rem;} .grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:1rem;} .sign{padding:1.5rem;background:rgba(255,255,255,0.05);border-radius:1.5rem;cursor:pointer;transition:0.3s;border:1px solid transparent;} .sign:hover{border-color:var(--primary-color);background:rgba(255,255,255,0.1);transform:translateY(-5px);} .icon{font-size:2rem;margin-bottom:0.5rem;}</style>
      <h2>${t('nav_horoscope')}</h2>
      <div class="grid">${horoscopeSigns.map((s, i) => `<div class="sign" data-idx="${i}"><div class="icon">${['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'][i]}</div><div>${t('horo_'+s)}</div></div>`).join('')}</div>
    `;
    this.shadowRoot.querySelectorAll('.sign').forEach(el => el.addEventListener('click', () => this.showResult(el.dataset.idx)));
  }
  showResult(idx) {
    const hash = getHash(horoscopeSigns[idx] + new Date().toISOString().split('T')[0]);
    const text = dailySajuData[userLang][(hash+7) % dailySajuData[userLang].length];
    this.shadowRoot.innerHTML = `
      <style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:3rem;text-align:center;}.text{font-size:1.25rem;margin:2rem 0;}button{padding:1rem 2rem;border-radius:1rem;border:1px solid var(--surface-border);background:transparent;color:var(--text-muted);cursor:pointer;}</style>
      <h2>${t('horo_'+horoscopeSigns[idx])} ${t('nav_horoscope')}</h2>
      <div class="text">${text}</div>
      <button onclick="location.reload()">← Back</button>
    `;
  }
}
customElements.define('horoscope-fortune', HoroscopeFortune);

// --- OTHER EXISTING COMPONENTS ---

class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { display: block; text-align: center; padding: 3rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); box-shadow: 0 40px 100px -20px rgba(0,0,0,0.5); }
        h1 { font-size: 3rem; font-weight: 900; margin-bottom: 2rem; color: var(--text-color); letter-spacing: -0.06em; }
        .numbers { display: flex; gap: 1rem; justify-content: center; margin-bottom: 3rem; flex-wrap: wrap; }
        .number { display: grid; place-content: center; width: 4.5rem; height: 4.5rem; font-size: 1.75rem; font-weight: 800; border-radius: 1.5rem; background: rgba(255,255,255,0.05); color: var(--text-color); border: 1px solid rgba(255,255,255,0.1); transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); transform: translateY(30px) scale(0.5); opacity: 0; }
        .number.visible { transform: translateY(0) scale(1); opacity: 1; }
        button { font-size: 1.25rem; font-weight: 700; padding: 1.25em 2.5em; border: none; border-radius: 1.25rem; background: var(--primary-color); color: #12121a; font-weight: 700; cursor: pointer; transition: 0.3s; }
      </style>
      <h1>${t('card_lotto_title')}</h1>
      <div class="numbers">${Array(6).fill('<div class="number">?</div>').join('')}</div>
      <button id="generateBtn">${t('lotto_btn')}</button>
    `;
    this.button = shadow.querySelector('#generateBtn');
    this.numberElements = shadow.querySelectorAll('.number');
    this.button.addEventListener('click', this.generateNumbers.bind(this));
  }
  generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) numbers.add(Math.floor(Math.random() * 45) + 1);
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    this.numberElements.forEach((el, i) => {
      el.classList.remove('visible');
      setTimeout(() => {
        el.textContent = sorted[i];
        const hue = (sorted[i] * 10) % 360;
        el.style.background = `oklch(75% 0.15 ${hue} / 20%)`;
        el.style.borderColor = `oklch(75% 0.15 ${hue} / 50%)`;
        el.style.color = `oklch(90% 0.1 ${hue})`;
        el.classList.add('visible');
      }, i * 150);
    });
  }
}
customElements.define('lotto-generator', LottoGenerator);

class FortuneCookie extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const fortunes = userLang === 'ko' ? ["당신이 꾸고 있는 꿈이 곧 현실이 될 것입니다.", "조만간 이국적인 장소로 여행을 떠나게 될 것입니다.", "누군가 당신을 그리워하고 있습니다.", "새로운 시작이 당신을 더 나은 길로 안내할 것입니다.", "당신의 노력이 곧 결실을 맺을 것입니다.", "큰 재운이 당신을 향해 오고 있습니다."] : ["A dream you have will come true.", "You will travel to many exotic places.", "Someone is thinking of you.", "A fresh start will put you on a better path.", "Your hard work will soon pay off.", "Great wealth is coming your way."];
    shadow.innerHTML = `
      <style>:host{display:block;padding:4rem;background:var(--surface-color);border-radius:3rem;text-align:center;}h2{font-size:2.5rem;margin:0 0 2rem;color:var(--text-color);}.cookie-wrapper{height:200px;display:flex;align-items:center;justify-content:center;cursor:pointer;}.cookie{font-size:100px;transition:0.6s cubic-bezier(0.34,1.56,0.64,1);}.cookie:hover{transform:scale(1.1) rotate(5deg);}.cookie.cracked{transform:scale(1.5) rotate(20deg);opacity:0;pointer-events:none;}#fortune{font-size:1.5rem;font-weight:700;color:var(--primary-color);opacity:0;transform:translateY(20px);transition:0.8s;}</style>
      <h2>${t('cookie_title')}</h2><div class="cookie-wrapper" title="${t('cookie_click')}"><div class="cookie">🥠</div></div><div id="fortune"></div>
    `;
    const cookie = shadow.querySelector('.cookie'); const text = shadow.querySelector('#fortune');
    cookie.addEventListener('click', () => { if (cookie.classList.contains('cracked')) return; cookie.classList.add('cracked'); text.textContent = fortunes[Math.floor(Math.random() * fortunes.length)]; setTimeout(() => text.classList.add('show'), 300); });
  }
}
customElements.define('fortune-cookie', FortuneCookie);

class TarotReader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.deck = [
      { name: userLang === 'ko' ? "광대" : "The Fool", img: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg", meanings: { general: "New beginnings.", love: "Spontaneous.", career: "Leap of faith." } },
      { name: userLang === 'ko' ? "마법사" : "The Magician", img: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", meanings: { general: "Manifestation.", love: "Attraction.", career: "Skills." } },
      { name: userLang === 'ko' ? "고위 여사제" : "The High Priestess", img: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", meanings: { general: "Intuition.", love: "Mystery.", career: "Secret knowledge." } },
      { name: userLang === 'ko' ? "여황제" : "The Empress", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", meanings: { general: "Abundance.", love: "Passion.", career: "Creativity." } },
      { name: userLang === 'ko' ? "황제" : "The Emperor", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", meanings: { general: "Authority.", love: "Stability.", career: "Leadership." } },
      { name: userLang === 'ko' ? "교황" : "The Hierophant", img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", meanings: { general: "Tradition.", love: "Commitment.", career: "Established." } },
      { name: userLang === 'ko' ? "연인" : "The Lovers", img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg", meanings: { general: "Relationships.", love: "Soulmates.", career: "Values." } },
      { name: userLang === 'ko' ? "전차" : "The Chariot", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", meanings: { general: "Victory.", love: "Willpower.", career: "Control." } },
      { name: userLang === 'ko' ? "힘" : "Strength", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg", meanings: { general: "Courage.", love: "Patience.", career: "Resilience." } },
      { name: userLang === 'ko' ? "은둔자" : "The Hermit", img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg", meanings: { general: "Introspection.", love: "Solitude.", career: "Mentorship." } },
      { name: userLang === 'ko' ? "운명의 수레바퀴" : "Wheel of Fortune", img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg", meanings: { general: "Destiny.", love: "Fated change.", career: "Turning point." } },
      { name: userLang === 'ko' ? "정의" : "Justice", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg", meanings: { general: "Fairness.", love: "Truth.", career: "Contracts." } },
      { name: userLang === 'ko' ? "매달린 사람" : "The Hanged Man", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg", meanings: { general: "Perspective.", love: "Pause.", career: "Re-evaluation." } },
      { name: userLang === 'ko' ? "죽음" : "Death", img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg", meanings: { general: "Endings.", love: "Transition.", career: "Job change." } },
      { name: userLang === 'ko' ? "절제" : "Temperance", img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg", meanings: { general: "Balance.", love: "Harmony.", career: "Cooperation." } },
      { name: userLang === 'ko' ? "악마" : "The Devil", img: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg", meanings: { general: "Bondage.", love: "Obsession.", career: "Restriction." } },
      { name: userLang === 'ko' ? "탑" : "The Tower", img: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg", meanings: { general: "Upheaval.", love: "Revelation.", career: "Crisis." } },
      { name: userLang === 'ko' ? "별" : "The Star", img: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg", meanings: { general: "Hope.", love: "Healing.", career: "Inspiration." } },
      { name: userLang === 'ko' ? "달" : "The Moon", img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg", meanings: { general: "Illusion.", love: "Insecurity.", career: "Confusion." } },
      { name: userLang === 'ko' ? "태양" : "The Sun", img: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg", meanings: { general: "Positivity.", love: "Joy.", career: "Success." } },
      { name: userLang === 'ko' ? "심판" : "Judgement", img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg", meanings: { general: "Rebirth.", love: "Decision.", career: "Evaluation." } },
      { name: userLang === 'ko' ? "세계" : "The World", img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg", meanings: { general: "Completion.", love: "Fulfillment.", career: "Major goal." } }
    ];
    shadow.innerHTML = `
      <style>:host{display:block;padding:4rem 2rem;background:var(--surface-color);border-radius:3rem;backdrop-filter:blur(40px);border:1px solid var(--surface-border);text-align:center;width:100%;max-width:900px!important;}h2{font-size:2.5rem;color:var(--text-color);margin-bottom:1rem;}.controls{margin-bottom:3rem;display:flex;gap:1rem;justify-content:center;align-items:center;}select{padding:0.8em 1.5em;border-radius:1rem;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:var(--text-color);font-size:1rem;cursor:pointer;outline:none;}.spread{display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;perspective:1000px;}.card-container{display:flex;flex-direction:column;gap:1rem;align-items:center;width:180px;}.slot{width:100%;height:280px;position:relative;transform-style:preserve-3d;transition:transform 0.8s cubic-bezier(0.175,0.885,0.32,1.275);cursor:pointer;}.slot.flipped{transform:rotateY(180deg);}.card-face{position:absolute;inset:0;backface-visibility:hidden;border-radius:1rem;box-shadow:0 10px 30px -5px rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;}.card-back{background:linear-gradient(135deg,#2a2a3e,#1a1a2e);border:2px solid rgba(255,255,255,0.1);}.card-back::after{content:'🔮';font-size:3rem;opacity:0.5;}.card-front{transform:rotateY(180deg);background:#000;overflow:hidden;}.card-front img{width:100%;height:100%;object-fit:cover;}.label{font-size:0.9rem;font-weight:800;color:var(--primary-color);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;}.card-info{margin-top:1rem;opacity:0;transition:0.5s;transform:translateY(10px);}.card-info.show{opacity:1;transform:translateY(0);}.card-name{font-weight:800;font-size:1.1rem;color:var(--text-color);}.card-meaning{font-size:0.9rem;color:var(--text-muted);margin-top:0.5rem;line-height:1.4;}#resetBtn{margin-top:3rem;background:var(--primary-color);color:#12121a;border:none;padding:1em 2em;border-radius:1rem;font-weight:700;cursor:pointer;display:none;}</style>
      <h2>${t('tarot_title')}</h2><div class="controls"><label>${t('tarot_focus')}</label><select id="concern"><option value="general">${t('tarot_gen')}</option><option value="love">${t('tarot_love')}</option><option value="career">${t('tarot_career')}</option></select></div>
      <div class="spread">${[0,1,2].map(i => `<div class="card-container"><div class="label">${[t('tarot_past'), t('tarot_present'), t('tarot_future')][i]}</div><div class="slot" id="slot${i}"><div class="card-face card-back"></div><div class="card-face card-front"><img src="" alt=""></div></div><div class="card-info"><div class="card-name"></div><div class="card-meaning"></div></div></div>`).join('')}</div>
      <button id="resetBtn">${t('tarot_reset')}</button>
    `;
    this.slots = [0,1,2].map(i => this.shadowRoot.querySelector(`#slot${i}`));
    this.slots.forEach(slot => slot.addEventListener('click', () => this.flipCard(slot)));
    this.shadowRoot.querySelector('#resetBtn').addEventListener('click', () => location.reload());
  }
  flipCard(slot) {
    if (slot.classList.contains('flipped')) return;
    const card = this.deck[Math.floor(Math.random() * this.deck.length)];
    const meaning = card.meanings[this.shadowRoot.querySelector('#concern').value] || card.meanings.general;
    slot.querySelector('img').src = card.img;
    const info = slot.parentElement.querySelector('.card-info');
    info.querySelector('.card-name').textContent = card.name; info.querySelector('.card-meaning').textContent = meaning;
    slot.classList.add('flipped'); setTimeout(() => info.classList.add('show'), 600);
    this.flippedCount = (this.flippedCount || 0) + 1;
    if (this.flippedCount === 3) setTimeout(() => this.shadowRoot.querySelector('#resetBtn').style.display = 'inline-block', 1000);
  }
}
customElements.define('tarot-reader', TarotReader);

class ContactForm extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>:host{display:block;padding:3rem;background:var(--surface-color);border-radius:2rem;border:1px solid var(--surface-border);}h2{font-size:2rem;margin:0 0 1.5rem;color:var(--text-color);}form{display:flex;flex-direction:column;gap:1.5rem;text-align:left;}.field{display:flex;flex-direction:column;gap:0.5rem;}label{font-size:0.9rem;font-weight:600;color:var(--text-muted);}input,textarea{padding:1rem;border-radius:1rem;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.03);color:var(--text-color);font-family:inherit;}button{padding:1.25rem;border-radius:1rem;border:none;background:var(--primary-color);color:#12121a;font-weight:700;cursor:pointer;}</style><h2>${t('contact_title')}</h2><form action="https://formspree.io/f/mpqjlvro" method="POST"><div class="field"><label>${t('contact_email')}</label><input type="email" name="email" required placeholder="..."></div><div class="field"><label>${t('contact_msg')}</label><textarea name="message" rows="4" required placeholder="..."></textarea></div><button type="submit">${t('contact_send')}</button></form>`;
  }
}
customElements.define('contact-form', ContactForm);

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[userLang][key]) el.textContent = translations[userLang][key];
  });
}
document.addEventListener('DOMContentLoaded', translatePage);
