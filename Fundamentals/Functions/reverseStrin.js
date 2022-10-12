function reverseString(array){

    for(let i =0; i < array.length; i++){

        let arrayAsString = array[i].toString();
        let reversedString = arrayAsString.split("").reverse().join("")

        if(arrayAsString === reversedString){
            console.log(true);
        } else{
            console.log(false);
        }
    }

}
reverseString ([123,323,421,121])
