function solve(array, rotation){

    let newArray = []
    for(let i =0; i < rotation; i++){
    
    newArray.pop(array)

    }
    console.log(newArray + " " + array);


}

solve (['1',

'2',

'3',

'4'],

2)

