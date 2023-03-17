function mostrarDialogo() {
    var dialogo = document.getElementById("dialogo");
    dialogo.style.display = "block";
}

function cerrarDialogo() {
    var dialogo = document.getElementById("dialogo");
    dialogo.style.display = "none";
}

function validarPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password != confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, intente de nuevo.");
        return false;
    }
    return true;
}
