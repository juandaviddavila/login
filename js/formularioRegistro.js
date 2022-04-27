let id_vendedor = 1
let datosConfiguracionCuenta;
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
    nombre.addEventListener('input', validarFormulario);
    email.addEventListener('input', validarFormulario);
    numero.addEventListener('input', validarFormulario);
    password.addEventListener('input', validarFormulario);
    btnEnviar.addEventListener('click', nuevoUsuario);

}


//------FUNCIONES

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('btnDisabled')
    iniciador();
}

function validarFormulario(e) {


    const error = document.querySelector('p.mensajeError');

    if (e.target.value.length > 0) {
        if (error) {
            error.remove();
        }
        e.target.style.borderColor = 'green';
    } else {
        e.target.style.borderColor = 'rgb(176, 53, 53)';
        mostrarError('- Todos los campos son obligatorios -');
    }


    if (e.target.type === 'email') {
        if (er.test(e.target.value)) {
            e.target.style.borderColor = 'green';
        } else {

            if (error) {
                error.remove();
            }
            e.target.style.borderColor = 'rgb(176, 53, 53)';
            mostrarError('- El Email No Es Valido -');
        }
    }

    if (e.target.type === 'text') {
        if (e.target.value.length >= 3) {
            if (error) {
                error.remove();
            }
            e.target.style.borderColor = 'green';

        } else {
            mostrarError('- Nombre No Valido -');
            e.target.style.borderColor = 'rgb(176, 53, 53)';
        }
    }

    if (e.target.type === 'number') {
        if (e.target.value.length> 9) {
            if (error) {
                error.remove();
            }
            e.target.style.borderColor = 'green';

        } else {
            mostrarError('- El Número Debe Tener 10 Dígitos -');
            e.target.style.borderColor = 'rgb(176, 53, 53)';
        }
    }

    if (e.target.type === 'password') {
        if (e.target.value.length > 5) {
            if (error) {
                error.remove();
            }
            e.target.style.borderColor = 'green';

        } else {
            mostrarError('- Crear Una Contraseña Con Mínimo 6 Caracteres -');
            e.target.style.borderColor = 'rgb(176, 53, 53)';
        }
    }

    if (er.test(email.value) && nombre.value.length >= 3 && numero.value.length > 9 && password.value.length > 5) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('btnDisabled')
    } else {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('btnDisabled')
    }

}


function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje
    mensajeError.classList.add('mensajeError');

    const errores = document.querySelectorAll('.mensajeError');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError)
    }else{
        //borar anterior
        document.querySelectorAll('.mensajeError')[0].remove();
        formulario.appendChild(mensajeError)
    }
}


async function nuevoUsuario(e) {
 
    e.preventDefault()
    mostrarError('');
    const sectorSeleccionado = document.querySelector('#select').value;
    const nombre = document.querySelector('#nombre').value;
    const email_usuario = document.querySelector('#email').value;
    const celular = document.querySelector('#numero').value;
    const clave = document.querySelector('#password').value;
    let userNew = {
        selectorSeleccionado: sectorSeleccionado,
        id_usuario: "0",
        email_usuario: email_usuario,
        usuario: email_usuario,
        clave: clave,
        paisSeleccionado: datosConfiguracionCuenta.pais,
        ciudad: datosConfiguracionCuenta.ciudad,
        departamento: datosConfiguracionCuenta.departamento,
        simbolo_moneda: datosConfiguracionCuenta.moneda,
        nombre: nombre,
        celular: datosConfiguracionCuenta.indicador + "+" + celular,
        id_vendedor: id_vendedor,
        esJ4pro: 1
    };

    try {
        const url = CONFIG.URLServices + '/j4pro/admin/usuario/grabarEmpresaUsuario'
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(userNew),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resultado = await respuesta.json();
        console.log(resultado);
        if (resultado.type == 1) {
            await iniciarSesion(parseInt(resultado.retorno), email_usuario, clave, datosConfiguracionCuenta.indicador);
            //window.location.href="carga.html"
        } else {
            //muestra error
            console.log(resultado.message);
            mostrarError(resultado.message);
        }
    } catch (error) {
        console.log(error)
    }
}

var consultarSectores = async function () {
    const url = CONFIG.URLServices + '/j4pro/admin/empresa/consultarSectores';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    // console.log(resultado);
    var select = document.querySelector('#select');
    for (var i = 0; i < resultado.length; i++) {
        var option = document.createElement("option");
        option.text = resultado[i].nombre_sector_empresa;
        option.value =resultado[i].id_sector_empresa;
        select.add(option);
    }
};
var consultarVendedorCode = async function (id_vendedor) {
    const url = CONFIG.URLServices + '/com/j4ErpPro/server/api_sin_token/consultarVendedorCode/'+id_vendedor;
    const respuesta = await fetch(url,{
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json, text/plain, */*'
        }
    });
    const resultado = await respuesta.json();
    if(resultado.length==0){
        resultado=null;
    }
    return await resultado;
};
var iniciador = async function () {
    
    //id_vendedor
    let codigo = getParameterByName("codigo");//1000
    if (codigo !== null) {
        id_vendedor = codigo;
    }
    if(id_vendedor>1){
      let datosvendedor= await consultarVendedorCode(id_vendedor);
      //si es null poner id vendedor en 1
      if(datosvendedor==null){
        id_vendedor=1;
        return;
      }
      let nombreAliado = datosvendedor[0].nombre;
      console.log(nombreAliado)

      const mensajeContenedor = document.querySelector('#aliado-formulario')
      const msgAliado = document.createElement('p')
      msgAliado.textContent = nombreAliado
      msgAliado.classList.add('nombreAliado')
      mensajeContenedor.appendChild(msgAliado)

    }
    console.log('id_vendedor:' + id_vendedor);
    datosConfiguracionCuenta = await consultarPais();
    console.log(datosConfiguracionCuenta);
    //lista de servicios
    consultarSectores();
}

function mostrarAliado(mensaje) {
    const aliado = document.querySelector('#aliado-formulario')
    const aliadoMsg = document.createElement('p');
    aliadoMsg.textContent = mensaje
    aliadoMsg.classList.add('mensajeAliado')
    aliado.appendChild(aliadoMsg)
}


