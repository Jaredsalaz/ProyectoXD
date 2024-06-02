// Ojo abierto y cerrado
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var eyeOpen = document.getElementById('eyeOpen');
    var eyeSlash = document.getElementById('eyeSlash');
    var passwordType = passwordInput.getAttribute('type');

    if (passwordType === 'password') {
        passwordInput.setAttribute('type', 'text');
        eyeOpen.style.display = '';
        eyeSlash.style.display = 'none';
    } else {
        passwordInput.setAttribute('type', 'password');
        eyeOpen.style.display = 'none';
        eyeSlash.style.display = '';
    }
}

// Modal alert
function showAlert() {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
    alertDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <p>El usuario y/o la contraseña <br> son incorrectos</p>
        <button onclick="closeAlert()">Aceptar</button>
    `;
    document.body.appendChild(alertDiv);
}

function closeAlert() {
    var alertDiv = document.querySelector('.alert');
    document.body.removeChild(alertDiv);
    window.location.href = "fondo.html"; 
}