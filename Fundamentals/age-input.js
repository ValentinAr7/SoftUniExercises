function syntaxDemo(input){

    let age = Number(input)

    if(age <= 2){
        console.log("baby");
    } else if(age >= 3 && age <= 13){
        console.log("child");
    } else if(age >= 14 && age <= 19){
        console.log("teenager");
    }

}

syntaxDemo(20)