$(document).ready(function(){

    $("#textBox").keypress(function (event){
        if(event.which == 97){
            event.preventDefault();
            $("#textBox").val("Abnormal");

        }


    });

    $(document).keypress(function (event){

        var keyPress = event.which;
        console.log(keyPress);

        if(keyPress == 103){
            $("body").append("<div style ='width: 100px; height: 100px; background-color: green; display: inline-block'> </div>");

        }
        if(keyPress == 98){
            $("body").append("<div style ='width: 100px; height: 100px; background-color: blue; display: inline-block'> </div>");

        }
        if(keyPress == 114){
            $("body").append("<div style ='width: 100px; height: 100px; background-color: red; display: inline-block'> </div>");

        }
    });

    

  
});