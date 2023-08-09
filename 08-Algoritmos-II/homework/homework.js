'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivote=Math.floor(Math.random()*array.length)
  let izq=[]
  let der=[]
  let arrPiv=[]
  if(array.length<=1)return array
  for(let i=0;i<array.length;i++){
    if(array[pivote]!==array[i]){
      if(array[pivote]>array[i])izq.push(array[i])
      else der.push(array[i])
    }else arrPiv.push(array[i])
  }
return quickSort(izq).concat(arrPiv).concat(quickSort(der))
}
//console.log(quickSort([3,2,6,4,7,3]))



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length<=1)return array
  
  let div=dividir(array)
  let left=div[0]
  let right=div[1]

  return merge(mergeSort(left),mergeSort(right))
}

function dividir(array){
  let corte=Math.floor(array.length/2)
  let izq=array.slice(0,corte)
  let der=array.slice(corte)
  return [izq, der]
}
function merge(izq, der){
  let indiceI=0
  let indiceD=0
  let array=[]
  while(indiceI<izq.length && indiceD<der.length){
    if(izq[indiceI]<der[indiceD]){
      array.push(izq[indiceI])
      indiceI++
    }else{
      array.push(der[indiceD])
      indiceD++
    }
  }
  return array.concat(izq.slice(indiceI)).concat(der.slice(indiceD))

}

//console.log(merge([6],[2]))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
