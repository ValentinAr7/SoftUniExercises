function addingShifted (arrayOfArrays, shift) {

    let array1 = arrayOfArrays[0]
    let array2 = arrayOfArrays[1]

    let result = []

    for(let i = 0; i < array1.length; i++){
        let num1 = array1[i]

        for(let i = 0; i < array2.length; i++){
        let num2 = array2[i]
        
        result.push(num1 + num2)
        }
        
    }


    console.log(result);
}


addingShifted ([[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]]);