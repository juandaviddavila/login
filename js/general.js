var consultarPais = async function () {
    try {
        const url = 'https://freegeoip.app/json/'
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        let paisSeleccionado = resultado.country_name;
        let ciudad = resultado.city;
        let departamento = resultado.region_code;
        let countryActual = resultado.isoCodeCountry;


        ////seleccionar pais
        const url_paises = '/Paises.json';
        const respuesta_paises = await fetch(url_paises);
        const resultado_paises = await respuesta_paises.json();
        console.log(resultado_paises);

        for (var i = 0; i < resultado_paises.length; i++) {
            if (resultado_paises[i].cca2 === resultado.country_code) {
                console.log('');
                const url_moneda = '/js/currency.json';
                const respuesta_moneda = await fetch(url_moneda);
                const resultado_moneda = await respuesta_moneda.json();
                console.log(resultado_moneda);
                for (var j in resultado_moneda) {
                    //console.log(resultado_moneda[j].code);
                    if (resultado_paises[i].currency[0] === resultado_moneda[j].code) {
                        //falta indicativo
                        let retorno = {
                            indicador:resultado_paises[i].callingCode[0],
                            moneda: resultado_moneda[j].symbol_native,
                            pais: paisSeleccionado, ciudad: ciudad, departamento: departamento,
                            country_code: resultado.country_code
                        };
                       return await retorno;
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};