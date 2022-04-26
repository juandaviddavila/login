//----SELECTORES
const formulario = document.querySelector('#formulario')
const select = document.querySelector('#select');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnEnviar = document.querySelector('#enviar');
let datosConfiguracionCuenta = null;
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//----------EVENTOS

eventListeners();

function eventListeners() {

    document.addEventListener('DOMContentLoaded', iniciarApp);

    select.addEventListener('change', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    password.addEventListener('blur', validarFormulario);


    // btnEnviar.addEventListener('click', iniciarSesionPrevio);
}


//------FUNCIONES

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('btnDisabled')
    iniciador();
    validarFormulario();
}

function validarFormulario(e) {

    if (e == undefined) {
        btnEnviar.classList.remove('btnDisabled')
        return;
    }

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


    if (false && e.target.type === 'email') {
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

    if (er.test(email.value) && password.value != '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('btnDisabled')
    } else {
        if (email.value.trim().length > 0) {

        } else {
            btnEnviar.disabled = true;
            btnEnviar.classList.add('btnDisabled')
        }
    }

}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje
    mensajeError.classList.add('mensajeError');

    const errores = document.querySelectorAll('.mensajeError');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError)
    }

}
var checkRecuerdame = function () {
    const $miCheckbox = document.querySelector("#checkbox");
    localStorage.setItem("recuerdame", $miCheckbox.checked ? 1 : 0);
};
var listadoPaises = async function () {
    const formularioSelect = document.querySelector('#select')
    try {
        const respuesta = await fetch('/bases_datos/paises.json');
        const resultado = await respuesta.json()
        resultado.forEach(pais => {
            const option = document.createElement('option');
            option.text = `${pais.name.common}(${pais.callingCode}+)`;
            option.value = pais.callingCode;
            formularioSelect.appendChild(option)
        });

    } catch (error) {
        console.log(error);
        const option = document.createElement('option');
        option.text = `Colombia(57+)`;
        option.value = 57;
        formularioSelect.appendChild(option);
    }
}
var iniciador = async function () {
    datosConfiguracionCuenta = await consultarPais();
    console.log(datosConfiguracionCuenta);
    //marcar recuerdame
    const $miCheckbox = document.querySelector("#checkbox");
    if (localStorage.getItem("recuerdame") == null) {
        localStorage.setItem("recuerdame", 1);
        $miCheckbox.checked = true;
    } else {
        $miCheckbox.checked = localStorage.getItem("recuerdame") == 1 ? true : false;
    }
    localStorage.setItem("recuerdame", $miCheckbox.checked ? 1 : 0);
    await listadoPaises();
    //seleccionar pais actual
    document.querySelector('#select').value = "57";
    localStorage.removeItem('fechaNotificacionCaja');
}


