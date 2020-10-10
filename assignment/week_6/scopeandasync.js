

//synchronous

console.log(1);
console.log(2);
console.log(3);

//asynchronous


var timer = setInterval(function() {
    console.log("1 second counted");
},1000);

setTimeout(function() {
    console.log("5 second counted");
    clearInterval(timer);
},5000);