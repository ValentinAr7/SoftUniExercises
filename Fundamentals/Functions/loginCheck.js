function loginCheck(password) {
    let passwordLength = password.length

    for (let i = 0; i < passwordLength; i++) {
        let currentChar = password[i]
    }

    let onlyLettersAndDigits = ""
    if (password.match("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8}$")){
        console.log(password);
    } else {
        console.log("Password must consist only of letters and digits");
    }

    if(password)
    

    if (password.length < 6) {
        console.log("Password must be between 6 and 10 characters");
    } else {
        console.log("Succesfull login");
    }


}
loginCheck('@lo7777g')