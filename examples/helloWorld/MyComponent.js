class MyComponent extends HTMLElement {
  // constructor() {
    // super();
    // console.log('in the constructor')
    // // Attach a shadow root to the element.
    // let shadowRoot = this.attachShadow({mode: 'open'});
    // shadowRoot.innerHTML = `<p>hello world</p>`;
  // }
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>`;
  }
}
customElements.define('my-component', MyComponent);