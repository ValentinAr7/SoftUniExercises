function newloop(input){

    a = Number(input[0])
    b = Number(input[1])

    result = a * b

    

    if(result >= 46){
        
        console.log("Your number is bigger than 50");
        console.log("Thank you");
    } else{
        console.log("Increase the number")
    }
}

newloop([3, 10, 15])