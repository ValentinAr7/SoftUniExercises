function equalNumber (array){

    let numbersInRow = 0;
    for(let i = 0; i < array.length; i++){
        let currentNumber = array[i];

        if(currentNumber === (array[i] + 1)){
            numbersInRow++
        }
    }
console.log(numbersInRow);

}

equalNumber([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])