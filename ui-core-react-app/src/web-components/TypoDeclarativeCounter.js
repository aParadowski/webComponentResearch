import React from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Typography } from '@ayx/ui-core';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';

let jss;
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
      jss = create({
        ...jssPreset(),
        insertionPoint: this.mountPoint
    });
      this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
    }

    ReactDOM.render(
      <StylesProvider jss={jss}>
        <Typography variant="subtitle2"> Count: {this.currentCount}</Typography>
        </StylesProvider>,
      this.mountPoint
    );
  }
}

window.customElements.define('td-counter', TypoDeclarativeCounter);
