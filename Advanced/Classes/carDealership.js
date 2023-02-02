class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0
    }

    addCar(model, horsepower, price, mileage) {

        horsepower = Number(horsepower)
        price = Number(price);
        mileage = Number(mileage)
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error(`Invalid input!`)
        }

        let newCar = {
            model,
            horsepower,
            price,
            mileage
        }
        this.availableCars.push(newCar)
        return `New car added: ${model} - ${horsepower} HP - ${(mileage).toFixed(2)} km - ${(price).toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {

        let foundCar = this.availableCars.find(x => x.model == model)

        if (!foundCar) {
            throw new Error(`${model} was not found!`)
        }

        let mileageDiff = foundCar.mileage - desiredMileage;
        let price = foundCar.price;

        if (mileageDiff > 0) {
            if (mileageDiff <= 40000) {
                price *= 0.95;
            } else {
                price *= 0.9;
            }
        }

        let soldCar = {
            model: foundCar.model,
            horsepower: foundCar.horsepower,
            soldPrice: price
        };

        this.soldCars.push(soldCar);

        this.availableCars = this.availableCars.filter(c => c.model != model);
        //it returns true for each element in the array for which the model property is not equal to the model argument passed to the sellCar method. The filter method returns a new array with all the elements for which the callback function returned true.
        this.totalIncome += price;
        return `${model} was sold for ${price.toFixed(2)}$`;
    }

    currentCar() {
        let result = ''
        for (let car of this.availableCars) {
            result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`
        }
        return result.length ? result.trim() : "There are no available cars";
    }

    salesReport(criteria) {

        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }

        //order by mileage or horsepower
        this.soldCars.sort((a, b) => {
            if (criteria === "horsepower") {
                return b.horsepower - a.horsepower;
            } else {
                return a.model.localeCompare(b.model);
            }
        });

        //print report
        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        result += `-${this.soldCars.length} cars sold:\n`;

        for (const car of this.soldCars) {
            result += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`;
        }

        return result.trim();

    }

}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



