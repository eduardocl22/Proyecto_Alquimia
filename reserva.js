// Obtener el valor guardado en el localStorage
const selectedValue = localStorage.getItem('selectedValue');
var datosGuardadosJSON = localStorage.getItem('datosGuardados');
var datosGuardados = JSON.parse(datosGuardadosJSON);

console.log('Valor guardado:', selectedValue);


if  (datosGuardados.fecha != null)
{
    
    var datosSeleccionados = {
        dia: datosGuardados.dia,
        fecha: datosGuardados.fecha,
        año: datosGuardados.año,
        cartel: {
            img: datosGuardados.cartel.img,
            precio: datosGuardados.cartel.precio,
            titulo: datosGuardados.cartel.titulo
        }
    };
}
else{

    var datosSeleccionados = {
        dia: "Lunes",
        fecha: "Marzo 12",
        año: "2023",
        cartel: {
            img: datosGuardados.cartel.img,
            precio: datosGuardados.cartel.precio,
            titulo: datosGuardados.cartel.titulo
        }
    };


}

       
        function openForm() {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("form-container").style.display = "block";
        }

        function closeForm() {
            window.history.back();
        }

        function openConfirmation() {
            var nombre = document.getElementById("nombre").value;
            var email = document.getElementById("email").value;
            var comentarios = document.getElementById("comentarios").value;

            

            document.getElementById("confirm-nombre").textContent = nombre;
            document.getElementById("confirm-email").textContent = email;
            document.getElementById("confirm-comentarios").textContent = comentarios;
            document.getElementById("confirm-numero").textContent = selectedValue;
            document.getElementById("confirm-fecha").textContent = `${datosSeleccionados.dia}, ${datosSeleccionados.fecha}, ${datosSeleccionados.año}`;
            document.getElementById("confirm-titulo").textContent = datosSeleccionados.cartel.titulo;
            document.getElementById("confirm-correo").textContent = email;
            document.getElementById("confirm-precio").textContent = datosSeleccionados.cartel.precio;

            document.getElementById("form-container").style.display = "none";
            document.getElementById("confirmation-container").style.display = "block";
        }

        function sendReservation() {
            // Aquí puedes agregar la lógica para enviar los datos del formulario a través de una petición AJAX o cualquier otro método que desees utilizar.
            alert("¡Reserva enviada exitosamente!");
            window.history.back();
        }

        function validarFormulario() {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
          
            if (nombre === '' || email === '') {
              alert('Por favor, complete todos los campos obligatorios.');
            } else {
              openConfirmation();
            }
          }
          