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
            throw new Error('The quantity cannot be zero or negative')
        }
        const plant = this.plants.find(p => p.plantName == plantName);
        
    }
}