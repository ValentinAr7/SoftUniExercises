function storeCatalogue(input) {
  
      // Iterate over the products and add them to the groupedProducts object
    for (const product of input) {
        let [productName, price] = product.split(" : ")
        const initial = productName[0].toUpperCase()

        
    }
}
storeCatalogue(

    ['Appricot : 20.4',
     'Fridge : 1500', 
     'TV : 1499', 
     'Deodorant : 10', 
     'Boiler : 300', 
     'Apple : 1.25', 
     'Anti-Bug Spray : 15', 
     'T-Shirt : 10']
)