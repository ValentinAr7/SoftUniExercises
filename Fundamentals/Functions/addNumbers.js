function addNumbers(num1, num2, num3) {

    function add(num1, num2){                       //function takes the two numbers from the general function
        let sumOfNumbers = num1 + num2              // variable to show the sign(+ - / *) and to
        return sumOfNumbers;                        // return the value as a number
    }
    let sum = add(num1, num2)                       // store the value 




    function add2(sum, num3){
        let lastSum = sum - num3
        return lastSum
    }

    let substract = add2(sum,num3)
    console.log(substract);



}

addNumbers(23, 6, 10)