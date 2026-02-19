class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: center;
          padding: 2.5rem;
          background: var(--surface-color);
          border-radius: 2rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--surface-border);
          box-shadow: 
            0 20px 50px -15px oklch(from var(--primary-color) l c h / 30%),
            inset 0 1px 1px oklch(100% 0 0 / 15%);
        }
        h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: var(--text-color);
          letter-spacing: -0.05em;
          line-height: 1;
        }
        .numbers {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .number {
          display: grid;
          place-content: center;
          width: 3.75rem;
          height: 3.75rem;
          font-size: 1.5rem;
          font-weight: 700;
          border-radius: 1.25rem;
          background: oklch(from var(--text-color) l c h / 5%);
          color: var(--text-color);
          border: 1px solid oklch(from var(--text-color) l c h / 10%);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: translateY(20px) scale(0.8);
          opacity: 0;
        }
        .number.visible {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .controls {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        button {
          font-size: 1.1rem;
          font-weight: 600;
          padding: 1em 2em;
          border: none;
          border-radius: 1rem;
          background: var(--primary-color);
          color: #12121a;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px -5px oklch(from var(--primary-color) l c h / 40%);
        }

        button:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 15px 30px -5px oklch(from var(--primary-color) l c h / 50%);
        }

        button:active {
          transform: translateY(1px);
        }

        .secondary-button {
          background: oklch(from var(--text-color) l c h / 5%);
          color: var(--text-color);
          border: 1px solid oklch(from var(--text-color) l c h / 15%);
          box-shadow: none;
          backdrop-filter: blur(10px);
        }
        
        .secondary-button:hover {
          background: oklch(from var(--text-color) l c h / 10%);
          box-shadow: 0 10px 20px -5px oklch(0% 0 0 / 20%);
        }

      </style>
      <h1>Lucky Numbers</h1>
      <div class="numbers">
        ${Array(6).fill('<div class="number">?</div>').join('')}
      </div>
      <div class="controls">
        <button id="generateBtn">Generate</button>
        <button id="themeToggle" class="secondary-button">Theme</button>
      </div>
    `;

    this.button = shadow.querySelector('#generateBtn');
    this.themeToggle = shadow.querySelector('#themeToggle');
    this.numberElements = shadow.querySelectorAll('.number');

    this.button.addEventListener('click', this.generateNumbers.bind(this));
    this.themeToggle.addEventListener('click', this.toggleTheme.bind(this));

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    
    this.numberElements.forEach((el, i) => {
        el.classList.remove('visible');
        setTimeout(() => {
            el.textContent = sortedNumbers[i];
            const hue = (sortedNumbers[i] * 10) % 360;
            el.style.background = `oklch(75% 0.15 ${hue} / 15%)`;
            el.style.borderColor = `oklch(75% 0.15 ${hue} / 40%)`;
            el.style.color = `oklch(85% 0.1 ${hue})`;
            el.style.boxShadow = `0 10px 20px -5px oklch(75% 0.15 ${hue} / 30%)`;
            el.classList.add('visible');
        }, i * 100);
    });
  }
}

customElements.define('lotto-generator', LottoGenerator);

class DailyFortune extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const fortunes = [
      "Good things come to those who wait.",
      "A golden opportunity will arise today.",
      "Your creativity will lead to success.",
      "A pleasant surprise is in store for you.",
      "Focus on the present moment.",
      "New beginnings are just around the corner.",
      "Your kindness will be rewarded.",
      "Trust your intuition."
    ];

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 2.5rem;
          background: var(--surface-color);
          border-radius: 2rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--surface-border);
          text-align: center;
        }
        h2 { font-size: 2rem; margin-top: 0; color: var(--text-color); letter-spacing: -0.04em; }
        #fortuneText { 
          font-size: 1.25rem; 
          color: var(--text-muted); 
          margin: 1.5rem 0;
          min-height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        button {
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          border: none;
          background: var(--primary-color);
          color: #12121a;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }
        button:hover { transform: translateY(-2px); }
      </style>
      <h2>Daily Fortune</h2>
      <div id="fortuneText">Click to see your fortune...</div>
      <button id="getFortune">Get Fortune</button>
    `;

    this.btn = shadow.querySelector('#getFortune');
    this.text = shadow.querySelector('#fortuneText');

    this.btn.addEventListener('click', () => {
      const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      this.text.textContent = fortune;
      this.text.animate([
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 500, easing: 'ease-out' });
    });
  }
}
customElements.define('daily-fortune', DailyFortune);

