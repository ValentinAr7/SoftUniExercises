function distinctArray (array){

    let repeatingNumbers = [];

    uniqeuNumbers = []

        for (let r = 0; r < array.length; r++){

            if(!uniqeuNumbers.includes(array[r])){
                uniqeuNumbers.push(array[r])
            }
        }
    console.log(uniqeuNumbers.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])