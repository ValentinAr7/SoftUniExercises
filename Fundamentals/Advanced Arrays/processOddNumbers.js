function processOdd (array1){

    newArray = [];

    for(let i = 0; i < array1.length; i++){
        let currentNumber = array1[i]
    
        if(currentNumber % 2 !== 0){
            let oddNumbers = currentNumber += currentNumber
            newArray.push(oddNumbers);
        }
    }
    console.log(newArray.reverse());

}

processOdd([10, 15, 20, 25])