function products(prod){

    let sortedProducts = prod.sort()

    for(let i = 0; i < sortedProducts.length; i++){
        console.log(`${i + 1}. ${sortedProducts[i]}`);
    }

}

products(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])