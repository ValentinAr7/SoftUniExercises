class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {

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

}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.loadingStore('TV', 40, 500));
