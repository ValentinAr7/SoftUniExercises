function addNumbers(num1, num2, num3) {

    function add(num1, num2){
        let sumOfNumbers = num1 + num2
        return sumOfNumbers;
    }
    let sum = add(num1, num2)

    function add2(sum, num3){
        let lastSum = sum - num3
        return lastSum
    }

    let substract = add2(sum,num3)
    console.log(substract);



}

addNumbers(23, 6, 10)