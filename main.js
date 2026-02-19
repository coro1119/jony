// Lucky Hub Main Script - Web Components, i18n & Saju Logic

const translations = {
  en: {
    nav_home: "Home", nav_lotto: "Lotto", nav_fortune: "Saju Fortune", nav_cookie: "Fortune Cookie", nav_tarot: "Tarot",
    hero_title: "Lucky Hub", hero_desc: "Step into your spiritual sanctuary. Explore the mysteries of luck and destiny.",
    card_lotto_title: "Lucky Numbers", card_lotto_desc: "Generate your winning combination with our advanced lotto engine.",
    card_fortune_title: "Daily Saju", card_fortune_desc: "Enter your birth details for a personalized traditional fortune reading.",
    card_cookie_title: "Fortune Cookie", card_cookie_desc: "Crack open a piece of wisdom and see what the day holds for you.",
    card_tarot_title: "Tarot Reading", card_tarot_desc: "Dive deep into your past, present, and future with a 3-card spread.",
    footer_text: "© 2026 Lucky Hub. All paths lead to wisdom.",
    lotto_btn: "Reveal My Luck",
    fortune_birthdate: "Birth Date", fortune_birthtime: "Birth Time", fortune_gender: "Gender",
    fortune_male: "Male", fortune_female: "Female", fortune_btn: "Read My Destiny",
    fortune_unknown_time: "Unknown", fortune_calculating: "Analyzing your destiny...",
    fortune_general: "General", fortune_wealth: "Wealth", fortune_love: "Love", fortune_success: "Success",
    cookie_title: "Cracking Fortune", cookie_click: "Click to crack",
    tarot_title: "Tarot Reading", tarot_focus: "Focus on:", tarot_gen: "General Guidance", tarot_love: "Love & Relationships", tarot_career: "Career & Work",
    tarot_past: "Past", tarot_present: "Present", tarot_future: "Future", tarot_reset: "New Reading",
    contact_title: "Connect", contact_email: "Email", contact_msg: "Message", contact_send: "Send"
  },
  ko: {
    nav_home: "홈", nav_lotto: "로또", nav_fortune: "오늘의 운세", nav_cookie: "포춘쿠키", nav_tarot: "타로",
    hero_title: "럭키 허브", hero_desc: "영혼의 안식처에 오신 것을 환영합니다. 당신의 운명을 탐험해보세요.",
    card_lotto_title: "행운의 번호", card_lotto_desc: "정교한 로또 엔진을 통해 당신만의 당첨 조합을 만들어보세요.",
    card_fortune_title: "오늘의 운세", card_fortune_desc: "사주 정보를 입력하여 전통 방식의 맞춤형 운세를 확인하세요.",
    card_cookie_title: "포춘쿠키", card_cookie_desc: "쿠키를 열어 오늘 하루 당신을 기다리는 지혜의 한 마디를 확인하세요.",
    card_tarot_title: "타로 상담", card_tarot_desc: "3카드 스프레드를 통해 과거, 현재, 미래를 깊이 있게 들여다보세요.",
    footer_text: "© 2026 럭키 허브. 모든 길은 지혜로 통합니다.",
    lotto_btn: "번호 추첨하기",
    fortune_birthdate: "생년월일", fortune_birthtime: "태어난 시간", fortune_gender: "성별",
    fortune_male: "남성", fortune_female: "여성", fortune_btn: "운세 확인하기",
    fortune_unknown_time: "모름/기타", fortune_calculating: "당신의 사주를 분석 중입니다...",
    fortune_general: "종합운", fortune_wealth: "재물운", fortune_love: "애정운", fortune_success: "성공운",
    cookie_title: "행운의 과자", cookie_click: "클릭하여 열기",
    tarot_title: "타로 리딩", tarot_focus: "고민 분야:", tarot_gen: "종합 가이드", tarot_love: "연애운", tarot_career: "직업운",
    tarot_past: "과거", tarot_present: "현재", tarot_future: "미래", tarot_reset: "다시 뽑기",
    contact_title: "문의하기", contact_email: "이메일", contact_msg: "내용", contact_send: "보내기"
  }
};

const userLang = (navigator.language || navigator.userLanguage).startsWith('ko') ? 'ko' : 'en';
const t = (key) => translations[userLang][key] || key;
document.documentElement.lang = userLang;

