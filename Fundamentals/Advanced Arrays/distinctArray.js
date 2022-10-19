function distinctArray (array){

    let repeatingNumbers = [];

    for (let i = 0; i < array.length; i++){
        let currentNumber = array[i]

        for (let r = 0; r < array.length; r++){
            let repeatingNum = array[r];

            if(repeatingNum == currentNumber){
                repeatingNumbers.push(repeatingNum)
                console.log(repeatingNumbers);

            }
        }

    }

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])