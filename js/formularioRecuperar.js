const formulario = document.querySelector('#formulario')
const email = document.querySelector('#email');
const btnEnviar = document.querySelector('#enviar');


eventListeners();

function eventListeners() {

    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('input', validarFormulario);
    btnEnviar.addEventListener('click', recuperarClave);
}

function iniciarApp() {
    btnEnviar.disabled = false;
    btnEnviar.classList.add('btnDisabled')
}


function validarFormulario(e){


    const error = document.querySelector('p.mensajeError');

    if(e.target.value.length  > 0) {
        if(error) {
            error.remove();
        }
        e.target.style.borderColor = 'green';
    }else{
        e.target.style.borderColor = 'rgb(176, 53, 53)';
        mostrarError('- Ingresa Un Email o Número Celular -');
    }

    if( e.target.value.length  > 0)
    {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('btnDisabled')
    } else {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('btnDisabled')
    }


}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje
    mensajeError.classList.add('mensajeError')
    
    const errores = document.querySelectorAll('.mensajeError');
    if(errores.length ===0){
        formulario.appendChild(mensajeError)
    }
}

function recuperarClave(e) {
    e.preventDefault()
    /*---Aqui va la logica---*/ 
    console.log('comprobando...')
    
    /*---en el parentesis va el mensaje de error pintado*/
    mostrarError('error') 
}