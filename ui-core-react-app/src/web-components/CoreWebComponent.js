import React from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Button } from '@ayx/ui-core';

class CoreWebIncrementer extends HTMLElement {
  mountPoint;

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  static get observedAttributes() {
    return ['onClick'];
  }

  // we dont need to check the attrName of what was updated since we told the browser
  // we only care about count in the obeservedAttributes static property
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.onClick = newVal;
    this.update();
  }

  connectedCallback() {
    this.onClick = this.getAttribute('onClick') || undefined;
    this.update();
  }

  // refreshed the elements shadowDOM
  update() {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
    }

    ReactDOM.render(
      <AyxAppWrapper>
        <Button color="primary" onClick={this.onClick} variant="contained">
          Increment
        </Button>
      </AyxAppWrapper>,
      this.mountPoint
    );
  }
}

window.customElements.define('core-inc-btn', CoreWebIncrementer);
