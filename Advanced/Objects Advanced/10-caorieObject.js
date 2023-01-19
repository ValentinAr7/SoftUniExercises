function calorieObject (arrayOfStrings){

    let obj = {
        productName: [],
        calories: []
    }

    for(let i = 0; i < arrayOfStrings.length; i++){
        if(arrayOfStrings[i] % 2 == 0){
            
        } else { 
            obj.productName.push(arrayOfStrings[i])
        }
    }

}

calorieObject (
['Yoghurt', '48', 'Rise', '138',
'Apple', '52']
)