const inputEmail = document.getElementById('email').value;
const formulario = document.querySelector('.form');
const boton = document.querySelector('.input__button');
const textError = document.querySelector('.error__oculto');
const iconoError = document.querySelector('.icono__oculto');

/* boton.addEventListener('click', validar); */
function validar(correo) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(correo);
    if(valido == true) {
        alert('Correo Válido');
    } else {
        iconoError.classList.add('mostrar');
        textError.classList.add('mostrar');
    }
}