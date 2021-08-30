// prezzo fisso del panino
var price = document.getElementById("price").value = 50;
var burgerName = document.getElementById("name-burger");
var coupon = document.getElementById("coupon").value;

var sale = 0.9;
var button = document.getElementById("btn");
// prezzo lista ingredienti

let ingredients = {
'cheese' : document.getElementById("cheese").value.checked = 2 ,
'lettuce' : document.getElementById("lettuce").value.checked = 3,
'tomato' : document.getElementById("tomato").value.checked = 1,
'egg' : document.getElementById("egg").value.checked = 3,
'mustard' : document.getElementById("mustard").value.checked = 5,
'ketchup' : document.getElementById("ketchup").value.checked = 3,
};

// aggiunta al prezzo al click del bottone

    
button.addEventListener("click", sales , priceCalc);




// function add() {
//   adds =  document.querySelector('input[type="checkbox"]:checked');
//     if (adds == true) {
        
//         console.log(adds)
   
// }
// }



function check() {
    for (let key in ingredients) {
var adds;
x = 0;
y = 0;
        function add() {
            if (document.getElementById("cheese").checked) {
              x += ingredients.cheese;
             }
    
            if (document.getElementById("lettuce").checked) {
               x += ingredients.lettuce;
                 
              }

              if (document.getElementById("tomato").checked) {
                x += ingredients.tomato;
             }

              if (document.getElementById("egg").checked) {
                x += ingredients.egg;
                 
           }

              if (document.getElementById("mustard").checked) {
                x += ingredients.mustard;
                
              }

              if (document.getElementById("ketchup").checked) {
                x += ingredients.ketchup;
                 
              }
            //   if (document.querySelectorAll('input[type="checkbox"]:not(:checked)')) {
            //     x = 20;
            // }

              else {
                  x = -1;
              }
              
              
              adds = x + y;
              return adds;
    
    }

        if (document.querySelectorAll('input[type="checkbox"]:not(:checked)')) {
            ingredient = ingredients[key] + add();
            return ingredient
        }
    }
    
    
    }



    function priceCalc() {
        for (let ingredient in ingredients) {
            ingredient = check();
        if (burgerName.value == "panino") {
            return ingredient;
        } 
        else {
            alert("Inserisci un nome al panino"); 
            break;
            }
            
            }
        }


       

    function sales() {
        if (coupon == "nnfno123" || coupon == "ononno123" ) {
            document.getElementById("price").innerHTML = price * sale + priceCalc() + " $";
        }
        else {
            document.getElementById("price").innerHTML = price + priceCalc();
     
        }
    }

    

   
    
    
        

