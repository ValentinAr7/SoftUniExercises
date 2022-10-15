function negativePositive (numbers){

    let orderedNumbers = [];

for(let i = 0; i < numbers.length; i++){
    let currentNumber = Number(numbers[i])

    if(currentNumber < 0){
        orderedNumbers.unshift(currentNumber)
    }    else {
        orderedNumbers.push(currentNumber)
    }
}

for (const num of orderedNumbers) {
    console.log(num);
}
}
negativePositive(['7', '-2', '8', '9'])