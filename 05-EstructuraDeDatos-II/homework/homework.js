'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head=null
  
}

function Node(elemento) {
  this.value=elemento
  this.next=null
}
LinkedList.prototype.add=function(elemento){  
                                                                                                           
  let nodo=new Node(elemento)                                              
  let actual=this.head
                                                                                                               
  if(actual===null){                                                                                                             
    this.head=nodo
    return nodo                                                                                                             
  }                                                                                                             
  while(actual.next!==null){                                                                                                             
    actual=actual.next                                                                                                             
  }                                                                                                            
  actual.next=nodo
  return nodo                                                                                                            
}
LinkedList.prototype.remove=function(){
  let actual=this.head
  let aux
  let previo
  if(this.head===null)return null
  if(actual.next===null){
    aux=actual.value
    this.head=null
  }
  while(actual.next!==null){
    previo=actual
    actual=actual.next
    if(actual.next===null){
      aux=actual.value
      previo.next=null
    }
  }
  return aux
  
}
// LinkedList.prototype.search=function(element){
//   let actual=this.head
//   while(actual!==null){
//     if(typeof element==="number"||typeof element==="string"){
//       if(element===actual.value)return actual.value
//     }
//     else if(typeof element==="function"){
//       if(element(actual.value))return actual.value
//     }
//     actual=actual.next
//   }
//   return null
// }
LinkedList.prototype.search=function(element){
  let actual=this.head

  if(typeof element==="number"||typeof element==="string"){
    while(actual!==null){
      if(actual.value===element)return actual.value
      actual=actual.next
    }
    
  }else if(typeof element==="function"){
    while(actual!==null){
      if(element(actual.value))return actual.value
      actual=actual.next
    }
    
  }
  return null
}                        

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.tabla=[]
  this.numBuckets=35
}

HashTable.prototype.hash=function(parametro){
  let total=0
  for(let i=0;i<parametro.length;i++){
    total=total+parametro.charCodeAt(i)
  }
  return total%this.numBuckets
}
HashTable.prototype.set=function(clave,valor){
  if(typeof clave!=="string")throw TypeError()
  let indice=this.hash(clave)
   if(!this.tabla[indice]){
    this.tabla[indice]={}
  }
  this.tabla[indice][clave]=valor  
}

HashTable.prototype.get=function(clave){
  let buscar=this.hash(clave)
  return this.tabla[buscar][clave]
}
HashTable.prototype.hasKey=function(clave){
  let indice=this.hash(clave)
  if(this.tabla[indice].hasOwnProperty(clave))return true
  else return false
}

// let algo=new HashTable
// console.log(algo.hash("si"))


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
