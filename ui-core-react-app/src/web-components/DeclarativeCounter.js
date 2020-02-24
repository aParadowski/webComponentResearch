class DeclarativeCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['count'];
  }

  // we dont need to check the attrName of what was updated since we told the browser
  // we only care about count in the obeservedAttributes static property
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.currentCount = newVal;
    this.update();
  }

  connectedCallback() {
    this.currentCount = this.getAttribute('count') || 0;
    this.update();
  }

  // refreshed the elements shadowDOM
  update() {
    this.shadow.innerHTML = `<div> <b> Count: </b> ${this.currentCount} </div>`;
  }
}

window.customElements.define('d-counter', DeclarativeCounter);
