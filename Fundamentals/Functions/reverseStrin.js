function reverseString(array){

    for(let i =0; i < array.length; i++){

        let arrayAsString = array[i].asString();
        let reversedString = arrayAsString.split().reverse().join("")
    }

}
reverseString ([123,323,421,121])
