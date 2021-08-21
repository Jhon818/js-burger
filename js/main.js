// prezzo fisso del panino
var price = document.getElementById("price").value = 50;
var burgerName = document.getElementById("name-burger");
var coupon = [
    "fwohfowhfwohf123",
    "ddajdsajdps123"
];
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
    if (ingredients.cheese.checked == true) {
        ingredient = ingredients[key];
        return parseInt(ingredient);
    }
    
    }
  
button.addEventListener("click", priceCalc);


    function priceCalc() {
        for (let key in ingredients) {
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

  

    document.getElementById("price").innerHTML = price + priceCalc();

    // if (coupon === "fwohfowhfwohf123" || coupon === "ddajdsajdps123" ) {
    //     price = price * sale;
    // }
     
        

