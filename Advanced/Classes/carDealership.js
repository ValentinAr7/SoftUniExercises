class CarDealership{
    constructor(name){
       this.name = name;
       this.availableCars = [];
       this.soldCars = [];
       this.totalIncome = 0 
    }

    addCar (model, horsepower, price, mileage){

        horsepower = Number(horsepower)
        price = Number(price);
        mileage = Number(mileage)
        if(model == '' || horsepower < 0 || price < 0 || mileage < 0){
            throw new Error (`Invalid input!`)
        }

        let newCar = {
            model,
            horsepower,
            price,
            mileage
        }
        this.availableCars.push(newCar)
        return `"New car added: ${model} - ${horsepower} HP - ${(mileage).toFixed(2)} km - ${(price).toFixed(2)}$`

    }

}

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));
