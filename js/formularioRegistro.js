let id_vendedor = 1
var getParameterByName = function (name, url) {
    if (!url)
            url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
    if (!results)
            return null;
    if (!results[2])
            return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
//----SELECTORES
const formulario = document.querySelector('#formulario')
const select = document.querySelector('#select');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const numero = document.querySelector('#numero');
const password = document.querySelector('#password');
const btnEnviar = document.querySelector('#enviar');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//----------EVENTOS

eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', iniciarApp);
    
    select.addEventListener('change', validarFormulario);
    nombre.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    numero.addEventListener('blur', validarFormulario);
    password.addEventListener('blur', validarFormulario);
    btnEnviar.addEventListener('click',  nuevoUsuario);

}


//------FUNCIONES

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
        mostrarError('- Todos los campos son obligatorios -');
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

    if(e.target.type === 'text') {
        if(e.target.value.length >= 3){
            if(error) {
                error.remove();
            }
            e.target.style.borderColor = 'green';
            
        }else{
            mostrarError('- Nombre No Valido -');
            e.target.style.borderColor = 'rgb(176, 53, 53)';
        }
    }

    if(e.target.type === 'number') {
        if(e.target.value.length == 10){
            if(error) {
                error.remove();
            }
            e.target.style.borderColor = 'green';
            
        }else{
            mostrarError('- El Número Debe Tener 10 Dígitos -');
            e.target.style.borderColor = 'rgb(176, 53, 53)';
        }
    }

    if(e.target.type === 'password') {
        if(e.target.value.length > 5){
            if(error) {
                error.remove();
            }
            e.target.style.borderColor = 'green';
            
        }else{
            mostrarError('- Crear Una Contraseña Con Mínimo 6 Caracteres -');
            e.target.style.borderColor = 'rgb(176, 53, 53)';
        }
    }

    if( er.test(email.value) &&  nombre.value.length >= 3 &&   numero.value .length == 10 && password.value.length > 5)
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


async function nuevoUsuario(e){
    e.preventDefault()


    const sectorSeleccionado = document.querySelector('#select').value;
    const nombre = document.querySelector('#nombre').value;
    const email_usuario = document.querySelector('#email').value;
    const usuario = document.querySelector('#email').value;
    const celular = document.querySelector('#numero').value;
    const clave = document.querySelector('#password').value;
    let paisSeleccionado;
    let ciudad;
    let departamento;
    const simbolo_moneda = '$';
   
    const esJ4pro = 1
    const id_usuario=0;
    try {
        const url = 'https://freegeoip.app/json/'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        paisSeleccionado = resultado.country_name
        ciudad = resultado.city
        departamento = resultado.region_code
    } catch (error) {
        console.log(error)
    }

    let  userNew = {
        id_usuario: "0",
        email_usuario:email_usuario,
        usuario: email_usuario,
        clave: clave,
        paisSeleccionado: paisSeleccionado,
        ciudad: ciudad,
        departamento:departamento,
        simbolo_moneda: simbolo_moneda,
        nombre:nombre,
        celular:celular,
        id_vendedor:id_vendedor,
        esJ4pro: esJ4pro
      };
     console.log(userNew)

     try {
        const url = 'https://api.j4pro.com/jServerj4ErpPro//j4pro/admin/usuario/grabarEmpresaUsuario'
        const respuesta = await fetch(url,{
            method:'POST',
            body:JSON.stringify(userNew),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const resultado = await respuesta.json()
        console.log(resultado)
     } catch (error) {
         console.log(error)
     }
}

var consultarPais=async function(){
    try {
        const url = 'https://freegeoip.app/json/'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        paisSeleccionado = resultado.country_name
        ciudad = resultado.city
        departamento = resultado.region_code

        const url_moneda = '/js/currency.json'
        const respuesta_moneda = await fetch(url_moneda)
        const resultado_moneda = await respuesta_moneda.json()
        console.log(resultado_moneda);

        
        for (var j in resultado_moneda) {
            console.log(resultado_moneda[j].code);
            if (resultado_moneda[i].code === resultado.country_code) {
                $sc.j4.empresasDomain.simbolo_moneda = data2[j].symbol_native;
                break;
            }
        }
    } catch (error) {
        console.log(error)
    }

};

var iniciador=function(){
    //id_vendedor
    let codigo=getParameterByName("codigo");
    if(codigo!==null){
        id_vendedor=codigo;
    }
    console.log('id_vendedor:'+id_vendedor);
    consultarPais();
}
iniciador();


