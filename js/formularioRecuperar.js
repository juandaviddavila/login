const formulario = document.querySelector('#formulario')
const email = document.querySelector('#email');
const btnEnviar = document.querySelector('#enviar');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




eventListeners();

function eventListeners() {

    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validarFormulario);
}

function iniciarApp() {
    btnEnviar.disabled = true;
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
        mostrarError('- Ingresa Un Email -');
    }


    if(e.target.type === 'email') {
        if(er.test(e.target.value)){
            e.target.style.borderColor = 'green';
        }else{
            
            if(error) {
                error.remove();
            }
            e.target.style.borderColor = 'rgb(176, 53, 53)';
            mostrarError('- El Email No Es Valido -');
        }
    }

    if( er.test(email.value))
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