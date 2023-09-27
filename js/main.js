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
}

//Traer Elementos del DOM
//Botones
let btnCrearP = document.getElementById("btn-crear-proyecto")
let btnEliminarTodosP = document.getElementById("btn-el-todo")
let btnEliminarUltP = document.getElementById("btn-el-ult")
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
let inputNombre = document.getElementById("nombre-id")
let inputDescripcion = document.getElementById("descripcion-id")
let checkLenguajes = document.getElementsByName("lenguajes")
let checkCategorias = document.getElementsByName("categorias")
let enlaceGitHub = document.getElementById("github-link-id")
let enlaceGitLab = document.getElementById("gitlab-link-id")

// Event Listeners
// Botones
btnCrearP.addEventListener("click", anadirProyecto)
btnEliminarTodosP.addEventListener("click", eliminarTodos)
btnEliminarUltP.addEventListener("click", eliminarUltimo)
// Search
searchBar.addEventListener("input", buscar)
radFilter.addEventListener("change",buscar)
radFind.addEventListener("change",buscar)
// Formulario
btnForm.addEventListener("click", subirProyecto)

// Definición de variables
let listaProyectos = []

// Inicio del programa
obtenerLS()
imprimirTodos()
obtenerJSON()

// Definicion de Funciones
function eliminarTodos() {
    listaProyectos = []
    localStorage.clear()
    imprimirTodos()
    mostrarToast("Todos los Proyectos Fueron Eliminados", 1000)
}
function eliminarUltimo() {
    localStorage.clear()
    listaProyectos.pop()
    guardarLS()
    seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">Lista de Proyectos</h2>`
    imprimirTodos()
    mostrarToast("Se Elimino El Último Proyecto", 1000)
}

function buscar() {
    searchBar.focus()
    let radios = document.getElementsByName("find/filter")
    radios[0].checked ? encontrarNombre(listaProyectos, searchBar.value) : filtrar(listaProyectos, "nombre", searchBar.value)
}
function filtrar(arreglo, atributo, valor) {
    let arregloFlitrado = arreglo.filter((el) => el[atributo].includes(valor))
    arregloFlitrado.length == 0 ? imprimir("Ningún proyecto coincide con los criterios de Búsqueda", []) : imprimir("Los Proyectos que coinciden con los criterios de filtrado son:", arregloFlitrado)
}
function encontrarNombre(arreglo, nombreBuscado) {
    let resultadoBusqueda = arreglo.find((el) => el.nombre === nombreBuscado)
    typeof resultadoBusqueda === "undefined" ? imprimir("Ningún proyecto coincide con los criterios de Búsqueda", []) : imprimir("Resultado de Búsqueda:", [resultadoBusqueda])
}
function anadirProyecto() {
    mostrarToast(`Complete el formulario y haga click en "Agregar Proyecto"`, 3000)
    mostrarToast("Creando Proyecto", 2000)
    seccionFormulario.classList.contains("invisible")
    seccionFormulario.classList.remove("invisible")
    seccionProyectos.classList.add("invisible")
    seccionFiltrado.classList.add("invisible")
}
function subirProyecto() {
    let id = listaProyectos.length != 0 ? (listaProyectos[listaProyectos.length - 1].id + 1) : 0
    let nombre = inputNombre.value
    let descripcion = inputDescripcion.value
    let lenguajes = []
    checkLenguajes.forEach(lenguaje => { lenguaje.checked && lenguajes.push(lenguaje.value) })
    let categorias = []
    checkCategorias.forEach(categoria => { categoria.checked && categorias.push(categoria.value) })
    let linkGitHub = enlaceGitHub.value
    let linkGitLab = enlaceGitLab.value
    nuevoProyecto = new Proyecto(id, nombre, descripcion, lenguajes, categorias, linkGitHub, linkGitLab)
    listaProyectos.push(nuevoProyecto)
    guardarLS()
    imprimirTodos()
    seccionFormulario.classList.add("invisible")
    seccionProyectos.classList.remove("invisible")
    seccionFiltrado.classList.remove("invisible")
    mostrarToast("Se añadió el Proyecto", 1000)
}
function guardarLS() {
    for (const proyecto of listaProyectos) {
        let proyectoJson = JSON.stringify(proyecto)
        localStorage.setItem(proyecto.id, proyectoJson)
    }
}
function imprimir(titulo, arregloProyectos) {
    seccionProyectos.innerHTML = `<h2 id="titulo-proyectos">${titulo}</h2>`
    for (const proyecto of arregloProyectos) {
        let proyectoHtml = document.createElement("div")
        proyectoHtml.classList.add("tarjeta-proyecto")
        proyectoHtml.innerHTML = `<h4>${proyecto.nombre}</h4>
        <p>${proyecto.descripcion}</p>
        <p>Lenguajes utilizados:${proyecto.lenguajes}</p>
        <p>Categorías:${proyecto.categorias}</p>
        <a href="${proyecto.linkGitHub}" target="_blank">Repositorio GitHub</a>
        <a href="${proyecto.linkGitLab}" target="_blank">Repositorio GitLab</a>`
        seccionProyectos.appendChild(proyectoHtml)
    }
}
function imprimirTodos() {
    imprimir(listaProyectos.length == 0 ? "No hay ningún proyecto guardado" : "Lista de Proyectos:", listaProyectos)
}
function obtenerLS() {
    if (localStorage.length != 0) {
        for (let i = 0; i < localStorage.length; i++) {
            listaProyectos[i] = JSON.parse(localStorage.getItem(i))
        }
    }
    mostrarToast("Proyectos obtenidos de localStorage", 1500)
}

function mostrarToast(mensaje, duracion) {
    Toastify({
        text: mensaje,
        duration: duracion,
        position: "center",
        className: "mi-toastify",
    }).showToast()
}

async function obtenerJSON() {
    let resp = await fetch("/json/proyectos.json")
    let data = await resp.json()
    listaProyectos = []
    data.forEach(proyecto => {
        listaProyectos.push(proyecto)
    })
    mostrarToast("Se completó Fetch, proyectos obtenidos", 1500)
    imprimirTodos()
    guardarLS()
}

// async function guardarJSON() {
//     for (const proyecto of listaProyectos) {
//         let resp = await fetch("json/proyectos.json", {
//             method: "POST",
//             body: JSON.stringify(proyecto),
//             headers:{
//                 'Content-Type': 'application/json'
//             },
//         })
//     }
// }