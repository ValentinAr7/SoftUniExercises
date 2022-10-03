function bigNumber (num){

    
    let arr2 = [];

for(let i = 0; i < num.length; i++){
    let currentNumber = num[i]
    let isBigger = true
    for(let y = i + 1; y < num.length; y++){
    if(currentNumber > num[y]){
        isBigger = false;
    }
    }
    if(isBigger){
        arr2.push(num[i])
    }
}
console.log(arr2);
}

bigNumber([14, 24, 3, 19, 15, 17])