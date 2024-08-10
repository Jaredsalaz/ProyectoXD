
  
//redirecionar a la pagina de cambio de contraseña
document.addEventListener('DOMContentLoaded', function() {
  const option1Label = document.querySelector('label[for="option-1"]');

  option1Label.addEventListener('click', function() {
    window.location.href = 'cambio-contraseña.html'; 
  });
});

//redirecionar a la pagina de cambio de etapas
document.addEventListener('DOMContentLoaded', function() {
  const option1Label = document.querySelector('label[for="adm-option-1"]');

  option1Label.addEventListener('click', function() {
    window.location.href = 'etapas.html'; 
  });
});
//redirecionar a la pagina de act-cheques
document.addEventListener('DOMContentLoaded', function() {
  const option1Label = document.querySelector('label[for="adm-option-2"]');

  option1Label.addEventListener('click', function() {
    window.location.href = 'act-cheques.html'; 
  });
});
//redireje a liquidar
document.addEventListener('DOMContentLoaded', function() {
  const option1Label = document.querySelector('label[for="adm-option-3"]');

  option1Label.addEventListener('click', function() {
    window.location.href = 'act-liquido.html'; 
  });
});
//PDF
document.addEventListener('DOMContentLoaded', function() {
  const option1Label = document.querySelector('label[for="adm-option-4"]');

  option1Label.addEventListener('click', function() {
    window.location.href = 'PDF-cheques.html'; 
  });
});

//cheuqes difunciones
document.addEventListener('DOMContentLoaded', function() {
  const option1Label = document.querySelector('label[for="adm-option-5"]');

  option1Label.addEventListener('click', function() {
    window.location.href = 'cheques-difunciones.html'; 
  });
});

//referencias prestamos
document.addEventListener('DOMContentLoaded', function() {
  const option1Label = document.querySelector('label[for="adm-option-6"]');

  option1Label.addEventListener('click', function() {
    window.location.href = 'referencias-prestamos.html'; 
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
  //Modal alert
  function showAlert() {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
    alertDiv.innerHTML = `
      <i class="fas fa-check-circle icon"></i>
      <p>Los cambios se han guardado con éxito</p>
      <div class="button-container">
        <button onclick="redirigir()">Aceptar</button>
      </div>
    `;
    document.body.appendChild(alertDiv);
  }

  function closeSecondAlert() {
    var alertDiv = document.querySelector('.alert');
    document.body.removeChild(alertDiv);
  }

  function redirigir() {
    window.location.href = 'index.html';
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
  


