// console.log(bar);  //bar=1 undefined
// console.log(baz);  // undefined
// foo();
// function foo() {
//    console.log('Hola!');
// }
// var bar = 1;
// baz = 2;


// var instructor = 'Tony';
// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor); 

// var instructor = 'Tony';
// console.log(instructor); //Tony
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor);  //Franco
//    }
// })();
// console.log(instructor);



// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    var instructor = 'The Flash';
//    let pm = 'Reverse Flash';
//    console.log(instructor); //The Flash
//    console.log(pm);        //Reverse Flash
// }
// console.log(instructor); //Tony
// console.log(pm);         //Franco

// console.log(5 && 2)

// bar();
// console.log(foo);

// var foo = 'Hola, me declaro';
// function bar() {
//  console.log('Soy una función');
// }
// var global = 'Hola!';

// function b(){
//  var global = 'Chao'; 
//  console.log(global); // Chao
//  function a() {
//   // como no hay una variable llamada global en este contexto,
//   // busca en el outer que es scope de b;
//   console.log(global); //Chao 
//   global = 'Hello!'; // cambia la variable del contexto de b()
//  }  
//  a();
// }

// //a(); Ya no puedo llamar a a desde el scope global, acá no existe.
// b();
// console.log(global); // 'Hola!'

// var a = 1, b = 2, c = 3;

// a = b = c;

// console.log(a, b, c);

var myObj = new Object(),
  str = "myString",
  rand = Math.random(),
  obj = new Object();

myObj.type = "Sintaxis de puntos";
myObj["fecha de creación"] = "Cadena con espacios";
myObj[str] = "Valor de cadena";
myObj[rand] = "Número aleatorio";
myObj[obj] = "Object";
myObj[""] = "Incluso una cadena vacía";

console.log(myObj);