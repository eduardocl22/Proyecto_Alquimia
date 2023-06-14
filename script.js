const toggleButton = document.getElementById('abrir');
const navbar = document.querySelector('.navbar');
const Cerrar = document.getElementById('Cerrar');

Cerrar.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});



// carrusel
const carouselContainer = document.querySelector('.carousel-container');
const carouselCarteles = document.querySelector('.carousel-carteles');
const dias = carouselContainer.querySelectorAll('dia-comp');

// Objeto para almacenar los datos seleccionados
var datosSeleccionados = {};

dias.forEach((dia, index) => {
  dia.addEventListener('click', () => {
    // Capturar los atributos
    var diaSeleccionado = dia.getAttribute('dia');
    var fechaSeleccionada = dia.getAttribute('fecha');
    var añoSeleccionado = dia.getAttribute('año');
    
    // Guardar los datos en el objeto
    datosSeleccionados = {
      dia: diaSeleccionado,
      fecha: fechaSeleccionada,
      año: añoSeleccionado
    };
    
    // Mostrar los datos en la consola (puedes cambiar esta parte según tus necesidades)
    
    // Llamar a la función para mostrar el slide (puedes implementar esta función según tus necesidades)
    showSlide(index);
  });
});

var datosCartelSeleccionado = {};
function showSlide(slideIndex) {
  const carteles = carouselCarteles.querySelectorAll('cartel-component');
  const dias = carouselContainer.querySelectorAll('dia-comp');

  // Objeto para almacenar los datos del cartel seleccionado


  // Oculta todos los carteles y desactiva todos los días
  carteles.forEach((cartel) => {
    cartel.style.display = 'none';
    cartel.style.animation = ''; // Restablece cualquier animación anterior
  });

  dias.forEach((dia) => {
    dia.classList.remove('active');
  });

  // Muestra el cartel seleccionado y activa el día correspondiente
  const selectedCartel = carteles[slideIndex];
  selectedCartel.style.display = 'block';
  selectedCartel.style.animation = 'fade-in 0.5s ease'; // Aplica la animación de entrada
  selectedCartel.addEventListener('animationend', () => {
    // Elimina la animación después de completarse
    selectedCartel.style.animation = '';
  });

  const selectedDia = dias[slideIndex];
  selectedDia.classList.add('active');

  // Capturar los atributos del cartel seleccionado
  var imgSeleccionada = selectedCartel.getAttribute('img');
  var tituloSeleccionado = selectedCartel.getAttribute('titulo');
  var precioSeleccionado = selectedCartel.getAttribute('precio');

  // Guardar los datos del cartel en el objeto
  datosCartelSeleccionado = {
    img: imgSeleccionada,
    titulo: tituloSeleccionado,
    precio: precioSeleccionado
  };

  // Mostrar los datos del cartel en la consola (puedes cambiar esta parte según tus necesidades)

  // Agregar los datos del cartel al objeto general
  datosSeleccionados.cartel = datosCartelSeleccionado;

  // Mostrar el objeto completo en la consola (puedes cambiar esta parte según tus necesidades)
  console.log(datosSeleccionados);
  localStorage.setItem('datosGuardados', JSON.stringify(datosSeleccionados));

}






// Mostrar el primer cartel al cargar la página
showSlide(0);



