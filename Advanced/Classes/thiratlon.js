class Triathlon {

    constructor(competitionName ){

        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant (participantName, participantGender){

        const existParticipant = this.participants.find(p => p.participantName = participantName)

        let participant = {
            participantName: participantGender
        }

        if(!existParticipant){
            this.participants.push(participant)
            return `A new participant has been added - ${participantName}`
        }
    }

}