class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];

    }

    newAdditions(footballPlayers){

        footballPlayers.forEach(player =>{
            let [name, age, playerValue] = player.split('/')
            
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


        selectedPlayer.forEach(sign =>{
            let [name, playerOffer] = sign.split('/');
        })

    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));
