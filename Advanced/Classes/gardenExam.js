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

    }

    harvestPlant(plantName) {

    }

    generateReport(){

    }

}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('olive', 50));
