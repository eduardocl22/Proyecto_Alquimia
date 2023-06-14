
class DiaComp extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const dia = this.getAttribute('dia');
    const fecha = this.getAttribute('fecha');
    const año = this.getAttribute('año');

    
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        text-align: center;
        color: black;
      }

      .container {
        background-color: #D9D9D9;
        width: 150px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
      }

      .container:hover {
        background-color: gray;
      }

      .dia {
        font-size: 24px;
        font-weight: bold;
      }

      .fecha {
        font-size: 18px;
      }

      .año {
        font-size: 16px;
      }
    `;
    shadow.appendChild(style);

    const container = document.createElement('div');
    container.classList.add('container');

    const diaElement = document.createElement('div');
    diaElement.classList.add('dia');
    diaElement.textContent = dia || '';
    container.appendChild(diaElement);

    const fechaElement = document.createElement('div');
    fechaElement.classList.add('fecha');
    fechaElement.textContent = fecha || '';
    container.appendChild(fechaElement);

    const añoElement = document.createElement('div');
    añoElement.classList.add('año');
    añoElement.textContent = año || '';
    container.appendChild(añoElement);

    shadow.appendChild(container);
  }

  static get observedAttributes() {
    return ['dia', 'fecha', 'año'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const dia = this.getAttribute('dia');
    const fecha = this.getAttribute('fecha');
    const año = this.getAttribute('año');

    const diaElement = this.shadowRoot.querySelector('.dia');
    const fechaElement = this.shadowRoot.querySelector('.fecha');
    const añoElement = this.shadowRoot.querySelector('.año');

    diaElement.textContent = dia || '';
    fechaElement.textContent = fecha || '';
    añoElement.textContent = año || '';
  }
}


customElements.define('dia-comp', DiaComp);