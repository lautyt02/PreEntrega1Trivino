// Definición de variables y constantes 
let long = definirLong()
let miArreglo = crearArreglo(long)
// Inicio programa
let ejectutar = true
while(ejectutar){
    let opcion = validarInputNumero(`En el siguiente promt, ingrese una de las siguientes opciones: \n
    \t 1 para cambiar datos \t 2 para calcular el promedio \n
    \t 3 para calcular el máximo \t 4 para calcular el mínimo  \n
    \t 5 para imprimir en orden ascendente \t 6 para imprimir en orden descendente \t 7 para finalizar la ejecución`,false)
    switch (opcion){
        case 1:
            long = definirLong()
            miArreglo=crearArreglo(long)
            break
        case 2:
            calcularPromedio(miArreglo)
            break
        case 3:
            calcularMaximo(miArreglo)
            break
        case 4:
            calcularMinimo(miArreglo)
            break
        case 5:
            imprimir(miArreglo)
            break
        case 6:
            imprimirReverso(miArreglo)
            break
        case 7:
            ejectutar = false
            console.log("Ejecucuión Finalizada")
            break
        default:
            console.log(`No existe acción para el número ${opcion}, intente de nuevo`)
            break
    }
}
// Definición de funciones
function validarInputNumero(texto, decimalesYnegativos) {
    let valorValido=false
    while(!valorValido){
        let numero=prompt(texto)
        let condicion = !isNaN(numero)
        if(!decimalesYnegativos){
            condicion = condicion && ((numero | 0) == numero)
            condicion = condicion  && (numero>0)
        }
        if(condicion){
            valorValido=true
            if(decimalesYnegativos){
                return parseFloat(numero)
            }
            else {
                return parseInt(numero)
            }
        }
        else {
            console.log("Valor invalido, intente de nuevo")
        }
    } 
}
function crearArreglo(longitud){
    let arreglo = []
    for(i=0; i<longitud; i++){
        console.log(`valor ${i+1} de ${longitud}`)
        arreglo[i]=validarInputNumero("Ingrese un valor numerico",true)
        console.log(arreglo[i])
    }
    return arreglo
}
function calcularPromedio(arreglo){
    let longitud = arreglo.length
    let suma = 0
    for (i=0; i<longitud; i++){
        suma += arreglo[i]
    }
    console.log(`El promedio es: ${suma/longitud}`) 
}
function definirLong(){
    let longitud = validarInputNumero("Ingrese la cantidad de elementos (Número Entero mayor a 0)",false)
    console.log(`Longitud del arreglo: ${longitud}`)
    return longitud
}
function calcularMaximo(arreglo){
    let longitud = arreglo.length
    let maximo = arreglo[0]
    let posicionMax = 0
    for (i=0; i<longitud; i++){
        if(arreglo[i]>maximo){
            maximo=arreglo[i]
            posicionMax=i
        }
    }
    console.log(`El valor máximo es: ${maximo} y está en la posición ${posicionMax}`)
}
function calcularMinimo(arreglo){
    let longitud = arreglo.length
    let minimo = arreglo[0]
    let posicionMin = 0
    for (i=0; i<longitud; i++){
        if(arreglo[i]<minimo){
            minimo=arreglo[i]
            posicionMin=i
        }
    }
    console.log(`El valor mínimo es: ${minimo} y está en la posición ${posicionMin}`)
}
function imprimir(arreglo) {
    console.log('Imprimir en orden ascendente')
    let longitud = arreglo.length
    for (i=0; i<longitud; i++){
        console.log(`El valor en la posición: ${i} es: ${arreglo[i]}`)
    }
}
function imprimirReverso(arreglo){
    console.log('Imprimir en orden descendente')
    let longitud = arreglo.length
    for (i=0; i<longitud; i++){
        let posicion = longitud - (1+i)
        console.log(`El valor en la posición: ${posicion} es: ${arreglo[posicion]}`)
    }
}