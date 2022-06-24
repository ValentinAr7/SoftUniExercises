function foodForDog(input){

    let foodKg = Number[input[0]];
    
    let index = 1;
    let dogFood = input[index];
    index++

    let foodConvert = dogFood * 1000
    
    let command = input[index]
    index++

    while(command !== "Adopted"){
        let food = Number[command]

        foodConvert -= food
        command = input[index]
        index++
    }

    if(foodConvert >= 0){
        console.log(`Food is enough: Leftovers ${foodConvert}`);
    }   else{
        console.log(`Food is not enough: You need ${Math.abs(foodConvert)}`);
    }

}