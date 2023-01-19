function trim(str, size) {

    let trimmedStr = []
    let cutter = size - 3

    let lowerThanCutter = 

    if(str.length <= 3){
    trimmedStr = str.slice(0, size)
    }

    trimmedStr = str.slice(0, cutter )


console.log(trimmedStr + '...'); 


    return str;
  
}

trim("Hi", 1) //"Creating ka..."