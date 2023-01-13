function reverseWords (text){

    let arrayOfWords = text
    .split(" ")
    .reverse()

    return arrayOfWords.join(" ")

}

reverseWords ("The greatest victory is that which requires no battle")