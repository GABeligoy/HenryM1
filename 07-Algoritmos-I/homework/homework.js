'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr=[1]
  let div=2
  while(num>1){
    if(num%div===0){
      num=num/div
      arr.push(div)
    }else div++
  }
  return arr
  

}
//console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      if(array[i]>array[j]){
        let aux=array[i]
        array[i]=array[j]
        array[j]=aux

      }
    }
  }
  return array
}
//console.log(bubbleSort([1,3,5,6,2,7]))
//                          i             
 //                               j

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=1;i<array.length;i++){
    let j=i-1
    let aux=array[i]
    while(j>=0 && aux<array[j]){
        aux=array[i]//aux 5
        array[i]=array[j]//7
        array[j]=aux//3
      
      j--
    }
  }
  return array

}//                              aux
//console.log(insertionSort([3,7,5,6,2,1]))
//                               i                        
//                             j                        


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0;i<array.length;i++){
    let min=i
    
    for(let j=i+1;j<array.length;j++){
      if(array[min]>array[j]){
        min=j        
      }
    }
    let aux=array[i]
    array[i]=array[min]
    array[min]=aux
  }
  return array
}
//console.log(selectionSort([2,4,5,7,8,1,3]))
//                aux2     i                     min 1                   
//                                     j                
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
