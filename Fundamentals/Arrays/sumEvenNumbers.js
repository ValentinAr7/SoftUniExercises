function sumEvenNumbers (numbers){

let sum = 0;

for(let numberText of numbers){

    let number = Number(numberText)

    if(number % 2 == 0 ){
        sum += number
    }
}
console.log(sum);
}

sumEvenNumbers['2','4','6','8','10']