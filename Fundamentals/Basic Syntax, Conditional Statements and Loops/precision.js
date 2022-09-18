function syntaxDemo(number, precision){

    if(precision > 15){
        precision = 15;
    }

    let finalNumber = number.toFixed(precision);

    console.log(parseFloat(finalNumber));
}

syntaxDemo(10.5,3);