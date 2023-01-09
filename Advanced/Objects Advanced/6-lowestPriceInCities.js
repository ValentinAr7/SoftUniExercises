function lowestPrice (input){

    let products = {}

    let info = input.map(el =>{
        let [town, product, priceAsString] = el.split(" | ")
        let price = Number(priceAsString)

        if(products.filter(x => x.product === product).length > 0){

            let obj = products.find(x => x.product === product);

        if(obj.price > Number(price)){
            obj.price = Number(price);
            obj.town = town
        }
        }
    console.table(res);

    })



}

lowestPrice ([
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'
])