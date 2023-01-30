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
        this.warehouseSpace -= Number(spaceRequired)

        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {

        minimalQuantity = Number(minimalQuantity)

        let foundProduct = this.products.find(p => p.product === product)
        if (!foundProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }

        if (foundProduct.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`
        }

        let difference = minimalQuantity - foundProduct.quantity
        foundProduct.quantity = minimalQuantity

        return `You added ${difference} more from the ${product} products.`
    }

    sellProduct(product) {
        const haveProduct = this.products.find(s => s.product === product)
        if (!haveProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        let salesObj = this.sales.find(s => s.product === product) || {
            product,
            sales: 0
        }
        haveProduct.quantity--
        salesObj.sales++
        this.sales.push(salesObj)

        return `The ${product} has been successfully sold.`
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error(`There are no sales today!`)
        }

        let output = `You sold ${this.sales.length} products today!\nProducts in the warehouse:\n`;
        for (let product of this.products) {
          let sales = this.sales.find(s => s.product === product.product);
          let quantityLeft = product.quantity - (sales ? sales.sales : 0);
          output += `${product.product} - ${quantityLeft} more left\n`;
        }
        
        return output;
      }
    }



const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


