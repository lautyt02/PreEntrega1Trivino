// clase Proyecto
class Proyecto {
    constructor(id, nombre, descripcion, lenguajes, categorias, linkGitHub, linkGitLab) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.lenguajes = lenguajes
        this.categorias = categorias
        this.linkGitHub = linkGitHub
        this.linkGitLab = linkGitLab
    }
    imprimirProyecto() {
        let listaLenguajes = "Lenguajes utilizados: "
        for (let i = 0; i < this.lenguajes.length; i++) {
            listaLenguajes = listaLenguajes + this.lenguajes[i] + "; "
        }
        let listaCategorias = "Categorias: "
        for (let i = 0; i < this.categorias.length; i++) {
            listaCategorias += `${this.categorias[i]}; `
        }
        return `${this.nombre}\n ${this.descripcion}\n id: ${this.id}\n Lenguajes utilizados: ${this.lenguajes}\n Categorias: ${this.categorias}\n link a GitHub: ${this.linkGitHub}\n link a GitLab: ${this.linkGitLab}\n\n`
    }
}

//Traer Elementos del DOM
//Botones
let btnCrearP = document.getElementById("btn-crear-proyecto")
let btnEliminarTodosP = document.getElementById("btn-el-todo")
let btnEliminarUltP = document.getElementById("btn-el-ult")
let btnMostrarOcultarP = document.getElementById("btn-most-ocul")
// Sección Mensajes
let tituloMensaje = document.getElementById("titulo-mensaje")
let contenidoMensaje = document.getElementById("contenido-mensaje")
// Sección de Filtrado
let seccionFiltrado = document.querySelector(".filtrado")
let radFind = document.getElementById("find-rad-id")
let radFilter = document.getElementById("filter-rad-id")
let searchBar = document.getElementById("search-id")
//Sección Proyectos
let seccionProyectos = document.querySelector(".proyectos")
let tituloProyectos = document.querySelector("#titulo-proyectos")
//Formulario Creación Proyecto
let seccionFormulario = document.querySelector(".formulario-proyecto")
let btnForm = document.getElementById("btn-form-id")
// let inputNombre=document.getElementById("nombre-id")
// let inputDescripcion=document.getElementById("descripcion-id")
// let checkLenguajes=document.getElementsByName("lenguajes")
// let checkCategorias=document.getElementsByName("categorias")
// let enlaceGitHub=document.getElementById("github-link-id")
// let enlaceGitLab=document.getElementById("gitlab-link-id")

// Event Listeners
// Botones
btnCrearP.addEventListener("click", anadirProyecto)
btnEliminarTodosP.addEventListener("click", eliminarTodos)
btnEliminarUltP.addEventListener("click", eliminarUltimo)
btnMostrarOcultarP.addEventListener("click", mostrarOcultar)
// Search Bar
searchBar.addEventListener("input", buscar)
// Formulario
btnForm.addEventListener("click", subirProyecto)

// Definición de variables
let listaProyectos = [new Proyecto(0, "proyecto-1", "proyecto de prueba 1", "html, css, javascript", "pagina web", "https://github.com/lautyt02", "https://gitlab.com/lautyt02"),
new Proyecto(1, "proyecto-2", "proyecto de prueba 2", "html, css, javascript", "pagina web", "https://github.com/lautyt02", "https://gitlab.com/lautyt02"),
new Proyecto(2, "proyecto-3", "proyecto de prueba 3", "rust", "aplicación, criptomonedas", "https://github.com/lautyt02", "https://gitlab.com/lautyt02"),]








