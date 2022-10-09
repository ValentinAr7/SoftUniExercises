function oreders(drink, quantity) {

    let coffee = 1.5
    let water = 1
    let coke = 1.4
    let snacks = 2.0

    if (drink = coffee) {
        totalPrice = coffee * quantity

    } else if (drink = water) {
        totalPrice = water * quantity

    } else if (drink = coke) {
        totalPrice = coke * quantity
        
    } else if (drink = snacks) {
        totalPrice = snacks * quantity
    }

    console.log((totalPrice).toFixed(2));

}

oreders("water", 9)