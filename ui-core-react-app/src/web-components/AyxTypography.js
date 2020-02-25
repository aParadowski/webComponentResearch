import React from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Typography } from '@ayx/ui-core';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';

let jss;
class AyxTypography extends HTMLElement {
  mountPoint;

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  static get observedAttributes() {
    return ['value'];
  }

  // we dont need to check the attrName of what was updated since we told the browser
  // we only care about count in the obeservedAttributes static property
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.currentCount = newVal;
    this.update();
  }

  connectedCallback() {
    this.currentCount = this.getAttribute('value') || 0;
    this.update();
  }

  convertAttributes(attrs) {
    const attrList = {};
    Object.keys(attrs).forEach(attr => {
      attrList[attrs[attr].name] = attrs[attr].value
    });
    return attrList;
  }

  // refreshed the elements shadowDOM
  update() {
    if (!this.mountPoint) {
      debugger
      this.mountPoint = document.createElement('span');
      jss = create({
        ...jssPreset(),
        insertionPoint: this.mountPoint
    });
      this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
    }
    const attrs = this.convertAttributes(this.attributes);
    // console.log("in my typo update: ", {attrs})
    ReactDOM.render(
      <StylesProvider jss={jss}>
        <AyxAppWrapper>
          <Typography  {...attrs}>
            <slot></slot>
          </Typography>
        </AyxAppWrapper>
      </StylesProvider>,
      this.mountPoint
    );
  }
}

window.customElements.define('ayx-typography', AyxTypography);
