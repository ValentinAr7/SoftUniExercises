class OnlineShop{
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
        this.products = products;
        this.sales = sales;
    }

    loadingStore(product, quantity, spaceRequired){
        
        if(this.warehouseSpace > spaceRequired){
            throw new Error (`Not enough space in the warehouse.`)
        }

        let productObj = {
            product,
            quantity,
        }

        this.products.push(productObj)
        

    }


}