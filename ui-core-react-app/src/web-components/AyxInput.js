import React from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Input } from '@ayx/ui-core';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
let jss;

class AyxInput extends HTMLElement {
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
      if (attrs[attr].name === 'inputProps')
      {
        debugger
      } else {
        attrList[attrs[attr].name] = attrs[attr].value
      }
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

    const attrs = this.convertAttributes(this.attributes);
    ReactDOM.render(
      <StylesProvider jss={jss}>
        <AyxAppWrapper>
          <Input {...attrs}>
            <slot></slot>
          </Input> 
        </AyxAppWrapper>
      </StylesProvider>,
      this.mountPoint
    );
  }
}

window.customElements.define('ayx-input', AyxInput);
