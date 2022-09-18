function MultiplicationTable(number){

    let output = 0
    for(let i = 1; i <= 10; i++){

        output = number * i
        console.log(`${number} X ${i} = ${output}`  );
    }

}

MultiplicationTable(5)