function combination (input){

        let startNumber = Number(input[0]);
        let endNumber = Number(input[1]);
        let magicNumber = Number(input[2]);

        isFinished = false

    for(let x = startNumber; x <= endNumber; x++){
        for(let y = startNumber; y <= endNumber; y++){

            if(x + y === magicNumber){
                console.log(x + y);
                isFinished = true;
                break;
            }
        }
        if(isFinished){
            break;
        }
    }

}       
    combination(["1", "10", "5"])