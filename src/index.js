'use strict';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'button',
      { onClick: () => this.props.onClick && this.props.onClick('Evento apartir do ReactJs') },
      this.props.text
    );
  }
}

class NewButton extends HTMLElement {
  mountPoint = document.createElement('span');
  componentAttributes = {};
  componentProps = {};

  connectedCallback() {
    this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
    retargetEvents(this);
    this.render();
  }

  render() {
    ReactDOM.render(
      React.createElement(Button, { ...this.componentAttributes, ...this.componentProps }, null),
      this.mountPoint
    );
  }

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.componentAttributes[name] = newVal;
    this.render();
  }

  getProperty(name) {
    return this.componentProps[name];
  }

  setProperty(name, value) {
    this.componentProps[name] = value;
    this.render();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }
}

customElements.define('new-button', NewButton);
