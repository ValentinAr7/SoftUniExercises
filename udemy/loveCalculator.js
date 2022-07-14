function loveCalculator(input){

    n = Math.random();
    n = n * 100 
    
    let girl = input[0];
    let boy = input[1]

    if(n >= 50){
    console.log("LOVE IS IN THE AIR");
    console.log(`${girl} and ${boy} have ${n.toFixed(2)} % love`);
    } else{
        console.log("You are not a perfect match");
    console.log(`${girl} and ${boy} have ${n.toFixed(2)} % love`);

    }
}

loveCalculator(["Angela", "Valentin"])