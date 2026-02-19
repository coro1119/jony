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
          color: oklch(15% 0.05 var(--base-hue));
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
          border: 1px solid oklch(from var(--text-color) l c h / 10%);
          background: oklch(from var(--text-color) l c h / 3%);
          color: var(--text-color);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.2s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          background: oklch(from var(--text-color) l c h / 5%);
          box-shadow: 0 0 0 4px oklch(from var(--primary-color) l c h / 10%);
        }
        button {
          margin-top: 0.5rem;
          padding: 1rem;
          border-radius: 1rem;
          border: none;
          background: var(--primary-color);
          color: oklch(15% 0.05 var(--base-hue));
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px oklch(from var(--primary-color) l c h / 30%);
        }
        button:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 15px 30px -5px oklch(from var(--primary-color) l c h / 40%);
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