class ImperativeCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.currentCount = 0;
    this.update();
  }

  update() {
    this.shadow.innerHTML = `<div><b> Count: </b> ${this.currentCount} </div>`;
  }

  increment() {
    this.currentCount++;
    this.update();
  }

  decrement() {
    this.currentCount--;
    this.update();
  }
}

window.customElements.define('i-counter', ImperativeCounter);
