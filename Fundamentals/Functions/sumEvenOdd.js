function sumEvenOdd(num){

    let evenSum = 0;
    let oddSum = 0;


    for(let i = 0; i < num.length; i++){
    let currentNumber = Number(num[i])

    if(currentNumber % 2 === 0){
        evenSum += currentNumber
    } else{
        oddSum += currentNumber
    }
    }
    console.log(evenSum);
    console.log(oddSum);
}

sumEvenOdd("1587436")