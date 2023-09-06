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
let formulario = document.getElementById("formulario-creacion-proyecto")
let btnForm = document.getElementById("btn-form-id")
let inputNombre=document.getElementById("nombre-id")
let inputDescripcion=document.getElementById("descripcion-id")
let checkLenguajes=document.getElementsByName("lenguajes")
let checkCategorias=document.getElementsByName("categorias")
let enlaceGitHub=document.getElementById("github-link-id")
let enlaceGitLab=document.getElementById("gitlab-link-id")

// Event Listeners
// Botones
btnCrearP.addEventListener("click", anadirProyecto)
btnEliminarTodosP.addEventListener("click", eliminarTodos)
btnEliminarUltP.addEventListener("click", eliminarUltimo)
// Search Bar
searchBar.addEventListener("input", buscar)
// Formulario
btnForm.addEventListener("click", subirProyecto)

// Definición de variables
let listaProyectos = []

// Inicio del programa
obtenerLS()
imprimir(listaProyectos)

// Definicion de Funciones
function eliminarTodos() {
    listaProyectos=[]
    localStorage.clear()
    tituloMensaje.innerText = "Todos los Proyectos Fueron Eliminados"
    contenidoMensaje.innerText = ""
    imprimir(listaProyectos)
}
function eliminarUltimo() {
    localStorage.clear()
    listaProyectos.pop()
    guardarLS()
    
    seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">Lista de Proyectos</h2>`
    tituloMensaje.innerText = "Se Elimino El Último Proyecto"
    contenidoMensaje.innerText = ""
    imprimir(listaProyectos)
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
    if (arregloFlitrado.length==0) {
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
    if (typeof resultadoBusqueda === "undefined") {
        seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">Ningún proyecto coincide con los criterios de Búsqueda</h2>`
    }
    else {
        seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">Resultado de Búsqueda:</h2>`
        imprimir([resultadoBusqueda])
    }
}
function anadirProyecto() {
    tituloMensaje.innerText = "Creando Proyecto"
    contenidoMensaje.innerText = `Complete el formulario y haga click en "Agregar Proyecto"`
    if (seccionFormulario.classList.contains("invisible")) {
        seccionFormulario.classList.remove("invisible")
        seccionProyectos.classList.add("invisible")
        seccionFiltrado.classList.add("invisible")
    }
}
function subirProyecto() {
    let id = 0
    if(listaProyectos.length!=0){
        id=listaProyectos[listaProyectos.length-1].id+1
    }
    let nombre = inputNombre.value
    let descripcion = inputDescripcion.value
    let lenguajes =[]
    for(lenguaje of checkLenguajes){
        if(lenguaje.checked){
            lenguajes.push(lenguaje.value)
        }
    }
    let categorias = []
    for(categoria of checkCategorias){
        if(categoria.checked){
            categorias.push(categoria.value)
        }
    }
    let linkGitHub = enlaceGitHub.value
    let linkGitLab = enlaceGitLab.value
    nuevoProyecto= new Proyecto(id,nombre,descripcion,lenguajes,categorias,linkGitHub,linkGitLab)
    listaProyectos.push(nuevoProyecto)
    guardarLS()
    seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">Lista de Proyectos</h2>`
    imprimir(listaProyectos)
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
    if(arregloProyectos.length==0){
        seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">No hay ningún proyecto guardado</h2>`
    }
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
    }
}