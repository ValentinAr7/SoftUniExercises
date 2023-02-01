class Triathlon {

    constructor(competitionName ){

        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant (participantName, participantGender){

        if (this.participants[participantName] === undefined) {

            this.participants[participantName] = participantGender;
            //The line of code assigns a value (participantGender) to a property (participantName) of an object (this.participants). So, in this line, the value participantGender is being assigned to a property with the name participantName within the participants object. 

            return `A new participant has been added - ${participantName}`;
          } else {
            return `${participantName} has already been added to the list`;
          }
        }

        completeness (participantName, condition){
            if(this.participants[participantName] === undefined){
                throw new Error (`${participantName} is not in the current participants list`)
            }

            if(condition < 30){
                throw new Error (`${participantName} is not well prepared and cannot finish any discipline`)
            }

            let completedCount = 0
            if(condition / 30 > 3){
                return `Congratulations, ${participantName} finished the whole competition`
            }

            if(condition / 30 > 2 && condition / 30 < 3){
                completedCount = 2
                return `${participantName} could only complete ${completedCount} of the disciplines`
            } 

            if(condition / 30 > 1 && condition / 30 < 2){
                completedCount = 1
                return `${participantName} could only complete ${completedCount} of the disciplines`
            } 
            
        }

        rewarding (participantName){
            let finalistCheck = this.listOfFinalists.find(n => n.participantName == participantName)
        
        
        }

}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
