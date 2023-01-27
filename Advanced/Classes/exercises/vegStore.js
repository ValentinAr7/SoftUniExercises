class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = []
    }

    loadingVegetables (vegetables){

        let vegStore = {
            type,
            quantity,
            price,
        }


        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(' ')
            let currentProduct = this.availableProducts.some(x => x.type === type)
            if(!currentProduct){
                this.availableProducts.push({
                    type,
                    quantity: Number(quantity),
                    price: Number(price)
                })
            }
        });





        // let uniqueVeg = this.vegetables.some(x => x.type == type)
        
        // this.availableProducts.push(uniqueVeg);
        // console.log(availableProducts);

    }


}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta,Sofia");

// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8",
// "Celery 5.5 2.2", "Celery 0.5 2.5"]));