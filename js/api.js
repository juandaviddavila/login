try {
    const url = 'http://localhost:8084/jServerj4ErpPro//j4pro/admin/usuario/grabarEmpresaUsuario'
    const respuesta = fetch(url)
    const resultado = respuesta.json()
    console.log(resultado)
 } catch (error) {
     console.log(error)
 }