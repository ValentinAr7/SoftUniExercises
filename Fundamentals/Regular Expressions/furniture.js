function furniture (input){


    let index = 0;
    let pattern = />>(?<name>)[A-Za-z]+<<(?<price>)[\d]+[\.]*[\d]+!(?<quantity>)[\d]+/g
    let totalPrice = 0;

    console.log("Bought furniture:");

    while(input[index] !== "Purchase"){

        let productRow = input[index]
        let validProducts = pattern.exec(productRow)

        while(validProducts !== null){
            const productName = validProducts.groups["name"]
            console.log(productName);

            const productPrice = validProducts.groups["price"]

            const productQuantity = validProducts.groups["quantity"]

            totalPrice += productPrice * productQuantity
        }

        index++ 
    
    }
    console.log(totalPrice);
}

furniture (['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])