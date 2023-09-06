//clase Proyecto
class Proyecto {
    constructor(id, nombre, descripcion, lenguajes, categorias, linkGitHub, linkGitLab){
        this.id=id
        this.nombre=nombre
        this.descripcion=descripcion
        this.lenguajes=lenguajes
        this.categorias=categorias
        this.linkGitHub=linkGitHub
        this.linkGitLab=linkGitLab
    }
    imprimirProyecto(){
        // let listaLenguajes="Lenguajes utilizados: "
        // for(let i=0;i<this.lenguajes.length;i++){
        //     listaLenguajes =listaLenguajes+this.lenguajes[i]+"; "
        // }
        // let listaCategorias="Categorias: "
        // for(let i=0;i<this.categorias.length;i++){
        //     listaCategorias+=`${this.categorias[i]}; `
        // }
        return `${this.nombre}\n ${this.descripcion}\n id: ${this.id}\n Lenguajes utilizados: ${this.lenguajes}\n Categorias: ${this.categorias}\n link a GitHub: ${this.linkGitHub}\n link a GitLab: ${this.linkGitLab}\n\n`
    }
}
// Definición de variables
let listaProyectos = [new Proyecto(0,"proyecto-1","proyecto de prueba 1", "html, css, javascript","pagina web","https://github.com/lautyt02","https://gitlab.com/lautyt02" ),
new Proyecto(1,"proyecto-2","proyecto de prueba 2", "html, css, javascript","pagina web","https://github.com/lautyt02","https://gitlab.com/lautyt02" ),
new Proyecto(2,"proyecto-3","proyecto de prueba 3", "rust","aplicación, criptomonedas","https://github.com/lautyt02","https://gitlab.com/lautyt02" ),]
// Inicio programa
let ejecutar = true
while(ejecutar){
    let opcion = validarInputNumero(`En el siguiente promt, ingrese una de las siguientes opciones: \n
    \t 1 Filtrado \t 2 Busqueda por Nombre \n
    \t 3 para añadir un proyecto \n
    \t 5 Listar todos los Proyectos \t 6 Finalizar Ejecucuión`)
    switch (opcion){
        case 1:
            let atributoFiltro = ingresarTexto("Ingrese el atributo por el que desea filtrar")
            let valorFiltro = ingresarTexto("Ingrese el valor del atributo por el que desea filtrar")
            filtrar(listaProyectos,atributoFiltro,valorFiltro)
            break
        case 2:
            let nombreAbuscar = ingresarTexto("Ingrese el nombre del proyecto que busca:")
            buscarNombre(listaProyectos,nombreAbuscar)
            break
        case 3:
            anadirProyecto(listaProyectos)
            break
        case 5:
            console.log(imprimirTodos(listaProyectos))
            break
        case 6:
            ejecutar = false
            break
        default:
            console.log(`No existe acción para el número ${opcion}, intente de nuevo`)
            break
    }
}
// Definición de funciones
function validarInputNumero(texto) {
    let valorValido=false
    while(!valorValido){
        let numero=prompt(texto)
        let condicion = !isNaN(numero) //Chequear que sea un número
        condicion = condicion && ((numero | 0) == numero) //chequear que sea entero
        condicion = condicion  && (numero>0)  //Chequear que sea positivo
        if(condicion){ //Chequear las 3 condiciones
            valorValido=true
            return parseInt(numero)
        }
        else {
            console.log("Debe ingresar un número entero positivo, intente de nuevo")
        }
    } 
}
function ingresarTexto(texto) {
    let valorValido=false
    while(!valorValido){
        textoIngresado = prompt(texto)
        condicionUno= typeof textoIngresado === 'string'
        condicionDos = textoIngresado instanceof String
        if (condicionUno || condicionDos){
            valorValido = true
            return textoIngresado.toLowerCase()
        }
        else{
            console.log("Debe ingresar un Texto, intente de nuevo")
        }
    }

}
function filtrar(arreglo, atributo, valor){
    let arregloFlitrado = arreglo.filter((el)=>el[atributo].includes(valor))
    textoAimprimir = `Los Proyectos que coinciden con los criterios de filtrado son: \n`
    for(let i=0;i<arregloFlitrado.length;i++){
        textoAimprimir += arregloFlitrado[i].imprimirProyecto()
    }
    console.log(textoAimprimir)
}
function buscarNombre(arreglo, nombreBuscado){
    let resultadoBusqueda = arreglo.find((el)=>el.nombre === nombreBuscado) 
    if(typeof resultadoBusqueda === "undefined"){
        console.log("Ningún proyecto coincido con los criterios de Búsqueda")
    }
    else{
        let textoAimprimir = `Resultado de Búsqueda:  \n`+resultadoBusqueda.imprimirProyecto()
        console.log(textoAimprimir)
    }
}
function anadirProyecto(arreglo){
    let id = arreglo[arreglo.length-1].id+1
    let nombre = ingresarTexto("Ingrese el Nombre del Proyecto")
    let descripcion = ingresarTexto("Ingrese una descripción para el Proyecto")
    let lenguajes="rust"
    let categorias="aplicación"
    let linkGitHub="https://github.com/lautyt02"
    let linkGitLab="https://gitlab.com/lautyt02"
    arreglo.push(new Proyecto(id, nombre, descripcion, lenguajes, categorias, linkGitHub, linkGitLab))
}

function imprimirTodos(arreglo){
    textoAimprimir = `Lista de Proyectos: \n`
    for(let i=0;i<arreglo.length;i++){
        textoAimprimir += arreglo[i].imprimirProyecto()
    }
    return textoAimprimir
}