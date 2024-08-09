//redirecionar a la pagina de cambio de contraseña
document.addEventListener('DOMContentLoaded', function() {
  const option1Label = document.querySelector('label[for="option-1"]');

  option1Label.addEventListener('click', function() {
    window.location.href = 'cambio-contraseña.html'; 
  });
});


//dropdown
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const icons = document.querySelectorAll('.usuario-icon, .adm-creditos-icon, .reportes-icon, .prestamos-icon, .administracion-icon, .mobile-icon');

  dropdownToggles.forEach((dropdownToggle, index) => {
    dropdownToggle.addEventListener('click', function(event) {
      event.preventDefault();
      icons[index].classList.toggle('show-dropdown');
    });
  });
});

//Mayusculas en el input del RFC
// Transforma el texto ingresado a mayúsculas
function toUpperCase(inputId) {
  var input = document.getElementById(inputId);
  input.value = input.value.toUpperCase();
}
// Añade un event listener al input para transformar el texto a mayúsculas
document.getElementById('input2').addEventListener('input', function() { toUpperCase('input2'); });


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
      <button onclick="redirigir()">Aceptar</button>
    </div>
  `;
  document.body.appendChild(alertDiv);
}

function redirigir() {
    window.location.href = 'NuevoRegistroP.html'; 
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


// Selecciona los campos de entrada
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');

// Selecciona los iconos de "x"
var icon1 = document.querySelector('#input1 ~ .fa-regular.fa-circle-xmark');
var icon2 = document.querySelector('#input2 ~ .fa-regular.fa-circle-xmark');

// Escucha el evento 'input' en cada campo de entrada
input1.addEventListener('input', actualizarLineaCarga);
input2.addEventListener('input', actualizarLineaCarga);

// Escucha el evento 'click' en cada icono
icon1.addEventListener('click', actualizarLineaCarga);
icon2.addEventListener('click', actualizarLineaCarga);

function actualizarLineaCarga() {
    var camposCompletados = 0;
    var camposTotales = 2; // Número total de campos de entrada

    // Si el campo de entrada tiene un valor, incrementa camposCompletados
    if (input1.value !== '') {
        camposCompletados++;
    }
    if (input2.value !== '') {
        camposCompletados++;
    }

    var porcentajeCompletado = (camposCompletados / camposTotales) * 100;

    var lineaCarga = document.querySelector('.linea-carga');
    lineaCarga.style.width = porcentajeCompletado + '%';
}