import React from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Tooltip } from '@ayx/ui-core';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
let jss;

class AyxTooltip extends HTMLElement {
  mountPoint;

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  static get observedAttributes() {}

  attributeChangedCallback(attrName, oldVal, newVal) { }

  connectedCallback() {
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
      this.mountPoint = document.createElement('div');
      jss = create({
        ...jssPreset(),
        insertionPoint: this.mountPoint
    });
      this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
    }
    console.log('wat')
    const attrs = this.convertAttributes(this.attributes);
    ReactDOM.render(
      <StylesProvider jss={jss}>
        <AyxAppWrapper>
          <Tooltip {...attrs} open arrow placement="top">
            <slot></slot>
          </Tooltip> 
        </AyxAppWrapper>
      </StylesProvider>,
      this.mountPoint
    );
  }
}

window.customElements.define('ayx-tooltip', AyxTooltip);
