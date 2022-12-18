function mathOperation (input) {

    let operation = input.pop()
    let num1 = input[0]
    let num2 = input[1]
    let result = 0

    switch (operation){
        case '+':
            result = num1 + num2
            console.log(result);
        break;

        case '*':
            result = num1 * num2
            console.log(result);

        break;

        case '-':
        result = num1 - num2
        console.log(result);

        break;

        case '/':
            result = num1 / num2
            console.log(result);
            break;

    }

}

mathOperation ([3, 5.5, '*'])