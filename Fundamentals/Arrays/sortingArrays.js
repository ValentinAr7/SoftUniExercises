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

    arr3.sort(function(a, b){return a - b})   //sorting numbers in asacending order
    console.log(set(arr3)); // remove duplicate numbers
}

mergeArrays([1, 2, 2, 16, 5],
            [6, 7, 44, 12, 10] )


    
    // function mergeArrays(arr1, arr2) {
    // return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
    // }