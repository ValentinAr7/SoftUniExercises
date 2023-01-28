class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
        this.bought = false

    }

    newAdditions(footballPlayers){

        footballPlayers.forEach(player =>{
            let [name, age, playerValue] = player.split('/')
            age = Number(age)
            playerValue = Number(playerValue)
            
            let checkPlayerName = this.invitedPlayers.find(x => x.name == name)

            if(!checkPlayerName){
                this.invitedPlayers.push({
                   name,
                   age,
                   playerValue, 
                })
            }
        })
        let buff = [];
        this.invitedPlayers.forEach(p => buff.push(p.name))
        return `Successfully added ${buff.join(', ')}.`
    }
    

    signContract(selectedPlayer){

        let priceDifference = 0

        
            let [name, playerOffer] = selectedPlayer.split('/');
            playerOffer = Number(playerOffer)

            let selectedPlayerObject = this.invitedPlayers.find(x => x.name === name);
            if(!selectedPlayerObject){
                throw new Error (`${name} is not invited to the selection list!`)
            }

            if(this.invitedPlayers.playerValue > playerOffer){
                priceDifference = this.invitedPlayers.playerValue -= playerOffer
                throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
            }

            this.bought = true;

            if(this.bought){
                this.invitedPlayers.playerValue = 'Bought'
            return `"Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`

            }
    }



    
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));
