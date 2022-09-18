function catFood (input){

    let cats = Number(input[0])

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;

        let price = 0;



    for(i = 1; i < input.length; i++){
        let foodGrams = Number(input[i]);
        if(foodGrams >= 100 && foodGrams < 200){
            group1++
        } else if (foodGrams < 300){
            group2++
        } else if (foodGrams < 400){
            group3++
        }
        price = (price + Number(input[i]))
}

let grams = price / 1000
let price2 = grams * 12.45

console.log(`Group 1: ${group1} cats.`);
console.log(`Group 2: ${group2} cats.`);
console.log(`Group 3: ${group3} cats.`);
console.log(`Price for food per day: ${(price2).toFixed(2)} lv.`);

}
catFood(["6",
"108",
"236",
"123",
"399",
"342",
"222"])
