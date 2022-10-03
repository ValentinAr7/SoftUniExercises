function bigNumber (num){

    let numIsBigger = true;
    let arr2 = [];

for(let i = 0; i < num.length; i++){
    let currentNumber = num[i]
    for(let y = currentNumber + 1; y < num.length; y++){
    if(num[i] > num[y]){
        arr2.push(num[i])
    }
    }

}
console.log(arr2);
}

bigNumber([14, 24, 3, 19, 15, 17])