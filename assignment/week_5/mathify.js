var result;


function add(num1,num2){
 
    result = num1 + num2;
    return result;
}
function sub(num1,num2){
    result = num1 - num2;
    return result;
}
function multiply(num1,num2){

    result = num1 * num2;
    return result;

}
function divided(num1,num2){

    result = num1 / num2;
    return result;
}

function circleArea(radius){
    var radiusSquare = multiply(radius,radius);
    result = multiply(radiusSquare,Math.PI);

    return result;
}

 result = circleArea(5);

 console.log("Result is: "+result);


 function totalSum3Times(num1, num2) {
    var firstSum = add(num1, num2);
    var secondSum = add(num2 + 1, firstSum);
    var thirdSum = add(num2 + 2, secondSum);
    
    
    return thirdSum;
    }
    
var results = totalSum3Times(4, 5);
console.log("Result is: "+results);