function sequenceK (input){

    let sequnceLenght = Number(input[0]);
    let sequenceSum = Number(input[1])

    let array1 = [];

    let firstElement = 1;
    let secondElement = firstElement
    let thirdElement = firstElement + secondElement

    

    let sequence = firstElement + secondElement + thirdElement
    array1.push(firstElement, secondElement, thirdElement, sequence)


    console.log(array1);    
    


    


}

sequenceK (6, 3)