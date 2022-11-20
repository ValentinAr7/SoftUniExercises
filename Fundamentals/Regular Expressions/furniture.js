function furniture (input){


    let index = 0;
    let pattern = />>(?<name>)[A-Za-z]+<<(?<price>)[\d]+[\.]*[\d]+!(?<quantity>)[\d]+/g
    let totalPrice = 0;

    while(input[index] !== "Purchase"){

        let productRow = input[index]
        let validProducts = pattern.exec()
    }

}

furniture (['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])