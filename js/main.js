// prezzo fisso del panino
var price = document.getElementById("price").value = 50;
var burgerName = document.getElementById("name-burger");
var coupon = document.getElementById("coupon").value;

var sale = 0.9;
var button = document.getElementById("btn");
// prezzo lista ingredienti

let ingredients = {
cheese : document.getElementById("cheese").value.checked = 2 ,
lettuce : document.getElementById("lettuce").value.checked = 3,
tomato : document.getElementById("tomato").value.checked = 1,
egg : document.getElementById("egg").value.checked = 3,
mustard : document.getElementById("mustard").value.checked = 5,
ketchup : document.getElementById("ketchup").value.checked = 3,
}

// aggiunta al prezzo al click del bottone
function check() {
    for (var key in ingredients) {
        if (Object.hasOwnProperty.call(ingredients, key)) {
            ingredient = ingredients[key];
            return ingredient
        }
    }
       
    
    
    }
 
button.addEventListener("click", priceCalc , check() , sales());


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
            document.getElementById("price").innerHTML = price * sale;
        }
        else {
            document.getElementById("price").innerHTML = price + priceCalc();
     
        }
    }

   
    
    
        

