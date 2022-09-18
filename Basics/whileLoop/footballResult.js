function footballResult (input){

    let firstGame = input[0];
    let socndGame = input[1];
    let thirdGame = input[2];

    let winCount = 0;
    let lostCount = 0;
    let drawCount = 0;

    let teamA = Number(firstGame[0]);
    let teamB = Number(firstGame[2]);

    if(teamA > teamB){
        winCount++
    } else if(teamA< teamB){
        lostCount++
    } else{
        drawCount++
    }

    teamA = Number(socndGame[0]);
    teamB = Number(socndGame[2]);

    
    if(teamA > teamB){
        winCount++
    } else if(teamA< teamB){
        lostCount++
    } else{
        drawCount++
    }


    teamA = Number(thirdGame[0]);
    teamB = Number(thirdGame[2]);

    
    if(teamA > teamB){
        winCount++
    } else if(teamA< teamB){
        lostCount++
    } else{
        drawCount++
    }

    console.log(`Team won ${winCount} games.`);
    console.log(`Team lost ${lostCount} games.`);
    console.log(`Team draw ${drawCount} games.`);

}

footballResult(["3:1", "1:1", "2:2"])