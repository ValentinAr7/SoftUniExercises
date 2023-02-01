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
            
        }

}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.completeness("George", 20));
