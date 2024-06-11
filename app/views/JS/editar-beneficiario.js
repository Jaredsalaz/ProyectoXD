
    document.getElementById('botonGuardar').addEventListener('click', function() {
      document.getElementById('nuevoModal').style.display = 'block';
    });

    // Añade el manejador de eventos al botón "Aceptar"
    document.getElementById('aceptarBtn').addEventListener('click', function() {
      // Cierra el modal actual
      document.getElementById('nuevoModal').style.display = 'none';
      // Llama a showAlert para abrir el nuevo modal
      showAlert();
    });

    //Modal alert
    function showAlert() {
      var alertDiv = document.createElement('div');
      alertDiv.className = 'alert';
      alertDiv.innerHTML = `
        <i class="fas fa-check-circle icon"></i>
        <p>Los cambios se han guardado con éxito</p>
        <div class="button-container">
          <button onclick="redirigir()">Aceptar</button> <!-- Cambiado para llamar a redirigir() -->
        </div>
      `;
      document.body.appendChild(alertDiv);
    }

    function closeSecondAlert() {
      var alertDiv = document.querySelector('.alert');
      if (alertDiv) {
        document.body.removeChild(alertDiv);
      }
    }

    function redirigir() {
      window.location.href = 'detalle-beneficiario.html'; 
    }
   

  function eliminarFila(elemento) {
    // Muestra el modal de confirmación
    var confirmModal = document.getElementById('confirmModal');
    confirmModal.style.display = 'block';

    // Encuentra el elemento <tr> más cercano, que es la fila de la tabla que queremos eliminar
    var filaParaEliminar = elemento.closest('tr');

    // Maneja el clic en el botón "Cancelar"
    document.getElementById('cancelButton').onclick = function() {
      confirmModal.style.display = 'none'; // Cierra el modal
  };

  // Maneja el clic en el botón "Aceptar"
  document.getElementById('acceptButton').onclick = function() {
    // Elimina la fila encontrada
    filaParaEliminar.remove();
    confirmModal.style.display = 'none'; // Cierra el modal
  };
}
    
    
document.addEventListener('DOMContentLoaded', function() {
    // Encuentra el botón que abre el modal para un nuevo beneficiario
    var openModalBtn = document.getElementById('openModalBtn');

    // Encuentra todos los contenedores de iconos de lápiz por su clase
    var editIconContainers = document.querySelectorAll('.editar-modal-b');

    // Encuentra el modal por su ID
    var myModal = document.getElementById('myModal');

    // Encuentra el elemento del título dentro del modal
    var modalTitle = myModal.querySelector('.title h2 em');

    // Función para abrir el modal y establecer el título para "Nuevo Beneficiario"
    function openNewBeneficiaryModal() {
        modalTitle.innerHTML = 'NUEVO BENEFICIARIO';
        myModal.style.display = 'block';
    }

    // Función para abrir el modal y establecer el título para "Editar Beneficiario"
    function openEditBeneficiaryModal() {
        modalTitle.innerHTML = 'EDITAR BENEFICIARIO';
        myModal.style.display = 'block';
    }

    // Evento para abrir el modal con el título "Nuevo Beneficiario"
    openModalBtn.addEventListener('click', openNewBeneficiaryModal);

    // Asigna el evento de clic a cada icono de lápiz para abrir el modal de edición
    editIconContainers.forEach(function(iconContainer) {
        iconContainer.addEventListener('click', openEditBeneficiaryModal);
    });

    // Encuentra el botón que cierra el modal
    var closeModalBtn = document.getElementById('cerrar-modal2');

    // Función para cerrar el modal
    function closeModal() {
        myModal.style.display = 'none';
    }

    // Evento para cerrar el modal
    closeModalBtn.addEventListener('click', closeModal);

    // Cierra el modal si el usuario hace clic fuera de él
    window.onclick = function(event) {
        if (event.target == myModal) {
            closeModal();
        }
    }
});
    
      
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
      
  
      
    
    