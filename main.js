class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: center;
          padding: 2rem;
          background: var(--surface-color);
          border-radius: 1rem;
          box-shadow: 
            0 10px 30px -15px oklch(from var(--primary-color) calc(l - 0.1) c h),
            0 0 0 1px oklch(from var(--primary-color) calc(l + 0.1) c h / 25%);
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-color);
          letter-spacing: -1px;
        }
        .numbers {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .number {
          display: grid;
          place-content: center;
          width: 3.5rem;
          height: 3.5rem;
          font-size: 1.5rem;
          font-weight: bold;
          border-radius: 50%;
          background: oklch(from var(--primary-color) calc(l - 0.2) c h);
          color: var(--text-color);
          box-shadow: inset 0 2px 5px oklch(0 0 0 / 25%);
          transition: all 0.3s ease;
          transform: scale(0);
        }
        .number.visible {
            transform: scale(1);
        }

        button {
          font-size: 1.2rem;
          font-weight: 500;
          padding: 0.75em 1.5em;
          border: none;
          border-radius: 0.5rem;
          background: var(--primary-color);
          color: oklch(20% 0.05 var(--base-hue));
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 
            0 0 0 0 oklch(from var(--primary-color) l c h / 50%),
            0 4px 10px -4px oklch(0 0 0 / 40%);
        }
        button:hover, button:focus-visible {
          box-shadow: 
            0 0 0 4px oklch(from var(--primary-color) l c h / 50%),
            0 4px 10px -4px oklch(0 0 0 / 40%);
          transform: translateY(-2px);
        }
        button:active {
            transform: translateY(0);
            box-shadow: 
            0 0 0 0 oklch(from var(--primary-color) l c h / 50%),
            0 2px 5px -2px oklch(0 0 0 / 40%);
        }

        .controls {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .secondary-button {
          background: var(--surface-color);
          color: var(--text-color);
          border: 1px solid oklch(from var(--text-color) l c h / 10%);
        }

      </style>
      <h1>Lotto Number Generator</h1>
      <div class="numbers">
        ${Array(6).fill('<div class="number">?</div>').join('')}
      </div>
      <div class="controls">
        <button id="generateBtn">Generate Numbers</button>
        <button id="themeToggle" class="secondary-button">Toggle Theme</button>
      </div>
    `;

    this.button = shadow.querySelector('#generateBtn');
    this.themeToggle = shadow.querySelector('#themeToggle');
    this.numberElements = shadow.querySelectorAll('.number');

    this.button.addEventListener('click', this.generateNumbers.bind(this));
    this.themeToggle.addEventListener('click', this.toggleTheme.bind(this));

    // Initialize theme from storage
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
            el.style.setProperty('--hue', (sortedNumbers[i] * 10) % 360);
            el.style.background = `oklch(70% 0.2 var(--hue))`;
            el.classList.add('visible');
        }, i * 100);
    });

  }
}

customElements.define('lotto-generator', LottoGenerator);