// Shared Saju Data (Simplified sets for deterministic logic)
const sajuFortunes = {
  ko: [
    "나무가 물을 만나 잎이 푸르러지는 형국이니, 새로운 시작에 아주 좋은 날입니다.",
    "귀인이 동쪽에서 나타나 당신의 고민을 해결해줄 것입니다. 주변을 잘 살피세요.",
    "재물이 강물처럼 흘러들어오니, 투자나 새로운 계약을 검토하기에 최적의 시기입니다.",
    "작은 것을 탐하다 큰 것을 잃을 수 있습니다. 오늘은 과욕을 버리고 현상을 유지하세요.",
    "구름 사이로 햇살이 비치니, 그동안의 노력이 결실을 맺고 인정을 받게 됩니다.",
    "가까운 사람과의 말다툼을 주의하세요. 참는 자에게 복이 오는 하루입니다.",
    "이동운이 강하게 들어오니, 여행이나 출장에서 좋은 성과를 거둘 수 있습니다.",
    "마음이 평온하니 만사가 형통합니다. 소중한 사람들과 시간을 보내며 에너지를 충전하세요."
  ],
  en: [
    "Like wood meeting water and turning green, it's a perfect day for new beginnings.",
    "A noble person will appear from the east to solve your problems. Stay alert.",
    "Wealth flows like a river; it's an optimal time for investments or new contracts.",
    "Greed for small gains may lead to large losses. Maintain the status quo today.",
    "Sunlight breaks through the clouds; your hard work will finally be recognized.",
    "Watch out for disputes with those close to you. Patience is your virtue today.",
    "Strong energy for movement; expect great results from travel or business trips.",
    "With a peaceful mind, everything goes well. Recharge by spending time with loved ones."
  ]
};

