$(document).ready(function(){
// append() add on html
// prepend() is the same as append except it adds on the beginning
// html() remove and add
// hide() visually hide elements, code still there
// empty() empty the children
// remove() selected element
var myFavfood = "Hot Dog";
var myFavarr = ["Hot Dog","Hamburger","Fries"];
var putList = `<ul>
<li>${myFavarr[0]}</li>
<li>${myFavarr[1]}</li>
<li>${myFavarr[2]}</li>
</ul>`;
$("body").append("<h1>This page was dynamically generated!</h1>")

$("body").append(putList);

$("#createBox").click(function(){

    console.log("good");
    $("body").append(`<div style ='width: 100px; height: 100px; border: 1px black solid;'></div>`);

});

});