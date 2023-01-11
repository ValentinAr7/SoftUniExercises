function subtract() {
    let num1 = getElementById("firstNumber").value;
    let num2 = getElementById("secondNumber").value;
    let result = getElementById("result")

    result.textContent =Number(num1) - Number(num2)
}