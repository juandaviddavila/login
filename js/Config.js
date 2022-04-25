/**
 * CONFIG.js
 * @description Este archivo js se encarga de las variables de configuracion 
 * de la apliacion
 * @author Juan David Davila
 * @version 0.0.2
 * @since 2015-06-24
 */
 function getParameterByName(name, url) {
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
}
var CONFIG = function () {
    var puerto_app_desconectada = "8085";//8383 8085
    var URLPageLoginBaseTienddi = 'http://192.168.1.57:8383/cuiddi_administrador2/index.html';
    var ModoTrabajo = 'developer';
    var front = false;
    var backend = true;
    var serverDeveloperFronLocal = false;
    var amazonLocal = false;
    var amazonLocalPrueba = false;
    var amazonServer = false;
    var amazonServerPrueba = false;
    var serverDeveloper = false;
    var versionPrototipo = 'v.4.9.146';
    var port = '8383';
    var host = 'localhost';
    var hostFront = 'localhost';
    var timeRequest = 10000;
    var URLServicesErp = "";
    var modoDebug = false;
    var idioma = {
        espanol: 'es',
        ingles: 'en',
        portugues: 'pg'
    };

    var URLServices = '';
    var URLPageLogin = '';
    var URLPageMain = '';
    var URLPageMainErp = '';
    var URLIdioma = '';
    var URLAvatar = 'data:image/png;base64,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';


    var modo_comandera = parseInt(getParameterByName('modo_comandera'));
    if (modo_comandera === undefined) {
        modo_comandera = 0;
    }
    if (modo_comandera === null) {
        modo_comandera = 0;
    }
    if (modo_comandera === 1) {
        localStorage.setItem("modo_comandera", 1);
    } else {
        localStorage.removeItem("modo_comandera");
    }
    /**
     * @description método encargado de setear la ruta del json de traducciones
     * @author Juan P Betancur S
     * @version 1.0.0
     * @since 2016-12-13 
     * @param {type} idioma
     * @returns {String} URLIdioma
     */
    var setearIdiomaFront = function (idioma) {
        if (idioma === 'es') {
            URLIdioma = 'config/idiomas/json_es.json';
        }
        return URLIdioma;
    };

    if (backend) {
        URLPageMain = 'http://' + hostFront + ':' + port + '/j4pro_base/main.html';
        URLPageLogin = 'http://' + hostFront + ':' + port + '/j4pro_base/main2.html#/login';
        URLPageMainErp = 'http://' + hostFront + ':' + port + '/j4pro_erp/index.html';
        URLServices = 'http://' + host + ':8084/jServerj4ErpPro/';
        //URLServicesErp = 'http://' + host + ':8084/jServerj4ErpPro/';
        URLServicesErp = 'http://' + host + ':8084/jServerj4ErpPro/';
    }
    if (front) {
        URLPageMain = 'http://localhost:' + port + '/j4pro_base/main.html';
        URLPageLogin = 'http://localhost:' + port + '/j4pro_base/main2.html#/login';
        URLPageMainErp = 'http://localhost:' + port + '/j4pro_erp/index.html';
        //URLServices = 'http://' + host + ':8084/jServerj4Pro/';
        URLServicesErp = "https://app.j4pro.com/jServerj4ErpPro/";
    }
    if (amazonLocal) {
        URLServices = 'https://app.j4pro.com/jServerj4ErpPro';
        URLPageMain = 'http://' + hostFront + ':' + port + '/j4pro_base/main.html';
        URLPageLogin = 'http://' + hostFront + ':' + port + '/j4pro_base/main2.html#/login';
        URLPageMainErp = 'http://' + hostFront + ':' + port + '/j4pro_erp/index.html';
        URLServicesErp = "https://app.j4pro.com/jServerj4ErpPro/";
    }
    if (amazonLocalPrueba) {
        URLServices = 'https://app.j4pro.com/jServerj4ErpPro_prueba';
        URLPageMain = 'http://' + hostFront + ':' + port + '/j4pro_base/main.html';
        URLPageLogin = 'http://' + hostFront + ':' + port + '/j4pro_base/main2.html#/login';
        URLPageMainErp = 'http://' + hostFront + ':' + port + '/j4pro_erp/index.html';
        URLServicesErp = "https://app.j4pro.com/jServerj4ErpPro_prueba/";
    }
    if (amazonServer) {
        URLPageLoginBaseTienddi = 'https://app.tienddi.co/app_gestion/index.html';
        if (parseInt(localStorage.getItem("modo_comandera", 1)) !== 1) {
            URLServices = 'https://app.j4pro.com/jServerj4ErpPro/';
            URLPageMain = 'https://' + location.host + '/j4pro_base/main.html';
            URLPageLogin = 'https://' + location.host + '/j4pro_base/main2.html#/login';
            URLPageMainErp = 'https://' + location.host + '/j4pro_erp/index.html';
            URLServicesErp = "https://app.j4pro.com/jServerj4ErpPro/";
        } else {
            URLServices = 'https://app.j4pro.com/jServerj4ErpPro/';
            URLPageMain = 'http://' + location.host + '/j4pro_base/main.html';
            URLPageLogin = 'http://' + location.host + '/j4pro_base/main2.html#/login';
            URLPageMainErp = 'http://' + location.host + '/j4pro_erp/index.html';
            URLServicesErp = "https://app.j4pro.com/jServerj4ErpPro/";
        }
        if (location.host === "nomina.j4pro.com") {
            URLServicesErp = "https://nomina.j4pro.com/jServerj4ErpPro/";
        }
        if (location.host === "app2.j4pro.com") {
            URLServices = "https://app2.j4pro.com/jServerj4ErpPro/";
        }

        if (location.host === "app3.j4pro.com") {
            URLServices = "https://app3.j4pro.com/jServerj4ErpPro/";
        }

        if (location.host === "api3.j4pro.com") {
            URLServices = "https://app3.j4pro.com/jServerj4ErpPro/";
        }
        if (location.host === "respaldo.j4pro.com") {
            URLServices = "https://respaldo.j4pro.com/jServerj4ErpPro/";
        }
        if (location.host === "prueba.j4pro.com") {
            URLServices = "https://prueba.j4pro.com/jServerj4ErpPro/";
        }
        if (location.host === "secundario.j4pro.com") {
            URLServices = "https://secundario.j4pro.com/jServerj4ErpPro/";
        }
        if (location.host === "api.j4pro.com") {
            URLServices = "https://api.j4pro.com/jServerj4ErpPro/";
        }
    }
    if (amazonServerPrueba) {
        if (parseInt(localStorage.getItem("modo_comandera", 1)) !== 1) {
            URLServices = 'https://app.j4pro.com/jServerj4ErpPro_prueba';
            URLPageMain = 'https://app.j4pro.com/j4pro_base_prueba/main.html';
            URLPageLogin = 'https://app.j4pro.com/j4pro_base_prueba/main2.html#/login';
            URLPageMainErp = 'https://app.j4pro.com/j4pro_erp_prueba/index.html';
            URLServicesErp = "https://app.j4pro.com/jServerj4ErpPro_prueba/";
        } else {
            URLServices = 'https://app.j4pro.com/jServerj4ErpPro_prueba';
            URLPageMain = 'http://app.j4pro.com/j4pro_base_prueba/main.html';
            URLPageLogin = 'http://app.j4pro.com/j4pro_base_prueba/main2.html#/login';
            URLPageMainErp = 'http://app.j4pro.com/j4pro_erp_prueba/index.html';
            URLServicesErp = "https://app.j4pro.com/jServerj4ErpPro_prueba/";
        }
    }

    if (serverDeveloper) {
        URLPageMain = 'http://192.168.1.182:8080/j4pro_base/main.html';
        URLPageLogin = 'http://192.168.1.182:8080/j4pro_base/main2.html#/login';
        URLPageMainErp = 'http://192.168.1.182:8080/j4pro_erp/index.html';
        URLServices = 'http://192.168.1.182:8080/jServerj4ErpPro/';
        URLServicesErp = 'http://192.168.1.182:8080/jServerj4ErpPro/';
    }

    if (serverDeveloperFronLocal) {
        URLPageMain = 'http://' + hostFront + ':' + port + '/j4pro_base/main.html';
        URLPageLogin = 'http://' + hostFront + ':' + port + '/j4pro_base/main2.html#/login';
        URLPageMainErp = 'http://' + hostFront + ':' + port + '/j4pro_erp/index.html';
        URLServices = 'http://192.168.1.182:8080/jServerj4ErpPro/';
        URLServicesErp = 'http://192.168.1.182:8080/jServerj4ErpPro/';
    }
    if (false && ModoTrabajo === 'developer') {
        //llamar servicio
        $.ajax({
            url: "http://localhost:3448/"
        }).then(function (data) {
            if (data) {
                var bakendLocal = JSON.parse(data).bakendLocal;
                if (bakendLocal) {
                    CONFIG.URLServices = 'http://' + host + ':8084/jServerj4ErpPro/';
                    CONFIG.URLServicesErp = 'http://' + host + ':8084/jServerj4ErpPro/';
                    CONFIG.backend = true;
                    CONFIG.serverDeveloperFronLocal = false;
                } else {
                    CONFIG.URLServices = 'http://192.168.1.182:8080/jServerj4ErpPro/';
                    CONFIG.URLServicesErp = 'http://192.168.1.182:8080/jServerj4ErpPro/';
                    CONFIG.backend = false;
                    CONFIG.serverDeveloperFronLocal = true;
                }
            }

        });
    }
    /*##confifuracion especial*/
    return {
        URLPageLoginBaseTienddi: URLPageLoginBaseTienddi,
        serverDeveloperFronLocal: serverDeveloperFronLocal,
        backend: backend,
        URLServices: URLServices,
        URLPageLogin: URLPageLogin,
        URLPageMain: URLPageMain,
        URLPageMainErp: URLPageMainErp,
        URLAvatar: URLAvatar,
        versionPrototipo: versionPrototipo,
        timeRequest: timeRequest,
        modoDebug: modoDebug,
        idioma: idioma.espanol,
        setearIdiomaFront: setearIdiomaFront,
        URLServicesErp: URLServicesErp,
        amazonServer: amazonServer,
        puerto_app_desconectada: puerto_app_desconectada
    };
}();