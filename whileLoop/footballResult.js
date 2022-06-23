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


}