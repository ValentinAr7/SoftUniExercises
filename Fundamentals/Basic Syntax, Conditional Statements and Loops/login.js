function login(input){

    username = input[0]
    password = input [1]

    userInput = ""
    
    for(let login = 1; login <= 3; login++){
        if(userInput == password){
            console.log(`Welcome ${username}`);
        } else{
            console.log(`Invalid username or password`);
        }
    }

}
login(['Acer','login','go','let me in','recA'])