function test(input){

text = input[0]

for(index = 0; index < text.length; index++){
    if(text.indexOf("q")){
        console.log("YesYes");
    } else {
        console.log("No");
    }


    
}
}
test(["I don't know why"])