function lowestPriceCity (data){

    let result = {}

    for(let el of data){
        let [town, product, price] = el.split(" | ")
        console.log(town);
    }


}

lowestPriceCity ([
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])