function fruits (input){

    let [type, weight, price] = input

    let totalPrice = weight * price
    
    console.log(`I need ${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);
    
}

fruits(['orange', 2500, 1.80])