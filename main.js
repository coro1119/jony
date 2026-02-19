// Lucky Hub Main Script - Web Components & i18n Logic

const translations = {
  en: {
    nav_home: "Home",
    nav_lotto: "Lotto",
    nav_fortune: "Daily Fortune",
    nav_cookie: "Fortune Cookie",
    nav_tarot: "Tarot",
    hero_title: "Lucky Hub",
    hero_desc: "Step into your spiritual sanctuary. Explore the mysteries of luck, destiny, and the universe.",
    card_lotto_title: "Lucky Numbers",
    card_lotto_desc: "Generate your winning combination with our advanced lotto engine.",
    card_fortune_title: "Daily Insight",
    card_fortune_desc: "Receive your personal daily spiritual message from the universe.",
    card_cookie_title: "Fortune Cookie",
    card_cookie_desc: "Crack open a piece of wisdom and see what the day holds for you.",
    card_tarot_title: "Tarot Reading",
    card_tarot_desc: "Dive deep into your past, present, and future with a 3-card spread.",
    footer_text: "© 2026 Lucky Hub. All paths lead to wisdom.",
    lotto_btn: "Reveal My Luck",
    fortune_init: "The universe is ready to speak to you...",
    fortune_btn: "Read My Day",
    cookie_title: "Cracking Fortune",
    tarot_title: "Tarot Reading",
    tarot_focus: "Focus on:",
    tarot_gen: "General Guidance",
    tarot_love: "Love & Relationships",
    tarot_career: "Career & Work",
    tarot_past: "Past / Foundation",
    tarot_present: "Present / Challenge",
    tarot_future: "Future / Advice",
    tarot_reset: "New Reading",
    tarot_instr: "Reflect on your path. Reveal the Past, Present, and Future.",
    contact_title: "Connect",
    contact_email: "Email",
    contact_msg: "Message",
    contact_send: "Send Message",
    cookie_click: "Click to crack the cookie"
  },
  ko: {
    nav_home: "홈",
    nav_lotto: "로또",
    nav_fortune: "오늘의 운세",
    nav_cookie: "포춘쿠키",
    nav_tarot: "타로",
    hero_title: "럭키 허브",
    hero_desc: "영혼의 안식처에 오신 것을 환영합니다. 행운, 운명, 그리고 우주의 신비를 탐험해보세요.",
    card_lotto_title: "행운의 번호",
    card_lotto_desc: "정교한 로또 엔진을 통해 당신만의 당첨 조합을 만들어보세요.",
    card_fortune_title: "오늘의 통찰",
    card_fortune_desc: "우주가 당신에게 전하는 오늘의 영적인 메시지를 확인하세요.",
    card_cookie_title: "포춘쿠키",
    card_cookie_desc: "쿠키를 열어 오늘 하루 당신을 기다리는 지혜의 한 마디를 확인하세요.",
    card_tarot_title: "타로 상담",
    card_tarot_desc: "3카드 스프레드를 통해 과거, 현재, 미래를 깊이 있게 들여다보세요.",
    footer_text: "© 2026 럭키 허브. 모든 길은 지혜로 통합니다.",
    lotto_btn: "번호 추첨하기",
    fortune_init: "우주가 당신에게 할 말이 있는 것 같군요...",
    fortune_btn: "메시지 읽기",
    cookie_title: "행운의 과자",
    tarot_title: "타로 리딩",
    tarot_focus: "고민 분야:",
    tarot_gen: "종합적인 가이드",
    tarot_love: "사랑과 연애",
    tarot_career: "직업과 업무",
    tarot_past: "과거 / 토대",
    tarot_present: "현재 / 과제",
    tarot_future: "미래 / 조언",
    tarot_reset: "다시 뽑기",
    tarot_instr: "마음을 차분히 하고 당신의 길을 생각하세요. 과거, 현재, 미래를 보여드립니다.",
    contact_title: "문의하기",
    contact_email: "이메일",
    contact_msg: "내용",
    contact_send: "메시지 보내기",
    cookie_click: "쿠키를 클릭해 열어보세요"
  }
};

