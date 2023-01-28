class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = []
    }

    loadingVegetables(vegetables) {

        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(' ')
            quantity = Number(quantity)
            price = Number(price)

            let currentProduct = this.availableProducts.find(x => x.type === type)


            if (!currentProduct) {
                this.availableProducts.push({
                    type,
                    quantity,
                    price
                })
            } else {
                currentProduct.quantity += quantity
                if (currentProduct.price < price) {
                    currentProduct.price == price
                }
            }
        });
        let buff = [];
        this.availableProducts.forEach(product => buff.push(product.type))
        return `Successfully added ${buff.join(', ')}`
    }

    buyingVegetables(selectedProducts) {

        let totalPrice = 0

        selectedProducts.forEach(product => {
            let [type, quantity] = product.split(' ')

            let currentProduct = this.availableProducts.some(x => x.type == type)
            if (!currentProduct) {
                throw new Error`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`
            }


            if (currentProduct.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            totalPrice += quantity * currentProduct.price
            currentProduct.quantity -= quantity
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8",

    "Celery 5.5 2.2", "Celery 0.5 2.5"]));

console.log(vegStore.buyingVegetables(["Okra 1"]));

console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]))