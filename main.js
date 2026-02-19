// Lucky Hub Main Script - Web Components Definitions

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
      <h1>Lucky Numbers</h1>
      <div class="numbers">
        ${Array(6).fill('<div class="number">?</div>').join('')}
      </div>
      <button id="generateBtn">Reveal My Luck</button>
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
    const fortunes = [
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
      <h2>Daily Insight</h2>
      <div id="fortuneText">The universe is ready to speak to you...</div>
      <button id="getFortune">Read My Day</button>
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
    const fortunes = [
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
      <h2>Cracking Fortune</h2>
      <div class="cookie-wrapper"><div class="cookie">🥠</div></div>
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
    
    // Detailed Major Arcana Data
    this.deck = [
      { name: "The Fool", img: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg", 
        meanings: { 
          general: "New beginnings, optimism, trust in life.", 
          love: "A new romance or fresh start. Be spontaneous.", 
          career: "Take a leap of faith. A new job or creative project awaits." 
        } 
      },
      { name: "The Magician", img: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", 
        meanings: { 
          general: "Action, power, manifestation.", 
          love: "You have the power to attract what you desire.", 
          career: "Use your skills and willpower to get things done." 
        } 
      },
      { name: "The High Priestess", img: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", 
        meanings: { 
          general: "Intuition, sacred knowledge, subconscious mind.", 
          love: "Trust your gut feelings about this relationship.", 
          career: "Listen to your intuition; not everything is as it seems." 
        } 
      },
      { name: "The Empress", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", 
        meanings: { 
          general: "Femininity, beauty, nature, nurturing.", 
          love: "A time of passion, connection, and fertility.", 
          career: "Creativity is flowing. Nurture your ideas." 
        } 
      },
      { name: "The Emperor", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", 
        meanings: { 
          general: "Authority, structure, solid foundation.", 
          love: "Stability and commitment. A partner who takes charge.", 
          career: "Take a disciplined approach. Leadership is required." 
        } 
      },
      { name: "The Hierophant", img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", 
        meanings: { 
          general: "Spiritual wisdom, religious beliefs, conformity.", 
          love: "Traditional commitment, marriage, or shared values.", 
          career: "Stick to the rules and established methods for now." 
        } 
      },
      { name: "The Lovers", img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg", 
        meanings: { 
          general: "Love, harmony, relationships, choices.", 
          love: "Deep connection, soulmates, or a significant choice in love.", 
          career: "Partnerships and alignment of values in business." 
        } 
      },
      { name: "The Chariot", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", 
        meanings: { 
          general: "Control, willpower, victory, assertion.", 
          love: "Overcoming obstacles to be together. Determination.", 
          career: "Focus and drive will lead to victory. Stay the course." 
        } 
      },
      { name: "Strength", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg", 
        meanings: { 
          general: "Courage, persuasion, influence, compassion.", 
          love: "Patience and understanding will strengthen the bond.", 
          career: "Quiet confidence and resilience will win the day." 
        } 
      },
      { name: "The Hermit", img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg", 
        meanings: { 
          general: "Soul-searching, introspection, being alone.", 
          love: "A time to reflect on what you truly want alone.", 
          career: "Step back and analyze your path. Seek mentorship." 
        } 
      },
      { name: "Wheel of Fortune", img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg", 
        meanings: { 
          general: "Good luck, karma, life cycles, destiny.", 
          love: "Fated meetings or changes in relationship status.", 
          career: "A turning point. Luck is on your side." 
        } 
      },
      { name: "Justice", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg", 
        meanings: { 
          general: "Justice, fairness, truth, cause and effect.", 
          love: "Treating each other with fairness. Truth coming out.", 
          career: "Contracts, legal matters, and fair dealings." 
        } 
      },
      { name: "The Hanged Man", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg", 
        meanings: { 
          general: "Pause, surrender, letting go, new perspectives.", 
          love: "Letting go of control. Seeing things differently.", 
          career: "A period of waiting. Use this time to rethink strategies." 
        } 
      },
      { name: "Death", img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg", 
        meanings: { 
          general: "Endings, change, transformation, transition.", 
          love: "The end of a phase or relationship. Deep transformation.", 
          career: "A job change or the end of a project. Renewal." 
        } 
      },
      { name: "Temperance", img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg", 
        meanings: { 
          general: "Balance, moderation, patience, purpose.", 
          love: "Harmony and patience. Finding common ground.", 
          career: "Stay balanced and avoid extremes. Cooperation." 
        } 
      },
      { name: "The Devil", img: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg", 
        meanings: { 
          general: "Shadow self, attachment, addiction, restriction.", 
          love: "Obsession or an unhealthy attachment. Lust.", 
          career: "Feeling trapped in a job. Beware of unethical choices." 
        } 
      },
      { name: "The Tower", img: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg", 
        meanings: { 
          general: "Sudden change, upheaval, chaos, revelation.", 
          love: "A sudden breakup or realization. Shaking things up.", 
          career: "Unexpected job loss or conflict. Rebuilding required." 
        } 
      },
      { name: "The Star", img: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg", 
        meanings: { 
          general: "Hope, faith, purpose, renewal, spirituality.", 
          love: "Healing past wounds. Optimism for the future.", 
          career: "Inspiration and new opportunities. Follow your dreams." 
        } 
      },
      { name: "The Moon", img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg", 
        meanings: { 
          general: "Illusion, fear, anxiety, subconscious, intuition.", 
          love: "Uncertainty or deception. Secrets may be revealed.", 
          career: "Confusion about your path. Trust your intuition." 
        } 
      },
      { name: "The Sun", img: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg", 
        meanings: { 
          general: "Positivity, fun, warmth, success, vitality.", 
          love: "Joy, happiness, and engagement. Pure bliss.", 
          career: "Success, recognition, and abundance." 
        } 
      },
      { name: "Judgement", img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg", 
        meanings: { 
          general: "Judgement, rebirth, inner calling, absolution.", 
          love: "A relationship renewal or making a clear decision.", 
          career: "A calling to a new vocation. Evaluation of success." 
        } 
      },
      { name: "The World", img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg", 
        meanings: { 
          general: "Completion, integration, accomplishment, travel.", 
          love: "Fulfillment and happiness. A cycle is complete.", 
          career: "Reaching a major goal. Global opportunities." 
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
        
        .slot { 
          width: 180px; height: 300px; position: relative; transform-style: preserve-3d; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: pointer; 
        }
        .slot.flipped { transform: rotateY(180deg); }
        
        .card-face {
          position: absolute; inset: 0; backface-visibility: hidden; border-radius: 1rem; box-shadow: 0 10px 30px -5px rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
        }
        .card-back { 
          background: linear-gradient(135deg, #2a2a3e, #1a1a2e); 
          border: 2px solid rgba(255,255,255,0.1);
          background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 10px);
        }
        .card-back::after { content: '🔮'; font-size: 3rem; opacity: 0.5; }
        
        .card-front { 
          transform: rotateY(180deg); background: #000; overflow: hidden; 
        }
        .card-front img { width: 100%; height: 100%; object-fit: cover; }
        
        .label { font-size: 0.9rem; font-weight: 800; color: var(--primary-color); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
        .card-info { margin-top: 1rem; opacity: 0; transition: 0.5s; transform: translateY(10px); }
        .card-info.show { opacity: 1; transform: translateY(0); }
        .card-name { font-weight: 800; font-size: 1.1rem; color: var(--text-color); }
        .card-meaning { font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.4; }
        
        #resetBtn { margin-top: 3rem; background: var(--primary-color); color: #12121a; border: none; padding: 1em 2em; border-radius: 1rem; font-weight: 700; cursor: pointer; display: none; }
        #resetBtn:hover { transform: translateY(-2px); }
      </style>
      
      <h2>Tarot Reading</h2>
      
      <div class="controls">
        <label for="concern">Focus on:</label>
        <select id="concern">
          <option value="general">General Guidance</option>
          <option value="love">Love & Relationships</option>
          <option value="career">Career & Work</option>
        </select>
      </div>

      <div class="spread">
        <div class="card-container">
          <div class="label">Past / Foundation</div>
          <div class="slot" id="slot0">
            <div class="card-face card-back"></div>
            <div class="card-face card-front"><img src="" alt=""></div>
          </div>
          <div class="card-info">
            <div class="card-name"></div>
            <div class="card-meaning"></div>
          </div>
        </div>
        
        <div class="card-container">
          <div class="label">Present / Challenge</div>
          <div class="slot" id="slot1">
            <div class="card-face card-back"></div>
            <div class="card-face card-front"><img src="" alt=""></div>
          </div>
          <div class="card-info">
            <div class="card-name"></div>
            <div class="card-meaning"></div>
          </div>
        </div>
        
        <div class="card-container">
          <div class="label">Future / Advice</div>
          <div class="slot" id="slot2">
            <div class="card-face card-back"></div>
            <div class="card-face card-front"><img src="" alt=""></div>
          </div>
          <div class="card-info">
            <div class="card-name"></div>
            <div class="card-meaning"></div>
          </div>
        </div>
      </div>
      
      <button id="resetBtn">New Reading</button>
    `;

    this.concernSelect = shadow.querySelector('#concern');
    this.resetBtn = shadow.querySelector('#resetBtn');
    this.slots = [shadow.querySelector('#slot0'), shadow.querySelector('#slot1'), shadow.querySelector('#slot2')];
    this.flippedCount = 0;

    this.slots.forEach(slot => {
      slot.addEventListener('click', () => this.flipCard(slot));
    });

    this.resetBtn.addEventListener('click', () => {
      this.flippedCount = 0;
      this.resetBtn.style.display = 'none';
      this.slots.forEach(slot => {
        slot.classList.remove('flipped');
        slot.parentElement.querySelector('.card-info').classList.remove('show');
      });
    });
  }

  flipCard(slot) {
    if (slot.classList.contains('flipped')) return;
    
    // Pick random card
    const card = this.deck[Math.floor(Math.random() * this.deck.length)];
    const concern = this.concernSelect.value;
    const meaning = card.meanings[concern] || card.meanings.general;
    
    // Update DOM
    const img = slot.querySelector('img');
    img.src = card.img;
    img.alt = card.name;
    
    const container = slot.parentElement;
    const nameEl = container.querySelector('.card-name');
    const meaningEl = container.querySelector('.card-meaning');
    
    nameEl.textContent = card.name;
    meaningEl.textContent = meaning;
    
    slot.classList.add('flipped');
    
    setTimeout(() => {
      container.querySelector('.card-info').classList.add('show');
    }, 600);

    this.flippedCount++;
    if (this.flippedCount === 3) {
      setTimeout(() => this.resetBtn.style.display = 'inline-block', 1000);
    }
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
      <h2>Connect</h2>
      <form action="https://formspree.io/f/mpqjlvro" method="POST">
        <div class="field"><label>Email</label><input type="email" name="email" required placeholder="your@email.com"></div>
        <div class="field"><label>Message</label><textarea name="message" rows="4" required placeholder="What's on your mind?"></textarea></div>
        <button type="submit">Send Message</button>
      </form>
    `;
  }
}
customElements.define('contact-form', ContactForm);