// let listaProyectos = [new Proyecto(0,"proyecto-1","proyecto de prueba 1", "html, css, javascript","pagina web","https://github.com/lautyt02","https://gitlab.com/lautyt02" ),
// new Proyecto(1,"proyecto-2","proyecto de prueba 2", "html, css, javascript","pagina web","https://github.com/lautyt02","https://gitlab.com/lautyt02" ),
// new Proyecto(2,"proyecto-3","proyecto de prueba 3", "rust","aplicación, criptomonedas","https://github.com/lautyt02","https://gitlab.com/lautyt02" ),]
// Inicio programa
// let ejecutar = true
// while(ejecutar){
//     let opcion = validarInputNumero(`En el siguiente promt, ingrese una de las siguientes opciones: \n
//     \t 1 Filtrado \t 2 Busqueda por Nombre \n
//     \t 3 para añadir un proyecto \n
//     \t 5 Listar todos los Proyectos \t 6 Finalizar Ejecucuión`)
//     switch (opcion){
//         case 1:
//             let atributoFiltro = ingresarTexto("Ingrese el atributo por el que desea filtrar")
//             let valorFiltro = ingresarTexto("Ingrese el valor del atributo por el que desea filtrar")
//             filtrar(listaProyectos,atributoFiltro,valorFiltro)
//             break
//         case 2:
//             let nombreAbuscar = ingresarTexto("Ingrese el nombre del proyecto que busca:")
//             buscarNombre(listaProyectos,nombreAbuscar)
//             break
//         case 3:
//             anadirProyecto(listaProyectos)
//             break
//         case 5:
//             console.log(imprimirTodos(listaProyectos))
//             break
//         case 6:
//             ejecutar = false
//             break
//         default:
//             console.log(`No existe acción para el número ${opcion}, intente de nuevo`)
//             break
//     }
// }
// Definición de funciones
// function validarInputNumero(texto) {
//     let valorValido=false
//     while(!valorValido){
//         let numero=prompt(texto)
//         let condicion = !isNaN(numero) //Chequear que sea un número
//         condicion = condicion && ((numero | 0) == numero) //chequear que sea entero
//         condicion = condicion  && (numero>0)  //Chequear que sea positivo
//         if(condicion){ //Chequear las 3 condiciones
//             valorValido=true
//             return parseInt(numero)
//         }
//         else {
//             console.log("Debe ingresar un número entero positivo, intente de nuevo")
//         }
//     } 
// }
// function ingresarTexto(texto) {
//     let valorValido=false
//     while(!valorValido){
//         textoIngresado = prompt(texto)
//         condicionUno= typeof textoIngresado === 'string'
//         condicionDos = textoIngresado instanceof String
//         if (condicionUno || condicionDos){
//             valorValido = true
//             return textoIngresado.toLowerCase()
//         }
//         else{
//             console.log("Debe ingresar un Texto, intente de nuevo")
//         }
//     }

// }
// function filtrar(arreglo, atributo, valor){
//     let arregloFlitrado = arreglo.filter((el)=>el[atributo].includes(valor))
//     textoAimprimir = `Los Proyectos que coinciden con los criterios de filtrado son: \n`
//     for(let i=0;i<arregloFlitrado.length;i++){
//         textoAimprimir += arregloFlitrado[i].imprimirProyecto()
//     }
//     console.log(textoAimprimir)
// }
// function buscarNombre(arreglo, nombreBuscado){
//     let resultadoBusqueda = arreglo.find((el)=>el.nombre === nombreBuscado) 
//     if(typeof resultadoBusqueda === "undefined"){
//         console.log("Ningún proyecto coincido con los criterios de Búsqueda")
//     }
//     else{
//         let textoAimprimir = `Resultado de Búsqueda:  \n`+resultadoBusqueda.imprimirProyecto()
//         console.log(textoAimprimir)
//     }
// }
// function anadirProyecto(arreglo){
//     let id = arreglo[arreglo.length-1].id+1
//     let nombre = ingresarTexto("Ingrese el Nombre del Proyecto")
//     let descripcion = ingresarTexto("Ingrese una descripción para el Proyecto")
//     let lenguajes="rust"
//     let categorias="aplicación"
//     let linkGitHub="https://github.com/lautyt02"
//     let linkGitLab="https://gitlab.com/lautyt02"
//     arreglo.push(new Proyecto(id, nombre, descripcion, lenguajes, categorias, linkGitHub, linkGitLab))
// }

