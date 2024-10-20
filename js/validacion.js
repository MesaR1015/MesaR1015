function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const ciudad = document.getElementById('ciudad').value;
    const edad = document.getElementById('edad').value;

    if (nombre === "" || direccion === "" || telefono === "" || correo === "" || ciudad === "" || edad === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }
    if (!/^\d+$/.test(telefono)) {
        alert("El teléfono debe contener solo números.");
        return false;
    }
    if (!/^\d+$/.test(edad)) {
        alert("La edad debe contener solo números.");
        return false;
    }
    
    // Si la validación es exitosa
    alert("Datos enviados exitosamente");
    return true; // Permitir que se envíe el formulario
    
}
