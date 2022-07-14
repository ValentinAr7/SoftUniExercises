function loveCalculator(input){

    n = Math.random();
    n = n * 100 
    
    let girl = input[0];
    let boy = input[1]

    console.log(`${girl} and ${boy} have ${n.toFixed(2)} % love`);

}

loveCalculator(["Angela", "Valentin"])