$(document).ready(function(){

    var myBox = $("#box");
    var btnChangeColor = $("#changeColorOrange");
    var myToggle= 1;


    btnChangeColor.click(function () {
        

        

        
        if(myToggle == 1){
            myBox.css("background-color","red")

            myToggle =2;
        }

        else if(myToggle == 2){
            myBox.css("background-color","purple")
            myToggle =3;
        }
       
           
        else if(myToggle ==3){
            myBox.css("background-color","pink")

            myToggle =1;
        }
        
       

        


    });

    

    // setTimeout(function(){

        
    // },3000);
    

  

});

