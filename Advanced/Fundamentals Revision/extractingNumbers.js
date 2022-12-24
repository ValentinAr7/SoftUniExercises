function extractingNumber (array){

    let res = []
    firstNum = array.shift()
    let currentBiggestNum = 0

    for (let i = 0; i < array.length; i++){
        let currentNumber = array[i]
        if(currentNumber > currentBiggestNum){
            res.push(currentNumber)
            currentBiggestNum = currentNumber
        }
    }
console.log(firstNum  + ' ' + res);

}

extractingNumber ([1,


    3,
    8,
    4,
    10, 12, 3, 2, 24])