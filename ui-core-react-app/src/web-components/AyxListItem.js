import React from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, ListItem } from '@ayx/ui-core';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
let jss;

class AyxListItem extends HTMLElement {
  mountPoint;

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  static get observedAttributes() {
    // return ['onClick'];
  }

  // we dont need to check the attrName of what was updated since we told the browser
  // we only care about count in the obeservedAttributes static property
  attributeChangedCallback(attrName, oldVal, newVal) {
    // this.onClick = newVal;
    // this.update();
  }

  connectedCallback() {
    // this.onClick = this.getAttribute('onClick') || undefined;
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

    // console.log({this: this})
    // console.log({attributes: this.attributes})
    // console.log({children: this.children})
    
    const attrs = this.convertAttributes(this.attributes);
    ReactDOM.render(
      <StylesProvider jss={jss}>
        <AyxAppWrapper>
          <ListItem {...attrs}>
            <div dangerouslySetInnerHTML={{__html: this.innerHTML}} />
          </ListItem> 
        </AyxAppWrapper>
      </StylesProvider>,
      this.mountPoint
    );
  }
}

window.customElements.define('ayx-list-item', AyxListItem);
