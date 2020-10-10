/*

*
**
***
****
*****
****
***
**
*

*/

// console.log("*");
// console.log("**");
// console.log("***");

// "Remembers" what we previously had, starts with no asterisks.
// var column = [];

// for (var i = 0; i < 5; i = i + 1) {

//     // We add one asterisk.
//      column.push("*");

//     // We console.log what the column is currently holding.
//     console.log(column);
   
    
// }
// for (var j = 0; j < 5; j++) {

//     // We add one asterisk.
//      column.pop();

//     // We console.log what the column is currently holding.
//     console.log(column);
   
    
// }

var input = [1,2,3,4,5];
// var value ;
var output = [];
var count = input.length;

for(var i = 0 ; i < count; i++){
   
    output.push(input.pop());
  
    
}
console.log(output);