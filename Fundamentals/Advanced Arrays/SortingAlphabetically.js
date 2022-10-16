function products(prod){

    let sortedProducts = prod.sort()

    for(let i = 0; i < sortedProducts.length; i++){
        console.log(`${i + 1}. ${sortedProducts[i]}`);
    }

    // ${i + 1}  ------ Numbering, starting from i[0], and increase with 1 for ever other product
    // . ${sortedProducts[i]} ------ print the product for every loop
}

products(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])