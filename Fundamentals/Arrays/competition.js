function points(games) {

    let totalPoint = 0;

    for(let i = 0; i < games.length; i++){
        let currentScore = games[i];
        let homeTeamScore = currentScore[0]
        let awayTeamScore = currentScore[2]
        
        if(homeTeamScore > awayTeamScore){
            totalPoint = totalPoint + 3
        } else if(homeTeamScore === awayTeamScore){
            totalPoint = totalPoint + 1
        } 
    }

    console.log(totalPoint);
    
  }
  points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])