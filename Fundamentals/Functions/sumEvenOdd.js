function sumEvenOdd(num){

    let evenSum = 0;
    let oddSum = 0;


    for(let i = 0; i < num.length; i++){
    let currentNumber = num[i]
    console.log(currentNumber);

    if(currentNumber % 2 === 0){
        evenSum += currentNumber
    }
    }
    console.log(evenSum);
}

sumEvenOdd("1000436")