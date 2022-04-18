const formularioSelect = document.querySelector('#select')

async function cargarPaises(){

    try {const respuesta = await fetch('../Paises.json')
    const resultado = await respuesta.json()

    resultado.forEach(pais => {
        const option = document.createElement('option');
        option.innerHTML += `
        (${pais.callingCode}+)  ${pais.name.common}
        `;
        formularioSelect.appendChild(option)
    })
        
    } catch (error) {
        console.log(error)
    }
}
    
cargarPaises();