class FortuneCookie extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const fortunes = [
      "Believe in yourself.",
      "Adventure is out there.",
      "Hard work pays off.",
      "Be the change you wish to see.",
      "Smile, it's free therapy.",
      "Success is a journey, not a destination."
    ];

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 2.5rem;
          background: var(--surface-color);
          border-radius: 2rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--surface-border);
          text-align: center;
        }
        .cookie-container {
          position: relative;
          height: 150px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cookie {
          font-size: 80px;
          transition: transform 0.5s ease;
        }
        .cookie.cracked { transform: scale(1.2) rotate(15deg); filter: grayscale(1); opacity: 0.5; }
        #fortune {
          margin-top: 1rem;
          font-weight: 600;
          color: var(--primary-color);
          font-style: italic;
          opacity: 0;
        }
        .show { opacity: 1 !important; animation: slideIn 0.5s forwards; }
        @keyframes slideIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      </style>
      <h2>Fortune Cookie</h2>
      <div class="cookie-container">
        <div class="cookie">🥠</div>
      </div>
      <div id="fortune"></div>
    `;

    const cookie = shadow.querySelector('.cookie');
    const text = shadow.querySelector('#fortune');

    cookie.addEventListener('click', () => {
      if (cookie.classList.contains('cracked')) return;
      cookie.classList.add('cracked');
      text.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
      text.classList.add('show');
    });
  }
}
customElements.define('fortune-cookie', FortuneCookie);

class TarotReader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const cards = [
      { name: "The Fool", meaning: "New beginnings, optimism, trust in life." },
      { name: "The Magician", meaning: "Action, power, manifestation." },
      { name: "The High Priestess", meaning: "Intuition, sacred knowledge, subconscious mind." },
      { name: "The Empress", meaning: "Femininity, beauty, nature, nurturing." },
      { name: "The Emperor", meaning: "Authority, establishment, structure." },
      { name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, conformity." },
      { name: "The Lovers", meaning: "Love, harmony, relationships." }
    ];

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 2.5rem;
          background: var(--surface-color);
          border-radius: 2rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--surface-border);
          text-align: center;
        }
        .card-slot {
          width: 120px;
          height: 180px;
          border: 2px dashed var(--surface-border);
          border-radius: 1rem;
          margin: 1.5rem auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          transition: all 0.5s ease;
          background: rgba(255,255,255,0.05);
        }
        .card-slot.flipped {
          background: var(--primary-color);
          color: #12121a;
          border: none;
          transform: rotateY(180deg);
        }
        #cardInfo { margin-top: 1rem; }
        #cardName { font-weight: 800; font-size: 1.25rem; }
        #cardMeaning { color: var(--text-muted); font-size: 0.95rem; margin-top: 0.5rem; }
      </style>
      <h2>Tarot Reading</h2>
      <div class="card-slot">🃏</div>
      <div id="cardInfo">
        <div id="cardName">Pick a card</div>
        <div id="cardMeaning">Focus on your question and click the card.</div>
      </div>
      <button id="resetBtn" style="margin-top: 1rem; display:none;">Reset</button>
    `;

    const slot = shadow.querySelector('.card-slot');
    const name = shadow.querySelector('#cardName');
    const meaning = shadow.querySelector('#cardMeaning');
    const reset = shadow.querySelector('#resetBtn');

    slot.addEventListener('click', () => {
      if (slot.classList.contains('flipped')) return;
      const card = cards[Math.floor(Math.random() * cards.length)];
      slot.classList.add('flipped');
      slot.textContent = "✨";
      name.textContent = card.name;
      meaning.textContent = card.meaning;
      reset.style.display = "inline-block";
    });

    reset.addEventListener('click', () => {
      slot.classList.remove('flipped');
      slot.textContent = "🃏";
      name.textContent = "Pick a card";
      meaning.textContent = "Focus on your question and click the card.";
      reset.style.display = "none";
    });
  }
}
customElements.define('tarot-reader', TarotReader);

class ContactForm extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 2.5rem;
          background: var(--surface-color);
          border-radius: 2rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--surface-border);
          box-shadow: 0 10px 30px -10px oklch(0% 0 0 / 20%);
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 800;
          margin-top: 0;
          margin-bottom: 1.5rem;
          color: var(--text-color);
          letter-spacing: -0.04em;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-left: 0.25rem;
        }
        input, textarea {
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: var(--text-color);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.2s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.1);
        }
        button {
          margin-top: 0.5rem;
          padding: 1rem;
          border-radius: 1rem;
          border: none;
          background: var(--primary-color);
          color: #12121a;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(167, 139, 250, 0.3);
        }
        button:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 15px 30px -5px rgba(167, 139, 250, 0.4);
        }
      </style>
      <h2>Get in touch</h2>
      <form action="https://formspree.io/f/mpqjlvro" method="POST">
        <div class="field">
          <label>Email Address</label>
          <input type="email" name="email" required placeholder="name@company.com">
        </div>
        <div class="field">
          <label>Message</label>
          <textarea name="message" rows="4" required placeholder="How can we help you?"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    `;
  }
}

customElements.define('contact-form', ContactForm);