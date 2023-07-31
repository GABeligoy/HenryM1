'use strict';

function BinarioADecimal(num) {
   var invertir=num.split("").reverse().join("")
   var resul=0
   for(var i=0;i<invertir.length;i++){
      if(invertir[i]==="1"){
         resul= resul+1*Math.pow(2,i)
      }
   }
   return resul   
}




function DecimalABinario(num) {
   var array=[]
   var resto=0
   while(num>0){
      resto=num%2
      num=Math.floor(num/2)
      array.unshift(resto)
   }
   return array.join("")

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
