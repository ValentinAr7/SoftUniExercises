function easterCompetitions(input){

    let index = 0;
    let easterBread = Number(input[index]);
    index++

    for(let i = 0; i <easterBread; i++){
        let name = input[index];
        index++
        let command = input[index];
        index++

        let tempSumPoints = 0;

        while(command !== "Stop"){
            let point = Number(command);
            tempSumPoints += point
        }
    }
}