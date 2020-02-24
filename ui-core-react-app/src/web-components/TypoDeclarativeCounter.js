import React from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Typography } from '@ayx/ui-core';

class TypoDeclarativeCounter extends HTMLElement {
  mountPoint;

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
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
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
    }

    ReactDOM.render(
        <Typography variant="subtitle2"> Count: {this.currentCount}</Typography>,
      this.mountPoint
    );
  }
}

window.customElements.define('td-counter', TypoDeclarativeCounter);
