function catFood (input){

    let cats = Number(input[0])

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;

    let foodGrams = 0;

    for(i = 1; i < input.length; i++){
        if(foodGrams >=100 && foodGrams < 200){
            group1++
        } else if(foodGrams < 300){
            group2++
        } else if (foodGrams < 400){
            group3++
        }
    }

    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);

}

catFood(["6",
"102",
"236",
"123",
"399",
"342",
"222"])
