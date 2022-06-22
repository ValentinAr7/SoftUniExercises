function combination (input){

        let startNumber = Number(input[0]);
        let endNumber = Number(input[1]);
        let magicNumber = Number(input[2]);

        let counter = 0;

        isFinished = false

    for(let x = startNumber; x <= endNumber; x++){
        for(let y = startNumber; y <= endNumber; y++){

            counter++

            if(x + y === magicNumber){
                console.log(`Combination ${counter}: ${x} + ${y} = ${magicNumber}`)
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