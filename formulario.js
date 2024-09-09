function validarFormulario() {
  let nombre = document.getElementById('validationCustom01').value;
  let apellido = document.getElementById('validationCustom02').value;
  let usuario = document.getElementById('validationCustomUsername').value;
  let ciudad = document.getElementById('validationCustom03').value;
  let sexo = document.getElementById('validationCustom04').value;
  let email = document.getElementById('validationCustom05').value;
  let contraseña = document.getElementById('validationCustom06').value;
  let telefono = document.getElementById('validationCustom07').value;
  let fechaNacimiento = document.getElementById('validationCustom08').value;
  let hobbie = document.getElementById('validationCustom09').value;

  let expresionNombre = /^[a-zA-Z\s]+$/;
  let expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let expresionTelefono = /^\d{10}$/;
  let expresionUsuario = /^[a-zA-Z0-9_-]{3,16}$/;
  let expresionContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!expresionNombre.test(nombre)) {
      alert('Ingrese el nombre correctamente.');
      return false;
  }
  if (!expresionNombre.test(apellido)) {
      alert('Ingrese el apellido correctamente.');
      return false;
  }
  if (!expresionEmail.test(email)) {
      alert('Correo electrónico inválido, inténtelo de nuevo.');
      return false;
  }
  if (!expresionTelefono.test(telefono)) {
      alert('Número telefónico inválido, intente nuevamente.');
      return false;
  }
  if (!expresionUsuario.test(usuario)) {
      alert('Ingrese un nombre de usuario válido (entre 3 y 16 caracteres alfanuméricos).');
      return false;
  }
  if (!expresionContraseña.test(contraseña)) {
      alert('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.');
      return false;
  }

  let mensaje = 'Datos ingresados:\n\n' +
                'Nombre: ' + nombre + '\n' +
                'Apellido: ' + apellido + '\n' +
                'Usuario: ' + usuario + '\n' +
                'Ciudad: ' + ciudad + '\n' +
                'Sexo: ' + sexo + '\n' +
                'Email: ' + email + '\n' +
                'Contraseña: ' + contraseña + '\n' +
                'Teléfono: ' + telefono + '\n' +
                'Fecha de Nacimiento: ' + fechaNacimiento + '\n' +
                'Hobbie: ' + hobbie;

  alert(mensaje);

  return true; 
}
