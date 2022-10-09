function oreders(drink, quantity) {

    let totalPrice = 0

    if(drink == "water"){
        totalPrice = 1 * quantity
    } 
    
    else if (drink == "coke"){
        totalPrice = 1.4 * quantity
    } 
    
    else if (drink == "coffee"){
        totalPrice = 1.50 * quantity
    } 
    
    else if (drink == "snacks"){
        totalPrice = 2 * quantity
    }


    console.log((totalPrice).toFixed(2));

}

oreders("coke", 9)