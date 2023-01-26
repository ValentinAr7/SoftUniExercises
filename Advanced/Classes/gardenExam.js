class Garden {
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = []
    }

    addPlant (plantName, spaceRequired){
        if(this.spaceAvailable < spaceRequired){
            throw new Error (`Not enough space in the garden.`)
        }
        this.spaceAvailable -= spaceRequired

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        })
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity){
        if(quantity <= 0){
            throw new Error (`The quantity cannot be zero or negative.`)
        }

        const plants = this.plants.find(p => p.plantName == plantName)
        if(plants == undefined){
            throw new Error (`There is no ${plantName} in the garden.`)
        }

        if(plants.ripe == true){
            throw new Error (`The ${plantName} is already ripe.`)
        }
        
        plants.ripe = true;
        plants.quantity += quantity

        if(quantity == 1){
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened`
        }




    }

    harvestPlant(plantName) {

    }

    generateReport(){

    }

}



const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
