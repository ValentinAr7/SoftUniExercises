function storeProvision (currentStock, orderedStock){

let totalStore = {}


    for(let i =0; i < currentStock.length; i+=2){
        let currentIndex = currentStock[i]
        totalStore[currentIndex] = Number(currentStock[i + 1])
    }
    for(let i = 0; i <orderedStock.length; i+=2){
        let currentIndex = orderedStock[i]
        totalStore[currentIndex] = currentIndex[i + 1]
    }
        
        for (const key in totalStore) {
            console.log(key);
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