// function imprimirTodos(arreglo){
//     textoAimprimir = `Lista de Proyectos: \n`
//     for(let i=0;i<arreglo.length;i++){
//         textoAimprimir += arreglo[i].imprimirProyecto()
//     }
//     return textoAimprimir
// }

function eliminarTodos() {
    tituloMensaje.innerText = "Mensaje de Prueba"
    contenidoMensaje.innerText = `Eliminar Todos`
}
function eliminarUltimo() {
    tituloMensaje.innerText = "Mensaje de Prueba"
    contenidoMensaje.innerText = `Eliminar Último`
}
function mostrarOcultar() {

    tituloMensaje.innerText = "Mensaje de Prueba"
    contenidoMensaje.innerText = `Mostrar/Ocultar`

}
function buscar() {
    let radios = document.getElementsByName("find/filter")
    if (radios[0].checked) {
        encontrarNombre(listaProyectos, searchBar.value)
    }
    else {
        filtrar(listaProyectos, "nombre", searchBar.value)
    }

    // tituloMensaje.innerText = "Mensaje de Prueba"
    // contenidoMensaje.innerText = `Estas Tipeando ${searchBar.value} \n Estado Find ${radios[0].checked} \n Estado Filter ${radios[1].checked}`

}
function filtrar(arreglo, atributo, valor) {
    tituloMensaje.innerText = "Ejecutando Filter"
    contenidoMensaje.innerText = "Devuelve todos los resultados que contengan el valor del input."
    let arregloFlitrado = arreglo.filter((el) => el[atributo].includes(valor))
    if (arregloFlitrado) {
        seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">Ningún proyecto coincide con los criterios de Búsqueda</h2>`
    }
    else {
        seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">Los Proyectos que coinciden con los criterios de filtrado son:</h2>`
        imprimir(arregloFlitrado)
    }
}
function encontrarNombre(arreglo, nombreBuscado) {
    tituloMensaje.innerText = "Ejecutando Find"
    contenidoMensaje.innerText = "El imput debe ser exactamente igual. Devuelve un único resultado"
    let resultadoBusqueda = arreglo.find((el) => el.nombre === nombreBuscado)
    console.log(typeof resultadoBusqueda)
    if (typeof resultadoBusqueda === "undefined") {
        seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">Ningún proyecto coincide con los criterios de Búsqueda</h2>`
    }
    else {
        seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">Resultado de Búsqueda:</h2>`
        imprimir([resultadoBusqueda])
    }
}
function anadirProyecto() {
    tituloMensaje.innerText = "Mensaje de Prueba"
    contenidoMensaje.innerText = `Crear Proyecto`
    if (seccionFormulario.classList.contains("invisible")) {
        seccionFormulario.classList.remove("invisible")
        seccionProyectos.classList.add("invisible")
        seccionFiltrado.classList.add("invisible")
    }

}
function subirProyecto() {
    seccionFormulario.classList.add("invisible")
    seccionProyectos.classList.remove("invisible")
    seccionFiltrado.classList.remove("invisible")

}
function guardarLS() {
    for (const proyecto of listaProyectos) {
        let proyectoJson = JSON.stringify(proyecto)
        localStorage.setItem(proyecto.id, proyectoJson)
    }
}
function imprimir(arregloProyectos) {
    for (const proyecto of arregloProyectos) {
        let proyectoHtml = document.createElement("div")
        proyectoHtml.classList.add("tarjeta-proyecto")
        proyectoHtml.innerHTML = `<h4>${proyecto.nombre}</h4>
        <p>${proyecto.descripcion}</p>
        <p>Lenguajes utilizados: ${proyecto.lenguajes}</p>
        <a href="${proyecto.linkGitHub}" target="_blank">Repositorio GitHub</a>
        <a href="${proyecto.linkGitLab}" target="_blank">Repositorio GitLab</a>`
        seccionProyectos.appendChild(proyectoHtml)
    }
}
function obtenerLS() {
    for (let i = 0; i < localStorage.length; i++) {
        listaProyectos[i] = JSON.parse(localStorage.getItem(i))
        console.log(listaProyectos[i])
    }
}