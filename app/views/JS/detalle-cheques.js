
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
      
  
    
    