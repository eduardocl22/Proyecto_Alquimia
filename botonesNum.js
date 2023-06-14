class botonesNum extends HTMLElement {
  constructor() {
    super();

    // Crear un shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Crear los estilos internos (dentro del Shadow DOM)
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: inline-block;
      }

      button {
        width: 60px;
        height: 40px;
        background: none;
        border: 1px solid white;
        border-radius: 5px;
        margin-right: 15px;
        font-weight: bold;
        font-size: 20px;
        color: white;
        transition: background-color 0.3s ease;
      }

      button:hover{
        background-color: #e4e4e43f;
        color:  #b8b8b8;
      }
      button.selected {
        animation: blink-animation 0.1s forwards;
      }

      @keyframes blink-animation {
        0% {
          background-color: white;
          color: white;
        }
        50% {
          background-color: white;
          color: red;
        }
        100% {
          background-color: #7012123f;
          color: white;
        }
      }
    `;
    shadow.appendChild(style);

    for (let i = 1; i <= 8; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', () => {
        this.selectButton(button);
      });
      shadow.appendChild(button);
    }

    this.selectedButton = null;
  }

  selectButton(button) {
    if (this.selectedButton) {
      this.selectedButton.classList.remove('selected');
    }
    button.classList.add('selected');
    this.selectedButton = button;

    // Creamos un evento personalizado para comunicar el valor seleccionado
    const event = new CustomEvent('valueSelected', { detail: button.textContent });

    // Disparamos el evento en el componente
    this.dispatchEvent(event);
  }
}

customElements.define('x-botones', botonesNum);
