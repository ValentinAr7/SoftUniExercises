function solve (array, element){

    newArray = []

    for (let i = 0; i < array.length; i+= element){

        console.log(array[i]);
    }

}

solve (['dsa', 'asd', 'test', 'tset'], 2)