class DailyFortune extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.renderInput();
  }

  renderInput() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; padding: 3rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); text-align: center; }
        h2 { font-size: 2.5rem; margin: 0 0 2rem; letter-spacing: -0.05em; color: var(--text-color); }
        .form { display: grid; gap: 1.5rem; text-align: left; max-width: 400px; margin: 0 auto; }
        .field { display: flex; flex-direction: column; gap: 0.5rem; }
        label { font-size: 0.9rem; font-weight: 600; color: var(--text-muted); }
        input, select { padding: 1rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--text-color); font-family: inherit; appearance: none; }
        select option { background-color: #1a1a2e; color: #ffffff; }
        [data-theme="light"] select option { background-color: #ffffff; color: #1e1e2e; }
        input:focus, select:focus { outline: none; border-color: var(--primary-color); }
        button:hover { transform: translateY(-2px); filter: brightness(1.1); }
      </style>
      <h2>${t('card_fortune_title')}</h2>
      <div class="form">
        <div class="field">
          <label>${t('fortune_birthdate')}</label>
          <input type="date" id="dob" required>
        </div>
        <div class="field">
          <label>${t('fortune_birthtime')}</label>
          <select id="tob">
            <option value="unknown">${t('fortune_unknown_time')}</option>
            ${Array.from({length: 24}, (_, i) => `<option value="${i}">${i}:00 - ${i+1}:59</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>${t('fortune_gender')}</label>
          <select id="gender">
            <option value="m">${t('fortune_male')}</option>
            <option value="f">${t('fortune_female')}</option>
          </select>
        </div>
        <button id="submitBtn">${t('fortune_btn')}</button>
      </div>
    `;
    this.shadowRoot.querySelector('#submitBtn').addEventListener('click', () => this.calculate());
  }

  calculate() {
    const dob = this.shadowRoot.querySelector('#dob').value;
    if (!dob) return;

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; padding: 4rem; background: var(--surface-color); border-radius: 3rem; text-align: center; }
        .loader { font-size: 1.25rem; color: var(--primary-color); font-weight: 700; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      </style>
      <div class="loader">${t('fortune_calculating')}</div>
    `;

    setTimeout(() => this.renderResult(dob), 1500);
  }

  renderResult(dob) {
    const today = new Date().toISOString().split('T')[0];
    const seed = dob + today;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    const absHash = Math.abs(hash);

    const scores = {
      gen: 60 + (absHash % 41),
      wealth: 50 + (absHash % 51),
      love: 40 + (absHash % 61),
      success: 55 + (absHash % 46)
    };

    const mainText = sajuFortunes[userLang][absHash % sajuFortunes[userLang].length];

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; padding: 3rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); text-align: center; color: var(--text-color); }
        .score-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0; }
        .score-item { background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 1.5rem; border: 1px solid rgba(255,255,255,0.1); }
        .score-val { font-size: 2rem; font-weight: 900; color: var(--primary-color); }
        .score-label { font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-top: 0.5rem; }
        .fortune-text { font-size: 1.25rem; line-height: 1.6; margin: 2rem 0; color: var(--text-color); font-weight: 500; }
        button { padding: 1rem 2rem; border-radius: 1rem; border: 1px solid var(--surface-border); background: transparent; color: var(--text-muted); cursor: pointer; }
      </style>
      <h2>${t('card_fortune_title')}</h2>
      
      <div class="score-grid">
        <div class="score-item"><div class="score-val">${scores.gen}%</div><div class="score-label">${t('fortune_general')}</div></div>
        <div class="score-item"><div class="score-val">${scores.wealth}%</div><div class="score-label">${t('fortune_wealth')}</div></div>
        <div class="score-item"><div class="score-val">${scores.love}%</div><div class="score-label">${t('fortune_love')}</div></div>
        <div class="score-item"><div class="score-val">${scores.success}%</div><div class="score-label">${t('fortune_success')}</div></div>
      </div>

      <div class="fortune-text">${mainText}</div>
      
      <button id="backBtn">← Back</button>
    `;
    this.shadowRoot.querySelector('#backBtn').addEventListener('click', () => this.renderInput());
  }
}
customElements.define('daily-fortune', DailyFortune);

// --- OTHER COMPONENTS (UNCHANGED BUT RE-DEFINED FOR INTEGRITY) ---

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
        button { font-size: 1.25rem; font-weight: 700; padding: 1.25em 2.5em; border: none; border-radius: 1.25rem; background: var(--primary-color); color: #12121a; cursor: pointer; transition: all 0.3s ease; }
        button:hover { transform: translateY(-4px); filter: brightness(1.1); }
      </style>
      <h1>${t('card_lotto_title')}</h1>
      <div class="numbers">
        ${Array(6).fill('<div class="number">?</div>').join('')}
      </div>
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
    const fortunes = userLang === 'ko' ? [
      "당신이 꾸고 있는 꿈이 곧 현실이 될 것입니다.",
      "조만간 이국적인 장소로 여행을 떠나게 될 것입니다.",
      "누군가 당신을 그리워하고 있습니다.",
      "새로운 시작이 당신을 더 나은 길로 안내할 것입니다.",
      "당신의 노력이 곧 결실을 맺을 것입니다.",
      "큰 재운이 당신을 향해 오고 있습니다."
    ] : [
      "A dream you have will come true.", "You will travel to many exotic places.", "Someone is thinking of you.", "A fresh start will put you on a better path.", "Your hard work will soon pay off.", "Great wealth is coming your way."
    ];
    shadow.innerHTML = `
      <style>
        :host { display: block; padding: 4rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); text-align: center; }
        h2 { font-size: 2.5rem; margin: 0 0 2rem; letter-spacing: -0.05em; color: var(--text-color); }
        .cookie-wrapper { height: 200px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .cookie { font-size: 100px; transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .cookie:hover { transform: scale(1.1) rotate(5deg); }
        .cookie.cracked { transform: scale(1.5) rotate(20deg); opacity: 0; pointer-events: none; }
        #fortune { font-size: 1.5rem; font-weight: 700; color: var(--primary-color); opacity: 0; transform: translateY(20px); transition: all 0.8s ease; }
        #fortune.show { opacity: 1; transform: translateY(0); }
      </style>
      <h2>${t('cookie_title')}</h2>
      <div class="cookie-wrapper" title="${t('cookie_click')}"><div class="cookie">🥠</div></div>
      <div id="fortune"></div>
    `;
    const cookie = shadow.querySelector('.cookie');
    const text = shadow.querySelector('#fortune');
    cookie.addEventListener('click', () => {
      if (cookie.classList.contains('cracked')) return;
      cookie.classList.add('cracked');
      text.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
      setTimeout(() => text.classList.add('show'), 300);
    });
  }
}
customElements.define('fortune-cookie', FortuneCookie);

class TarotReader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.deck = [
      { name: userLang === 'ko' ? "광대 (Fool)" : "The Fool", img: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg", meanings: { general: "New beginnings.", love: "Spontaneous romance.", career: "Leap of faith." } },
      { name: userLang === 'ko' ? "마법사 (Magician)" : "The Magician", img: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", meanings: { general: "Manifestation.", love: "Attraction.", career: "Skill usage." } },
      { name: userLang === 'ko' ? "여사제 (High Priestess)" : "High Priestess", img: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", meanings: { general: "Intuition.", love: "Inner knowing.", career: "Secret knowledge." } },
      { name: userLang === 'ko' ? "여황제 (Empress)" : "The Empress", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", meanings: { general: "Nurturing.", love: "Abundance.", career: "Creativity." } },
      { name: userLang === 'ko' ? "황제 (Emperor)" : "The Emperor", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", meanings: { general: "Authority.", love: "Stability.", career: "Leadership." } },
      { name: userLang === 'ko' ? "교황 (Hierophant)" : "The Hierophant", img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", meanings: { general: "Tradition.", love: "Commitment.", career: "Established ways." } },
      { name: userLang === 'ko' ? "연인 (Lovers)" : "The Lovers", img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg", meanings: { general: "Relationships.", love: "Deep connection.", career: "Alignment." } },
      { name: userLang === 'ko' ? "전차 (Chariot)" : "The Chariot", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", meanings: { general: "Victory.", love: "Determination.", career: "Control." } },
      { name: userLang === 'ko' ? "힘 (Strength)" : "Strength", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg", meanings: { general: "Courage.", love: "Compassion.", career: "Influence." } },
      { name: userLang === 'ko' ? "은둔자 (Hermit)" : "The Hermit", img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg", meanings: { general: "Introspection.", love: "Solo reflection.", career: "Mentorship." } },
      { name: userLang === 'ko' ? "운명 (Wheel)" : "Wheel of Fortune", img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg", meanings: { general: "Luck.", love: "Fated change.", career: "Turning point." } },
      { name: userLang === 'ko' ? "정의 (Justice)" : "Justice", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg", meanings: { general: "Fairness.", love: "Truth.", career: "Legal/Contracts." } },
      { name: userLang === 'ko' ? "매달린 사람" : "Hanged Man", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg", meanings: { general: "Perspective.", love: "Letting go.", career: "Waiting." } },
      { name: userLang === 'ko' ? "죽음 (Death)" : "Death", img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg", meanings: { general: "Transition.", love: "Endings.", career: "Renewal." } },
      { name: userLang === 'ko' ? "절제 (Temperance)" : "Temperance", img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg", meanings: { general: "Balance.", love: "Patience.", career: "Cooperation." } },
      { name: userLang === 'ko' ? "악마 (Devil)" : "The Devil", img: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg", meanings: { general: "Bondage.", love: "Obsession.", career: "Trapped." } },
      { name: userLang === 'ko' ? "탑 (Tower)" : "The Tower", img: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg", meanings: { general: "Upheaval.", love: "Breakdown.", career: "Conflict." } },
      { name: userLang === 'ko' ? "별 (Star)" : "The Star", img: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg", meanings: { general: "Hope.", love: "Healing.", career: "Inspiration." } },
      { name: userLang === 'ko' ? "달 (Moon)" : "The Moon", img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg", meanings: { general: "Illusion.", love: "Fear.", career: "Confusion." } },
      { name: userLang === 'ko' ? "태양 (Sun)" : "The Sun", img: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg", meanings: { general: "Success.", love: "Engagement.", career: "Abundance." } },
      { name: userLang === 'ko' ? "심판 (Judgement)" : "Judgement", img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg", meanings: { general: "Rebirth.", love: "Clear decision.", career: "Evaluation." } },
      { name: userLang === 'ko' ? "세계 (World)" : "The World", img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg", meanings: { general: "Completion.", love: "Fulfillment.", career: "Major goal." } }
    ];
    shadow.innerHTML = `
      <style>
        :host { display: block; padding: 4rem 2rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); text-align: center; width: 100%; max-width: 900px !important; }
        h2 { font-size: 2.5rem; color: var(--text-color); margin-bottom: 1rem; }
        .controls { margin-bottom: 3rem; display: flex; gap: 1rem; justify-content: center; align-items: center; }
        select { padding: 0.8em 1.5em; border-radius: 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: var(--text-color); font-size: 1rem; cursor: pointer; }
        .spread { display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; perspective: 1000px; }
        .card-container { display: flex; flex-direction: column; gap: 1rem; align-items: center; width: 180px; }
        .slot { width: 100%; height: 280px; position: relative; transform-style: preserve-3d; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: pointer; }
        .slot.flipped { transform: rotateY(180deg); }
        .card-face { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 1rem; box-shadow: 0 10px 30px -5px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; }
        .card-back { background: linear-gradient(135deg, #2a2a3e, #1a1a2e); border: 2px solid rgba(255,255,255,0.1); }
        .card-back::after { content: '🔮'; font-size: 3rem; opacity: 0.5; }
        .card-front { transform: rotateY(180deg); background: #000; overflow: hidden; }
        .card-front img { width: 100%; height: 100%; object-fit: cover; }
        .card-info { margin-top: 1rem; opacity: 0; transition: 0.5s; transform: translateY(10px); }
        .card-info.show { opacity: 1; transform: translateY(0); }
        .card-name { font-weight: 800; color: var(--text-color); }
        .card-meaning { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.4; }
        #resetBtn { margin-top: 3rem; background: var(--primary-color); color: #12121a; border: none; padding: 1em 2em; border-radius: 1rem; font-weight: 700; cursor: pointer; display: none; }
      </style>
      <h2>${t('tarot_title')}</h2>
      <div class="controls"><label>${t('tarot_focus')}</label>
        <select id="concern"><option value="general">${t('tarot_gen')}</option><option value="love">${t('tarot_love')}</option><option value="career">${t('tarot_career')}</option></select>
      </div>
      <div class="spread">
        ${[0,1,2].map(i => `
          <div class="card-container">
            <div class="label">${[t('tarot_past'), t('tarot_present'), t('tarot_future')][i]}</div>
            <div class="slot" id="slot${i}"><div class="card-face card-back"></div><div class="card-face card-front"><img src="" alt=""></div></div>
            <div class="card-info"><div class="card-name"></div><div class="card-meaning"></div></div>
          </div>
        `).join('')}
      </div>
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
    info.querySelector('.card-name').textContent = card.name;
    info.querySelector('.card-meaning').textContent = meaning;
    slot.classList.add('flipped');
    setTimeout(() => info.classList.add('show'), 600);
    this.flippedCount = (this.flippedCount || 0) + 1;
    if (this.flippedCount === 3) setTimeout(() => this.shadowRoot.querySelector('#resetBtn').style.display = 'inline-block', 1000);
  }
}
customElements.define('tarot-reader', TarotReader);

class ContactForm extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { display: block; padding: 3rem; background: var(--surface-color); border-radius: 2rem; border: 1px solid var(--surface-border); }
        h2 { font-size: 2rem; margin: 0 0 1.5rem; letter-spacing: -0.04em; color: var(--text-color); }
        form { display: flex; flex-direction: column; gap: 1.5rem; text-align: left; }
        .field { display: flex; flex-direction: column; gap: 0.5rem; }
        label { font-size: 0.9rem; font-weight: 600; color: var(--text-muted); }
        input, textarea { padding: 1rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--text-color); font-family: inherit; }
        button { padding: 1.25rem; border-radius: 1rem; border: none; background: var(--primary-color); color: #12121a; font-weight: 700; cursor: pointer; }
      </style>
      <h2>${t('contact_title')}</h2>
      <form action="https://formspree.io/f/mpqjlvro" method="POST">
        <div class="field"><label>${t('contact_email')}</label><input type="email" name="email" required placeholder="..."></div>
        <div class="field"><label>${t('contact_msg')}</label><textarea name="message" rows="4" required placeholder="..."></textarea></div>
        <button type="submit">${t('contact_send')}</button>
      </form>
    `;
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
