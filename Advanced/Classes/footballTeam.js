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

            if(!checkPlayer){
                this.invitedPlayers.push({
                   name,
                   age,
                   playerValue, 
                })
            }
        })

    }

}

let fTeam = new footballTeam("Barcelona", "Spain");
 console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
