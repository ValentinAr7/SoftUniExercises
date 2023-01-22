function intToRoman(num) {

    //Check if number is in the range between 1 and 3999
    //check the number is integer
    //check the number is whole number
    if (num < 1 || num > 3999 || typeof num !== 'number' || num % 1 !== 0) {
        return "Invalid input. Please enter a positive integer between 1 and 3999.";
    }


    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let roman = "";
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            roman += symbols[i];
            num -= values[i];
        }
    }
    return roman
}

intToRoman(1990)