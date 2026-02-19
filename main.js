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
    const cards = [
      { name: "The Fool", meaning: "Potential, new beginnings, spontaneity.", img: "🃏" },
      { name: "The Magician", meaning: "Manifestation, resourcefulness, power.", img: "🪄" },
      { name: "The High Priestess", meaning: "Intuition, sacred knowledge, subconscious.", img: "🌙" },
      { name: "The Empress", meaning: "Femininity, nature, abundance.", img: "🌿" },
      { name: "The Emperor", meaning: "Authority, structure, solid foundation.", img: "👑" },
      { name: "The Lovers", meaning: "Harmony, relationships, choices.", img: "❤️" },
      { name: "The Chariot", meaning: "Control, willpower, victory.", img: "⚔️" },
      { name: "Strength", meaning: "Courage, persuasion, influence.", img: "🦁" },
      { name: "The Hermit", meaning: "Soul-searching, introspection, guidance.", img: "🕯️" },
      { name: "Wheel of Fortune", meaning: "Luck, karma, life cycles.", img: "🎡" }
    ];
    shadow.innerHTML = `
      <style>
        :host { display: block; padding: 4rem 2rem; background: var(--surface-color); border-radius: 3rem; backdrop-filter: blur(40px); border: 1px solid var(--surface-border); text-align: center; width: 100%; max-width: 900px !important; }
        h2 { font-size: 2.5rem; color: var(--text-color); }
        .spread { display: flex; gap: 2rem; justify-content: center; margin-top: 3rem; flex-wrap: wrap; }
        .card-container { display: flex; flex-direction: column; gap: 1rem; align-items: center; width: 200px; }
        .slot { width: 150px; height: 230px; background: rgba(255,255,255,0.05); border: 2px dashed rgba(255,255,255,0.1); border-radius: 1rem; display: flex; align-items: center; justify-content: center; font-size: 4rem; cursor: pointer; transition: all 0.6s ease; color: var(--text-color); }
        .slot.flipped { background: var(--primary-color); color: #12121a; border: none; transform: rotateY(180deg); }
        .label { font-size: 0.9rem; font-weight: 800; color: var(--primary-color); text-transform: uppercase; letter-spacing: 0.1em; }
        .card-name { font-weight: 800; font-size: 1.1rem; margin-top: 0.5rem; opacity: 0; transition: 0.5s; color: var(--text-color); }
        .card-meaning { font-size: 0.85rem; color: var(--text-muted); opacity: 0; transition: 0.5s; }
        .show { opacity: 1 !important; }
        #instructions { margin-bottom: 2rem; color: var(--text-muted); }
      </style>
      <h2>Three-Card Spread</h2>
      <p id="instructions">Reflect on your path. Reveal the Past, Present, and Future.</p>
      <div class="spread">
        <div class="card-container">
          <div class="label">Past</div>
          <div class="slot" data-pos="0">🔮</div>
          <div class="card-name"></div>
          <div class="card-meaning"></div>
        </div>
        <div class="card-container">
          <div class="label">Present</div>
          <div class="slot" data-pos="1">🔮</div>
          <div class="card-name"></div>
          <div class="card-meaning"></div>
        </div>
        <div class="card-container">
          <div class="label">Future</div>
          <div class="slot" data-pos="2">🔮</div>
          <div class="card-name"></div>
          <div class="card-meaning"></div>
        </div>
      </div>
      <button id="resetBtn" style="margin-top: 3rem; background: transparent; color: var(--text-muted); border: 1px solid var(--surface-border); padding: 0.8em 1.5em; border-radius: 1rem; cursor: pointer; display: none;">New Reading</button>
    `;
    const slots = shadow.querySelectorAll('.slot');
    const resetBtn = shadow.querySelector('#resetBtn');
    let flippedCount = 0;
    slots.forEach(slot => {
      slot.addEventListener('click', () => {
        if (slot.classList.contains('flipped')) return;
        const card = cards[Math.floor(Math.random() * cards.length)];
        slot.classList.add('flipped');
        slot.textContent = card.img;
        const container = slot.parentElement;
        const nameEl = container.querySelector('.card-name');
        const meaningEl = container.querySelector('.card-meaning');
        nameEl.textContent = card.name;
        meaningEl.textContent = card.meaning;
        nameEl.classList.add('show');
        meaningEl.classList.add('show');
        flippedCount++;
        if (flippedCount === 3) resetBtn.style.display = 'inline-block';
      });
    });
    resetBtn.addEventListener('click', () => { location.reload(); });
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
