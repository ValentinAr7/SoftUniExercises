function syntaxDemo(input){

    let age = Number(input)

    if(age <= 2 && age >= 0){
        console.log("baby");
    } else if(age >= 3 && age <= 13){
        console.log("child");
    } else if(age >= 14 && age <= 19){
        console.log("teenager");
    } else if(age >= 20 && age <= 65){
        console.log("adult");
    } else if(age > 65){
        console.log("elder");
    } else{
        console.log("out of bounds");
    }
}

syntaxDemo(-4)