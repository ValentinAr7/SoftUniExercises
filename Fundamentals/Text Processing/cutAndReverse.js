function cutAndReverse (text){

    let stringSize = text.length / 2
    let firstPart = text
    .substring(0, stringSize)
    .split("")
    .reverse()
    .join("")
    console.log(firstPart);

    let secondPart = text
    .substring(stringSize)
    .split("")
    .reverse()
    .join("")
    console.log(secondPart);



}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')