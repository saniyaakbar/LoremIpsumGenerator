var input = document.querySelector("#word");
var minInp = document.querySelector("#min");
var maxInp = document.querySelector("#max");
var btn = document.querySelector("#gen");

var number = 0;
var min = 0;
var max = 0;
var capsString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var stringPossible = "abcdefghijklmnopqrstuvwxyz"

var par = ``;

btn.addEventListener("click", function(){
 

    

    var temp = ``;
    number = Number(input.value);
    min = Number(minInp.value);
    max = Number(maxInp.value);
    var num2 = 0;

    console.log(min, max)
    function randomNumber(min, max) {
        // var step1 = max - min + 1;
        // var step2 = Math.random() * step1;
        // var result = Math.floor(step2) + min;
        num2 =  Math.floor(Math.random() * (max - min) + min);
        // alert(num2)
    }
        
      


      

      for(var j = 1; j < number; j++){
        
        var word = Math.floor(Math.random()*8);
        for(var i = 1; i < num2; i++){
            if((j === 1 && i === 1) || capsString.includes(".")){
                temp += capsString.charAt(Math.floor(Math.random()*capsString.length))

            }
           
            else{
                temp += stringPossible.charAt(Math.floor(Math.random()*stringPossible.length))

            }
        }
        temp += " " 
        randomNumber(min, max);
    }
    
  
   
    // console.log(par)
    document.querySelector("p").innerHTML = temp
    console.log(number)
})