var iniciarSesionPrevio = async function () {
    //alert('iniciar');
    localStorage.removeItem('fechaNotificacionCaja');
    //validar app desconectada
    let id_empresa = 0;
    let usuario = document.querySelector('#email').value.trim();
    let clave = document.querySelector('#password').value.trim();
    let indicador = datosConfiguracionCuenta.indicador;

    // iniciarSesion(1, usuario, clave, indicador);

    if (location.port == CONFIG.puerto_app_desconectada) {
        let url = location.origin + "/jServerj4ErpPro/";
        if (location.port == "8383" || location.port == '5500') {
            url = "http://localhost:8085/jServerj4ErpPro/";
        }
        try {
            let respuesta = await fetch(url);
            let resultado = await respuesta.json();
            id_empresa = resultado.res;
            /*  Ajax.agregarToken($sc.j4.dataEmpresa.token,
                  $sc.j4.dataEmpresa.usuario_empresa,
                  $sc.j4.dataEmpresa.empresa);
              validarUsuarioBase(url + "com/j4ErpPro/server/transacion/mesas/validar_usuario");*/
        } catch (error) {
            alert("App de cuenti esta cerrada");
            console.log(error);
        }
    } else {
        if (document.getElementById("divEmpresas").style.visibility === 'visible') {
            if (document.querySelector('#listaEmpresas').value.length > 0) {
                id_empresa = document.querySelector('#listaEmpresas').value;
            }
        }
        //sigo camino login
        if (id_empresa > 0) {
            //logueo de una
            iniciarSesion(id_empresa, usuario, clave, indicador);
        } else {
            //valido id empresa
            const url = CONFIG.URLServices + '/j4pro/admin/usuario/consultarEmpresaUsuario';

            let respuesta = await fetch(url, {
                method: 'POST',
                body: indicador + '+' + usuario,
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json, text/plain, */*'
                }
            });

            let data = await respuesta.json();
            if (data.length > 0) {
                if (data.length === 1) {
                    document.getElementById("divEmpresas").style.visibility = "hidden"; // show
                    //si solo ahi una empresa
                    id_empresa = data[0].id_empresa;
                    //loguear normal
                    iniciarSesion(id_empresa, usuario, clave, indicador);
                } else {
                    //organizo listado de empresa
                    //ordenar nombre empresa 
                    //si empresa 1 developer e interpronsticos la 2 de primeras
                    var dataAux2 = [];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].id_empresa === 1 || data[i].id_empresa === 2) {
                            dataAux2.push(data[i]);
                            data.splice(i, 1);
                        }
                    }
                    var dataAux3 = sortJSON(data, 'nombre_empresa', 'asc');
                    data = [];
                    for (var i = 0; i < dataAux2.length; i++) {
                        data.push(dataAux2[i]);
                    }
                    for (var i = 0; i < dataAux3.length; i++) {
                        data.push(dataAux3[i]);
                    }
                    console.log(data);//lista de empresas
                    const formularioSelect = document.querySelector('#listaEmpresas');
                    //limpiar listado
                    while (formularioSelect.length > 0) {
                        formularioSelect.remove(0);
                    }
                    for (var i = 0; i < data.length; i++) {
                        const option = document.createElement('option');
                        option.text = data[i].nombre_empresa;
                        option.value = data[i].id_empresa;
                        formularioSelect.appendChild(option);
                    }
                    document.getElementById("divEmpresas").style.visibility = "visible"; // show
                }
            } else {
                //mando a loguear de una no ahi mas empresas pero no tiene empresa asignada
                //mostrar erroro no tiene empresa asignada
            }
        }
    }
};

var iniciarSesion = async function (id_empresa, usuario, clave, indicador) {

    const url = CONFIG.URLServices + '/j4pro/seguridad/validar_usuario_base';

    let respuesta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(
            {
                "usuario_empresa": usuario,
                "password": clave,
                "idEmpresa": id_empresa,
                "pais": indicador
            }
        ),
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json, text/plain, */*',
            'X-Auth-Token-empresa': id_empresa,
            'X-Auth-Token-es-base': 1
        }
    });
    let data = await respuesta.json();
    if (data.type === 1) {
        if (location.port != CONFIG.puerto_app_desconectada) {
            localStorage.removeItem("id_consecutivoAsignado");
            localStorage.removeItem("consecutivo");
            localStorage.removeItem("fechaActualizacionBdErp");
            sessionStorage.removeItem("intentos_carga");
            sessionStorage.removeItem("pantallaPlan");
            sessionStorage.removeItem("planEmpresa");
            sessionStorage.removeItem("modoVistaCambiar");
            sessionStorage.removeItem("estadoSincronizacionProductos");
            localStorage.removeItem("parametros_recordar");
            localStorage.removeItem("notificaciones");
            localStorage.removeItem("fechaActualizacionNotificaciones");
            window.localStorage.removeItem('Sucursal');
        }
        localStorage.removeItem("imagenEmpresa");
        if (location.href.indexOf("main_nomina.html") > -1) {
            localStorage.setItem("es_nomina", 1);
            sessionStorage.setItem("es_nomina", 1);
            mainRedireccion = 'main_nomina.html';
        } else {
            localStorage.removeItem("es_nomina");
            sessionStorage.removeItem("es_nomina");
        }
        let dataEmpresa = JSON.parse(data.retorno);

        localStorage.setItem("SessionUsuarioBase", "hola");
        var sesion = JSON.parse(data.retorno);
        sesion.permisosUsuario = CryptoJS.AES.encrypt(JSON.stringify(sesion.permisosUsuario),
            'secret key 123 GQus5484!uj(!8!(?=54;,,').toString();
        sesion.permisosLista = CryptoJS.AES.encrypt(JSON.stringify(sesion.permisosLista),
            'secret key 123 GQus5484!uj(!8!(?=54;,,').toString();
        //                sesion.permisosUsuario = "";
        //                sesion.permisosLista = "";
        localStorage.setItem("SessionUsuarioBase", JSON.stringify(sesion));
        //paso aqui al erp
    } else {
        //error en el login
        //'Usuario y/o Clave Incorrecto' en campo data.message
    }
};