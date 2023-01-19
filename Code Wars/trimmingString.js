function trim(str, size) {

    let trimmedStr = []
    let cutter = size - 3

    if(str.length <= 3){
    trimmedStr = str.slice(0, size)
    } else {
        trimmedStr = str.slice(0, cutter )
    }



console.log(trimmedStr + '...'); 


    return str;
  
}

trim("Hi", 1) //"Creating ka..."