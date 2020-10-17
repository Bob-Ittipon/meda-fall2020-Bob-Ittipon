$(document).ready(function(){

    // Math.random(); //random number 0 - 1
    

    $("#bgchange").click(function(){


    var redColor = Math.random() * 256; // range should be 0-255.9
    var redColor = Math.floor(redColor);
    var greenColor =  Math.random() * 256;
    var greenColor = Math.floor(greenColor);
    var blueColor = Math.random() * 256;
    var blueColor = Math.floor(blueColor);


    var rgbColor = `rgb(${redColor},${greenColor},${blueColor})`
    var rgbTxt = `<p>${rgbColor}</p>`;

    $("body").css("background-color",rgbColor);
    $("body").append(rgbTxt);
    console.log(rgbColor);
    });
});