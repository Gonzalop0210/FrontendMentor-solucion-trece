const inputText = document.querySelector('.input__text');
const formulario = document.querySelector('.form');
const textError = document.querySelector('.error__oculto');
const iconoError = document.querySelector('.icono__oculto');
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailValido = !regex.test(inputText.value);

formulario.addEventListener('submit', error => {
    
    if(emailValido) {
        error.preventDefault();
        console.log('error');
    } else {
        console.log('enviado');
    }
});