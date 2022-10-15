function sequenceK (length, K){

    let sequnce = [1];

    for(let i = 1; i < length; i++){
        let index = Math.max(sequnce.length - K, 0)

        let lastElement = sequnce.slice(index)

        let sum = 0;

        for (const element of lastElement) {
            sum += element
        }
        sequnce.push(sum)

    }

    console.log(sequnce.join(" "));

}

sequenceK (6, 3)