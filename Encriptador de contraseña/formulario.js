const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	encriptar: /^.{4,8}$/, // 4 a 8 digitos.
}