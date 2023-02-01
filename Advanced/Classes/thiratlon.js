class Triathlon {

    constructor(competitionName ){

        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant (participantName, participantGender){

        if (this.participants[participantName] === undefined) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
          } else {
            return `${participantName} has already been added to the list`;
          }
        }

}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));
