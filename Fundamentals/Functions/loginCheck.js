function loginCheck(password) {
    let passwordLength = password.length

    for (let i = 0; i < passwordLength; i++) {
        let currentChar = password[i]
    }

    let onlyLettersAndDigits = true
    if ("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8}$"){
    } else {
        console.log("Password must consist only of letters and digits");
        console.log("Password must have at least 2 digits");
    }
    
    if (password.length < 6) {
        console.log("Password must be between 6 and 10 characters");
    } else {
        console.log("Succesfull login");
    }


}
loginCheck('MyPass123')