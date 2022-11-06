//PROGRAMMING FUNDAMENTALS WITH JAVASCRIPT - МАЙ 2022
//Exam Preparation

function computerStore(data) {

    let totalPrice = 0
    let command = data.pop()
    let partPrices = data.map(Number)


    //Special clients discounts
    let specialTaxes = 0
    let finalPrice = 0
    let additionalDiscount = 0
    let receiptPriceSpecial = 0


    //Regular clients discounts
    let regularTaxes = 0
    let finalPriceNoDiscount = 0
    let receiptPriceRegular = 0

    for (let i = 0; i < partPrices.length; i++) {
        let currentPart = partPrices[i]
        if(currentPart < 0){
            console.log("Invalid price!");
            continue
        } 

        totalPrice += partPrices[i]

    }


    //Special clients discounts 
    if (command === "special") {
        specialTaxes = totalPrice * 0.2
        finalPrice = totalPrice + specialTaxes
        additionalDiscount = finalPrice * 0.1
        receiptPriceSpecial = finalPrice - additionalDiscount

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${(totalPrice).toFixed(2)}$`);
        console.log(`Taxes: ${(specialTaxes).toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${(receiptPriceSpecial).toFixed(2)}$`)

        if(receiptPriceSpecial === 0){
            console.log("Invalid order");
        }

        //Regular clients discounts
    } else if (command === "regular") {
        regularTaxes = totalPrice * 0.2
        finalPriceNoDiscount = totalPrice + regularTaxes
        receiptPriceRegular = totalPrice + regularTaxes
        
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${(totalPrice).toFixed(2)}$`);
        console.log(`Taxes: ${(regularTaxes).toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${(receiptPriceRegular).toFixed(2)}$`)

    }

   


}

computerStore([
    "1023",
    "15",
    "-20",
    "-5.50",
    "450",
    "20",
    "17.66",
    "19.30",
    "regular",
])