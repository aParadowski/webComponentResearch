import React from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Button } from '@ayx/ui-core';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
let jss;

class AyxButton extends HTMLElement {
  mountPoint;

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  static get observedAttributes() {
    return ['children'];
  }

  // we dont need to check the attrName of what was updated since we told the browser
  // we only care about count in the obeservedAttributes static property
  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log('changed')
    // this.onClick = newVal;
    // this.update();
  }

  connectedCallback() {
    // this.onClick = this.getAttribute('onClick') || undefined;
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        //Detect <img> insertion
        console.log(mutation)
      })
    })

    observer.observe(this, { childList: true })
  
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
      this.attachShadow({ mode: 'open', delegatesFocus: true }).appendChild(this.mountPoint);
      
      this.addEventListener('focus', function(event) {
        console.info('element in shadow root focused', event.target);
        /* do stuff */
      });
    }

    // console.log({this: this})
    // console.log({attributes: this.attributes})
    // console.log({children: this.children})
    
    const attrs = this.convertAttributes(this.attributes);
    ReactDOM.render(
      <StylesProvider jss={jss}>
        <AyxAppWrapper>
          <Button {...attrs}>
            <slot></slot>
          </Button> 
        </AyxAppWrapper>
      </StylesProvider>,
      this.mountPoint
    );
  }
}

window.customElements.define('ayx-button', AyxButton);
export default AyxButton;