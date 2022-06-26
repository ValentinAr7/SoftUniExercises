function puppyCare (input){

    let index = 0;
    let dogFoodInKg = Number(input[index])
    index++

    let dogFoodInG = dogFoodInKg * 1000

    let command = input[index];
    index++

    while(command !== "Adopted"){

        let food = Number(command);

        dogFoodInG -= food

        command = input[index];
        index++
    }
}