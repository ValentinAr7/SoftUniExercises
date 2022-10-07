function mergeArrays(arr1, arr2) {
    let arr3 = [];

    for(let i = 0; i < arr1.length; i++){
        let currentNumber1 = arr1[i]
        arr3.push(currentNumber1)
    }
    for(let r=0; r < arr2.length; r++){
        let currentNumber2 = arr2[r];
        arr3.push(currentNumber2)
    }
    arr3.sort(function(a, b){return a - b})  
    console.log(arr3);
}

mergeArrays([1, 2, 3, 16, 5],
            [6, 7, 44, 12, 10] )