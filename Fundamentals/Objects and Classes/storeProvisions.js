function storeProvision (currentStock, orderedStock){

let totalStore = {}


    for(let i =0; i < currentStock.length; i+=2){
        let currentIndex = currentStock[i]
        totalStore[currentIndex] = Number(currentStock[i + 1])
    }
    for(let i = 0; i <orderedStock.length; i+=2){
        let currentIndex = orderedStock[i]

        if(!totalStore.hasOwnProperty(currentIndex)){
            totalStore[currentIndex] = 0
        }

        totalStore[currentIndex] += Number(orderedStock[i + 1])
    }
        
        for (const product in totalStore) {
            console.log(`${product} -> ${totalStore[product]}`);
        }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    


    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])