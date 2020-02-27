import React from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, ExpansionPanel } from '@ayx/ui-core';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
let jss;

class AyxExpansionPanel extends HTMLElement {
  mountPoint;

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  static get observedAttributes() {
    return ['expanded'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if(attrName === 'expanded'){
      // const isExpanded = Boolean(newVal);
      // if (isExpanded) {
      //   this.expanded = isExpanded;
      //   this.setAttribute('expanded', '')
      // } else {
      //   // this.expanded = isExpanded;
      //   // this.removeAttribute('expanded')
      // }
    }
    this.expanded = Boolean(newVal);
    this.update();
  }

  connectedCallback() {
    this.update();
  }

  convertAttributes(attrs) {
    const attrList = {};
    Object.keys(attrs).forEach(attr => {
      attrList[attrs[attr].name] = Boolean(attrs[attr].value)
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
          <ExpansionPanel {...attrs}>
            <slot name="panelSummary"></slot>
            <slot name="panelDetails"></slot>
          </ExpansionPanel> 
        </AyxAppWrapper>
      </StylesProvider>,
      this.mountPoint
    );
  }
}

window.customElements.define('ayx-expansion-panel', AyxExpansionPanel);
