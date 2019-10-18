const host = document.getElementById('shadow-host');

host.attachShadow({ mode: 'open' });

host.shadowRoot.innerHTML = `
  <style>
    :host {
      /* --secondary: mediumaquamarine; */
    }
    strong {
      background: var(--primary, #121212);
      color: var(--secondary, #fff);
    }
  </style>
  <h2>Content inside the shadow root</h2>

  <p><strong>This is shadow DOM content</strong> <slot></slot>.</p>
`