const userLang = (navigator.language || navigator.userLanguage).startsWith('ko') ? 'ko' : 'en';
const t = (key) => translations[userLang][key] || key;

document.documentElement.lang = userLang;

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

class DailyFortune extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const fortunes = userLang === 'ko' ? [
      "천 리 길도 한 걸음부터입니다. 오늘 그 첫 걸음을 내딛으세요.",
      "가장 좋은 때는 20년 전이었습니다. 그 다음으로 좋은 때는 바로 지금입니다.",
      "당신의 긍정적인 에너지가 오늘 훌륭한 기회를 불러올 것입니다.",
      "생각지 못한 곳에서 반가운 소식이 들려올 예정입니다.",
      "행운은 용기 있는 자의 편입니다. 과감하게 도전하세요.",
      "작은 진전이라도 괜찮습니다. 멈추지 마세요.",
      "행복은 우연이 아니라 선택입니다. 오늘 행복을 선택하세요.",
      "예상치 못한 만남이 당신의 한 주를 밝혀줄 것입니다."
    ] : [
      "A journey of a thousand miles begins with a single step.",
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "Your positive energy will attract great opportunities today.",
      "A mysterious stranger will bring good news soon.",
      "Fortune favors the bold. Take that leap of faith.",
      "Small progress is still progress. Keep going.",
      "Happiness is not by chance, but by choice.",
      "An unexpected encounter will brighten your week."
    ];
    shadow.innerHTML = `
      <style>
        :host { display: block; padding: 4rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); text-align: center; }
        h2 { font-size: 2.5rem; margin: 0 0 2rem; letter-spacing: -0.05em; color: var(--text-color); }
        #fortuneText { font-size: 1.5rem; color: var(--text-muted); min-height: 10rem; display: flex; align-items: center; justify-content: center; line-height: 1.4; }
        button { font-size: 1.25rem; font-weight: 700; padding: 1em 2em; border-radius: 1.25rem; border: none; background: var(--primary-color); color: #12121a; cursor: pointer; }
      </style>
      <h2>${t('card_fortune_title')}</h2>
      <div id="fortuneText">${t('fortune_init')}</div>
      <button id="getFortune">${t('fortune_btn')}</button>
    `;
    this.btn = shadow.querySelector('#getFortune');
    this.text = shadow.querySelector('#fortuneText');
    this.btn.addEventListener('click', () => {
      this.text.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
      this.text.animate([{ opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 }], { duration: 800, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
    });
  }
}
customElements.define('daily-fortune', DailyFortune);

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
      "A dream you have will come true.",
      "You will travel to many exotic places.",
      "Someone is thinking of you.",
      "A fresh start will put you on a better path.",
      "Your hard work will soon pay off.",
      "Great wealth is coming your way."
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
      { name: userLang === 'ko' ? "광대 (The Fool)" : "The Fool", img: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "새로운 시작, 낙관주의, 삶에 대한 신뢰." : "New beginnings, optimism, trust in life.", 
          love: userLang === 'ko' ? "새로운 로맨스나 신선한 시작. 즉흥적으로 행동하세요." : "A new romance or fresh start. Be spontaneous.", 
          career: userLang === 'ko' ? "믿음의 도약을 하세요. 새로운 직장이나 창의적인 프로젝트가 기다립니다." : "Take a leap of faith. A new job or creative project awaits." 
        } 
      },
      { name: userLang === 'ko' ? "마법사 (The Magician)" : "The Magician", img: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "행동, 능력, 현실화." : "Action, power, manifestation.", 
          love: userLang === 'ko' ? "당신은 원하는 것을 끌어당길 힘이 있습니다." : "You have the power to attract what you desire.", 
          career: userLang === 'ko' ? "자신의 기술과 의지력을 사용하여 성과를 내세요." : "Use your skills and willpower to get things done." 
        } 
      },
      { name: userLang === 'ko' ? "고위 여사제 (The High Priestess)" : "The High Priestess", img: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "직관, 신성한 지식, 잠재의식." : "Intuition, sacred knowledge, subconscious mind.", 
          love: userLang === 'ko' ? "이 관계에 대해 당신의 직감을 믿으세요." : "Trust your gut feelings about this relationship.", 
          career: userLang === 'ko' ? "직관에 귀를 기울이세요. 모든 것이 보이는 것과 같지는 않습니다." : "Listen to your intuition; not everything is as it seems." 
        } 
      },
      { name: userLang === 'ko' ? "여황제 (The Empress)" : "The Empress", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "여성성, 아름다움, 자연, 양육." : "Femininity, beauty, nature, nurturing.", 
          love: userLang === 'ko' ? "열정과 연결, 그리고 풍요로움의 시기입니다." : "A time of passion, connection, and fertility.", 
          career: userLang === 'ko' ? "창의성이 샘솟고 있습니다. 아이디어를 잘 키워보세요." : "Creativity is flowing. Nurture your ideas." 
        } 
      },
      { name: userLang === 'ko' ? "황제 (The Emperor)" : "The Emperor", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "권위, 구조, 견고한 토대." : "Authority, structure, solid foundation.", 
          love: userLang === 'ko' ? "안정과 헌신. 리드하는 파트너를 만날 수 있습니다." : "Stability and commitment. A partner who takes charge.", 
          career: userLang === 'ko' ? "규율 있는 접근 방식이 필요합니다. 리더십을 발휘하세요." : "Take a disciplined approach. Leadership is required." 
        } 
      },
      { name: userLang === 'ko' ? "교황 (The Hierophant)" : "The Hierophant", img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "영적 지혜, 신념, 전통 준수." : "Spiritual wisdom, religious beliefs, conformity.", 
          love: userLang === 'ko' ? "전통적인 헌신, 결혼, 혹은 가치관의 공유." : "Traditional commitment, marriage, or shared values.", 
          career: userLang === 'ko' ? "당분간은 규칙과 확립된 방식을 따르는 것이 좋습니다." : "Stick to the rules and established methods for now." 
        } 
      },
      { name: userLang === 'ko' ? "연인 (The Lovers)" : "The Lovers", img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "사랑, 조화, 관계, 선택." : "Love, harmony, relationships, choices.", 
          love: userLang === 'ko' ? "깊은 연결, 소울메이트, 혹은 사랑에서의 중대한 선택." : "Deep connection, soulmates, or a significant choice in love.", 
          career: userLang === 'ko' ? "비즈니스에서의 파트너십과 가치관의 일치." : "Partnerships and alignment of values in business." 
        } 
      },
      { name: userLang === 'ko' ? "전차 (The Chariot)" : "The Chariot", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "통제, 의지력, 승리, 주장." : "Control, willpower, victory, assertion.", 
          love: userLang === 'ko' ? "함께하기 위해 장애물을 극복함. 결단력." : "Overcoming obstacles to be together. Determination.", 
          career: userLang === 'ko' ? "집중력과 추진력이 승리로 이끌 것입니다. 지금의 길을 유지하세요." : "Focus and drive will lead to victory. Stay the course." 
        } 
      },
      { name: userLang === 'ko' ? "힘 (Strength)" : "Strength", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "용기, 설득, 영향력, 자비." : "Courage, persuasion, influence, compassion.", 
          love: userLang === 'ko' ? "인내와 이해가 유대감을 강화할 것입니다." : "Patience and understanding will strengthen the bond.", 
          career: userLang === 'ko' ? "조용한 자신감과 회복탄력성이 승리할 것입니다." : "Quiet confidence and resilience will win the day." 
        } 
      },
      { name: userLang === 'ko' ? "은둔자 (The Hermit)" : "The Hermit", img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "영적 탐구, 자기 성찰, 고독." : "Soul-searching, introspection, being alone.", 
          love: userLang === 'ko' ? "진정으로 원하는 것이 무엇인지 혼자 생각할 시간." : "A time to reflect on what you truly want alone.", 
          career: userLang === 'ko' ? "한 걸음 물러나 자신의 경로를 분석하세요. 멘토를 찾으세요." : "Step back and analyze your path. Seek mentorship." 
        } 
      },
      { name: userLang === 'ko' ? "운명의 수레바퀴 (Wheel of Fortune)" : "Wheel of Fortune", img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "행운, 카르마, 인생의 주기, 운명." : "Good luck, karma, life cycles, destiny.", 
          love: userLang === 'ko' ? "운명적인 만남이나 관계 상태의 변화." : "Fated meetings or changes in relationship status.", 
          career: userLang === 'ko' ? "전환점입니다. 행운이 당신 편입니다." : "A turning point. Luck is on your side." 
        } 
      },
      { name: userLang === 'ko' ? "정의 (Justice)" : "Justice", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "정의, 공정함, 진실, 인과응보." : "Justice, fairness, truth, cause and effect.", 
          love: userLang === 'ko' ? "서로를 공정하게 대함. 진실이 드러남." : "Treating each other with fairness. Truth coming out.", 
          career: userLang === 'ko' ? "계약, 법적 문제, 그리고 공정한 거래." : "Contracts, legal matters, and fair dealings." 
        } 
      },
      { name: userLang === 'ko' ? "매달린 사람 (The Hanged Man)" : "The Hanged Man", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "일시 정지, 항복, 내려놓기, 새로운 관점." : "Pause, surrender, letting go, new perspectives.", 
          love: userLang === 'ko' ? "통제를 내려놓으세요. 상황을 다르게 바라보기." : "Letting go of control. Seeing things differently.", 
          career: userLang === 'ko' ? "기다림의 시간입니다. 이 시간을 전략 재구상에 사용하세요." : "A period of waiting. Use this time to rethink strategies." 
        } 
      },
      { name: userLang === 'ko' ? "죽음 (Death)" : "Death", img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "종결, 변화, 변형, 전환." : "Endings, change, transformation, transition.", 
          love: userLang === 'ko' ? "단계나 관계의 끝. 깊은 내적 변화." : "The end of a phase or relationship. Deep transformation.", 
          career: userLang === 'ko' ? "직무 변경이나 프로젝트의 종료. 갱신." : "A job change or the end of a project. Renewal." 
        } 
      },
      { name: userLang === 'ko' ? "절제 (Temperance)" : "Temperance", img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "균형, 절제, 인내, 목적." : "Balance, moderation, patience, purpose.", 
          love: userLang === 'ko' ? "조화와 인내. 공통점 찾기." : "Harmony and patience. Finding common ground.", 
          career: userLang === 'ko' ? "균형을 유지하고 극단을 피하세요. 협력." : "Stay balanced and avoid extremes. Cooperation." 
        } 
      },
      { name: userLang === 'ko' ? "악마 (The Devil)" : "The Devil", img: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "그림자 자아, 집착, 중독, 제약." : "Shadow self, attachment, addiction, restriction.", 
          love: userLang === 'ko' ? "강박적인 생각이나 건강하지 못한 집착. 욕망." : "Obsession or an unhealthy attachment. Lust.", 
          career: userLang === 'ko' ? "직업적 정체 현상. 비윤리적인 선택을 주의하세요." : "Feeling trapped in a job. Beware of unethical choices." 
        } 
      },
      { name: userLang === 'ko' ? "탑 (The Tower)" : "The Tower", img: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "갑작스러운 변화, 격변, 혼란, 계시." : "Sudden change, upheaval, chaos, revelation.", 
          love: userLang === 'ko' ? "갑작스러운 이별이나 깨달음. 큰 충격." : "A sudden breakup or realization. Shaking things up.", 
          career: userLang === 'ko' ? "예상치 못한 실직이나 갈등. 재건이 필요함." : "Unexpected job loss or conflict. Rebuilding required." 
        } 
      },
      { name: userLang === 'ko' ? "별 (The Star)" : "The Star", img: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "희망, 믿음, 목적, 갱신, 영성." : "Hope, faith, purpose, renewal, spirituality.", 
          love: userLang === 'ko' ? "과거의 상처 치유. 미래에 대한 낙관." : "Healing past wounds. Optimism for the future.", 
          career: userLang === 'ko' ? "영감과 새로운 기회. 꿈을 따르세요." : "Inspiration and new opportunities. Follow your dreams." 
        } 
      },
      { name: userLang === 'ko' ? "달 (The Moon)" : "The Moon", img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "환상, 공포, 불안, 잠재의식, 직관." : "Illusion, fear, anxiety, subconscious, intuition.", 
          love: userLang === 'ko' ? "불확실성이나 기만. 비밀이 드러날 수 있음." : "Uncertainty or deception. Secrets may be revealed.", 
          career: userLang === 'ko' ? "경로에 대한 혼란. 직관을 믿으세요." : "Confusion about your path. Trust your intuition." 
        } 
      },
      { name: userLang === 'ko' ? "태양 (The Sun)" : "The Sun", img: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "긍정, 즐거움, 따뜻함, 성공, 활력." : "Positivity, fun, warmth, success, vitality.", 
          love: userLang === 'ko' ? "기쁨, 행복, 약혼. 순수한 축복." : "Joy, happiness, and engagement. Pure bliss.", 
          career: userLang === 'ko' ? "성공, 인정, 그리고 풍요." : "Success, recognition, and abundance." 
        } 
      },
      { name: userLang === 'ko' ? "심판 (Judgement)" : "Judgement", img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "심판, 재생, 내면의 부름, 사면." : "Judgement, rebirth, inner calling, absolution.", 
          love: userLang === 'ko' ? "관계의 갱신 혹은 명확한 결정 내리기." : "A relationship renewal or making a clear decision.", 
          career: userLang === 'ko' ? "새로운 천직으로의 부름. 성공에 대한 평가." : "A calling to a new vocation. Evaluation of success." 
        } 
      },
      { name: userLang === 'ko' ? "세계 (The World)" : "The World", img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg", 
        meanings: { 
          general: userLang === 'ko' ? "완성, 통합, 성취, 여행." : "Completion, integration, accomplishment, travel.", 
          love: userLang === 'ko' ? "성취와 행복. 하나의 주기가 완성됨." : "Fulfillment and happiness. A cycle is complete.", 
          career: userLang === 'ko' ? "주요 목표 달성. 글로벌한 기회." : "Reaching a major goal. Global opportunities." 
        } 
      }
    ];

    shadow.innerHTML = `
      <style>
        :host { display: block; padding: 4rem 2rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); text-align: center; width: 100%; max-width: 900px !important; }
        h2 { font-size: 2.5rem; color: var(--text-color); margin-bottom: 1rem; }
        .controls { margin-bottom: 3rem; display: flex; gap: 1rem; justify-content: center; align-items: center; }
        select { padding: 0.8em 1.5em; border-radius: 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: var(--text-color); font-size: 1rem; cursor: pointer; outline: none; }
        select option { background: #222; color: #fff; }
        .spread { display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; perspective: 1000px; }
        .card-container { display: flex; flex-direction: column; gap: 1rem; align-items: center; width: 200px; }
        .slot { width: 180px; height: 300px; position: relative; transform-style: preserve-3d; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: pointer; }
        .slot.flipped { transform: rotateY(180deg); }
        .card-face { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 1rem; box-shadow: 0 10px 30px -5px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; }
        .card-back { background: linear-gradient(135deg, #2a2a3e, #1a1a2e); border: 2px solid rgba(255,255,255,0.1); background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 10px); }
        .card-back::after { content: '🔮'; font-size: 3rem; opacity: 0.5; }
        .card-front { transform: rotateY(180deg); background: #000; overflow: hidden; }
        .card-front img { width: 100%; height: 100%; object-fit: cover; }
        .label { font-size: 0.9rem; font-weight: 800; color: var(--primary-color); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
        .card-info { margin-top: 1rem; opacity: 0; transition: 0.5s; transform: translateY(10px); }
        .card-info.show { opacity: 1; transform: translateY(0); }
        .card-name { font-weight: 800; font-size: 1.1rem; color: var(--text-color); }
        .card-meaning { font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.4; }
        #resetBtn { margin-top: 3rem; background: var(--primary-color); color: #12121a; border: none; padding: 1em 2em; border-radius: 1rem; font-weight: 700; cursor: pointer; display: none; }
        #resetBtn:hover { transform: translateY(-2px); }
      </style>
      <h2>${t('tarot_title')}</h2>
      <div class="controls">
        <label for="concern">${t('tarot_focus')}</label>
        <select id="concern">
          <option value="general">${t('tarot_gen')}</option>
          <option value="love">${t('tarot_love')}</option>
          <option value="career">${t('tarot_career')}</option>
        </select>
      </div>
      <div class="spread">
        <div class="card-container">
          <div class="label">${t('tarot_past')}</div>
          <div class="slot" id="slot0"><div class="card-face card-back"></div><div class="card-face card-front"><img src="" alt=""></div></div>
          <div class="card-info"><div class="card-name"></div><div class="card-meaning"></div></div>
        </div>
        <div class="card-container">
          <div class="label">${t('tarot_present')}</div>
          <div class="slot" id="slot1"><div class="card-face card-back"></div><div class="card-face card-front"><img src="" alt=""></div></div>
          <div class="card-info"><div class="card-name"></div><div class="card-meaning"></div></div>
        </div>
        <div class="card-container">
          <div class="label">${t('tarot_future')}</div>
          <div class="slot" id="slot2"><div class="card-face card-back"></div><div class="card-face card-front"><img src="" alt=""></div></div>
          <div class="card-info"><div class="card-name"></div><div class="card-meaning"></div></div>
        </div>
      </div>
      <button id="resetBtn">${t('tarot_reset')}</button>
    `;
    this.concernSelect = shadow.querySelector('#concern');
    this.resetBtn = shadow.querySelector('#resetBtn');
    this.slots = [shadow.querySelector('#slot0'), shadow.querySelector('#slot1'), shadow.querySelector('#slot2')];
    this.flippedCount = 0;
    this.slots.forEach(slot => { slot.addEventListener('click', () => this.flipCard(slot)); });
    this.resetBtn.addEventListener('click', () => {
      this.flippedCount = 0;
      this.resetBtn.style.display = 'none';
      this.slots.forEach(slot => { slot.classList.remove('flipped'); slot.parentElement.querySelector('.card-info').classList.remove('show'); });
    });
  }
  flipCard(slot) {
    if (slot.classList.contains('flipped')) return;
    const card = this.deck[Math.floor(Math.random() * this.deck.length)];
    const concern = this.concernSelect.value;
    const meaning = card.meanings[concern] || card.meanings.general;
    const img = slot.querySelector('img');
    img.src = card.img; img.alt = card.name;
    const container = slot.parentElement;
    const nameEl = container.querySelector('.card-name');
    const meaningEl = container.querySelector('.card-meaning');
    nameEl.textContent = card.name; meaningEl.textContent = meaning;
    slot.classList.add('flipped');
    setTimeout(() => { container.querySelector('.card-info').classList.add('show'); }, 600);
    this.flippedCount++;
    if (this.flippedCount === 3) { setTimeout(() => this.resetBtn.style.display = 'inline-block', 1000); }
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
        <div class="field"><label>${t('contact_email')}</label><input type="email" name="email" required placeholder="your@email.com"></div>
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
    if (translations[userLang][key]) {
      el.textContent = translations[userLang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', translatePage);
