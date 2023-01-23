class Garden {
    constructor (spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = storage;
    }

    addPlant(plantName, spaceRequiered){
        if(this.spaceAvailable < spaceRequiered){
            throw new Error('Not enough space in the garden.')
        }
        this.spaceAvailable -= spaceRequiered;
        this.plants.push({
            plantName,
            spaceRequiered,
            ripe: false,
            quantity: 0
        })

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity){
        if(quantity <= 0){
            throw new Error('The quantity cannot be zero or negative.')
        }
        const plant = this.plants.find(p => p.plantName == plantName);
        if(plant == undefined){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(plant.ripe){
            throw new Error (`The ${plantName} is already ripe.`);
        }
        plant.ripe = true;
        plant.quantity += quantity;

        if(quantity == 1){
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;

        }
    }

    harvesrPlant (plantName){
        const plantIndex = this.plants.findIndex(p.plantName == plantName);
        if(plantIndex == -1){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        const plant = this.plants[plantIndex];
        if(plant.ripe == false){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.plants.splice(plantIndex, 1);
        this.storage.push({
            plantName,
            quantity: plant.quantity
        });
        this.spaceAvailable += plant.spaceRequiered;

        return `The ${plantName} has been successfully harvested.`;
    }
}