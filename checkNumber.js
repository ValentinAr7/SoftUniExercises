function checkNumber(input){

    num1 = Number(input[0]);
    num2 = Number(input[1]);
    
    if (num1 == 100 && num2 == 100){
        console.log("True");
    } else if (num1 + num2 == 100) {
        console.log("The sum is = 100");
    } else {
        console.log("False");
    }
}

checkNumber(["15", "85", "65"])