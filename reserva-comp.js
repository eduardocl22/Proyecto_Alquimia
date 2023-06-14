class CartelComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      .container {
        width: 500px;
        height: 400px;
        border: 3px solid black;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
      }

      .image {
        width: 40%;
        height: 100%;
        float: left;
        position: relative;
        border-radius: 20px;
      }

      .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .details {
        width: 60%;
        height: 100%;
        float: left;
        position: relative;
      }

      .details .panel {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: white;
        color: black;
        font-size: 11.6px;
        padding-left: 10px;
      }

      .details .panel .reserve-button {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: red;
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        margin-right:5%;
      }
    `;

    this.shadowRoot.append(style);

    const container = document.createElement('div');
    container.classList.add('container');

    const image = document.createElement('div');
    image.classList.add('image');
    container.append(image);

    const img = document.createElement('img');
    img.src = this.getAttribute('img');
    img.alt = 'Portada';
    image.append(img);

    const details = document.createElement('div');
    details.classList.add('details');
    container.append(details);

    const panel = document.createElement('div');
    panel.classList.add('panel');
    details.append(panel);

    const h1 = document.createElement('h1');
    h1.textContent = 'MENÚ';
    panel.append(h1);

    const h2 = document.createElement('h2');
    h2.textContent = this.getAttribute('titulo');
    panel.append(h2);

    const p1 = document.createElement('p');
    p1.textContent = 'MENU CERRADO: 2 OPCIONES';
    panel.append(p1);

    const p2 = document.createElement('p');
    p2.textContent = 'ENTRANTES A ELECCION';
    panel.append(p2);

    const ul1 = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.textContent = 'VASDDDSH';
    ul1.append(li1);
    const li2 = document.createElement('li');
    li2.textContent = 'Quisggr Kasda';
    ul1.append(li2);
    panel.append(ul1);

    const p3 = document.createElement('p');
    p3.textContent = 'PRINCIPAL A ELECCION';
    panel.append(p3);

    const ul2 = document.createElement('ul');
    const li3 = document.createElement('li');
    li3.textContent = 'Blanque de ternera jsd gas gas';
    ul2.append(li3);
    const li4 = document.createElement('li');
    li4.textContent = 'Entrecorte de grillo a murallado';
    ul2.append(li4);
    panel.append(ul2);

    const p4 = document.createElement('p');
    p4.textContent = 'POSTRE A ELECCION';
    panel.append(p4);

    const ul3 = document.createElement('ul');
    const li5 = document.createElement('li');
    li5.textContent = 'Saint Cross';
    ul3.append(li5);
    const li6 = document.createElement('li');
    li6.textContent = 'Savarin aux ipsum';
    ul3.append(li6);
    panel.append(ul3);

    const p5 = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = 'Precio:';
    p5.append(strong);
    p5.append(` ${this.getAttribute('precio')}`);
    panel.append(p5);

    const p6 = document.createElement('p');
    p6.textContent = 'Cupos limitados';
    panel.append(p6);

    const p7 = document.createElement('p');
    p7.textContent = 'No incluye bebidas';
    panel.append(p7);

    const p8 = document.createElement('p');
    p8.textContent = 'Ingreso: 12:00-12:30';
    panel.append(p8);

    const button = document.createElement('button');
    button.classList.add('reserve-button');
    button.textContent = 'Reservar';
    button.addEventListener('click', () => {
      window.location.href = 'formulario.html';
    });
    panel.append(button);

    this.shadowRoot.append(container);
  }
}

customElements.define('cartel-component', CartelComponent);
