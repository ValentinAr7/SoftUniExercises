function PrintandSum(startNum, endNum){

    let sum= 0;
    let output = "";

    for(let currentNumber = startNum; currentNumber <= endNum; currentNumber++){
        sum += currentNumber;
        output += `${currentNumber} `;
    }
    console.log(output);
    console.log( "Sum: " + sum);

}

PrintandSum(5,10)