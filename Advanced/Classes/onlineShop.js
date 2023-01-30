class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {


        quantity = Number(quantity)
        spaceRequired = Number(spaceRequired)
        if (this.warehouseSpace < spaceRequired) {
            throw new Error(`Not enough space in the warehouse.`)
        }

        let productObj = {
            product,
            quantity,
        }

        this.products.push(productObj)
        this.warehouseSpace -= spaceRequired

        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity){

        minimalQuantity = Number(minimalQuantity)

        if(!this.products.find(p => p.product == product)){
            throw new Error (`There is no ${product} in the warehouse.`)
        }

        if(minimalQuantity <= 0){
            throw new Error (`The quantity cannot be zero or negative.`)
        }

        if(this.products.quantity >= minimalQuantity){
            return `You have enough from product ${product}.`
        }

        this.products.quantity == minimalQuantity
        let difference = this.products.quantity - minimalQuantity

        return `You added ${difference} more from the ${product} products.`
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.quantityCheck('TV', 40,));

