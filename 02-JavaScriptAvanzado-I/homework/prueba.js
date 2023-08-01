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



var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); //The Flash
   console.log(pm);        //Reverse Flash
}
console.log(instructor); //Tony
console.log(pm);         //Franco

console.log(5 && 2)