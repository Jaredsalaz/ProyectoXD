  function redirigir() {
    window.location.href = 'NuevoRegistroP2.html'; 
  }
  
  
  //Mayusculas en el input del RFC y CURP 
  // Transforma el texto ingresado a mayúsculas
  // Selecciona los campos de entrada de RFC y CURP
  var inputRFC = document.getElementById('inputRFC');
  var inputCURP = document.getElementById('inputCURP');

  // Escucha el evento 'input' en los campos de entrada
  inputRFC.addEventListener('input', convertirAMayusculas);
  inputCURP.addEventListener('input', convertirAMayusculas);

  function convertirAMayusculas() {
      // Convierte el valor del campo de entrada a mayúsculas
      this.value = this.value.toUpperCase();
  }
  
  //Input icono de X 
  // funcion para limpiar el input 
  function clearInput(inputId) {
    var input = document.getElementById(inputId);
    input.value = '';
    input.nextElementSibling.style.display = 'none'; // Oculta el icono después de borrar el texto
  }
  
  // Muestra u oculta el icono según si hay texto en el input
  function toggleIcon(inputId) {
    var input = document.getElementById(inputId);
    var icon = input.nextElementSibling;
    icon.style.display = input.value ? 'inline' : 'none';
  }
  
  // Añade event listeners a los inputs para mostrar u ocultar el icono
  document.getElementById('input1').addEventListener('input', function() { toggleIcon('input1'); });
  document.getElementById('input2').addEventListener('input', function() { toggleIcon('input2'); });
  
  
  //Modal alert
  function showAlert() {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
    alertDiv.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      <p>La busqueda no arrojo ningun resultado, <br>Por favor revise su criterio de busqueda</p>
      <button onclick="closeAlert()">Aceptar</button>
    `;
    document.body.appendChild(alertDiv);
  }
  
  function closeAlert() {
    var alertDiv = document.querySelector('.alert');
    document.body.removeChild(alertDiv);
    showSecondAlert();
  }
  
  function showSecondAlert() {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
    alertDiv.innerHTML = `
      <i class="fas fa-question-circle icon"></i> <!-- Agrega la clase 'icon' -->
      <p>No se encontro el RFC solicitado, <br>¿Desea adherirlo al fondo?</p>
      <div class="button-container">
        <button onclick="closeSecondAlert()">Cancelar</button>
        <button onclick="closeSecondAlert()">Aceptar</button>
      </div>
    `;
    document.body.appendChild(alertDiv);
  }
  
  function closeSecondAlert() {
    var alertDiv = document.querySelector('.alert');
    document.body.removeChild(alertDiv);
  }
  
  
  // Campana de notificación y menu de notificaciones
  window.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.querySelector('#notification-modal');
    var campana = document.querySelector('.campana');
  
    campana.addEventListener('click', function(event) {
      // Muestra el punto de notificación cuando hay una notificación
      document.querySelector('.notification-dot').style.display = 'block';
  
      // Muestra el modal de notificación cuando se hace clic en la campana
      modal.style.display = 'block';
  
      // Evita que el evento de clic se propague a la ventana
      event.stopPropagation();
    });
  
    // Cierra el modal cuando se hace clic en el botón de cierre
    document.querySelector('.modal .close').addEventListener('click', function(event) {
      event.stopPropagation();
      modal.style.display = 'none';
    });
  
    // Cierra el modal cuando se hace clic fuera de él
    window.addEventListener('click', function(event) {
      if (modal.style.display == 'block') {
        modal.style.display = 'none';
      }
    });
  });
  
  
  // add hovered class to selected list item
  let list = document.querySelectorAll(".navigation li");
  
  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("hovered");
    });
    this.classList.add("hovered");
  }
  
  list.forEach((item) => item.addEventListener("mouseover", activeLink));
  
  // Menu Toggle
  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  
  toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };
  
  // Selecciona todos los campos de entrada
var inputs = document.querySelectorAll('.input input, .input select');

// Selecciona la barra de carga
var lineaCarga = document.querySelector('.linea-carga');

// Escucha el evento 'input' en cada campo de entrada
inputs.forEach(function(input) {
    input.addEventListener('input', actualizarLineaCarga);
});

function actualizarLineaCarga() {
    var camposCompletados = 0;
    var camposTotales = inputs.length; // Número total de campos de entrada

    // Si el campo de entrada tiene un valor, incrementa camposCompletados
    inputs.forEach(function(input) {
        if (input.value !== '') {
            camposCompletados++;
        }
    });

    var porcentajeCompletado = (camposCompletados / camposTotales) * 100;

    lineaCarga.style.width = porcentajeCompletado + '%';
}

