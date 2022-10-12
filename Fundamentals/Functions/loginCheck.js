function loginCheck(password){
    let passwordLength = password.length
    for(let i = 0; i < passwordLength; i++){
        
        if(password.length < 6 ){
            console.log("Password must be between 6 and 10 characters");
        } else{
            console.log("Succesfull login");
        }
    }


}
loginCheck(['loiNt5g'])