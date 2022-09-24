function sumDig(num){

    let numStr = num.toString();
    let sum = 0

    for(let i = 0; i < numStr.length; i++){
    let currenDigit = Number(numStr[i]);
        sum += currenDigit
    }

    console.log(sum);

}
sumDig(23543)