class SummerCamp {
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500,
        }
        
        this.listOfParticipants = []
    }

    registerParticipant (name, condition, money){
        if(!this.priceForTheCamp[condition]){
            throw new Error (`Unsuccessful registration at the camp.`)
        }
        if(this.listOfParticipants.some(x => x.name == name)){
            return `The ${name} is already registered at the camp.`
        }

        if(this.priceForTheCamp[condition] < money){
            return `The money is not enough to pay the stay at the camp.`
        }

        let newList = {name,
             condition,
              power: 100,
               wins: 0
        }

        this.listOfParticipants.push(newList)
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant (name){
        let indexOfParticipnat = this.listOfParticipants.findIndex(x => x.name == name)
        
            if(indexOfParticipnat == -1){
                throw new Error (`The ${name} is not registered at the camp.`)
    
            }
        } 



    }



const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200))