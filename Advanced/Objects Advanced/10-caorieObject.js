function calorieObject (arrayOfStrings){

    let obj = {

    }

    for(let i = 0; i < arrayOfStrings.length; i+=2){
        let product = arrayOfStrings[i]
        let calories = arrayOfStrings[i+1]
        obj[product] = calories
    }
console.log(obj);
}

calorieObject (
['Yoghurt', '48', 'Rise', '138',
'Apple', '52']
)