
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
    

    
  
  