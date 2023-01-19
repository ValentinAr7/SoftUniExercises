function trim(str, size) {

    let trimmedStr = []
    let cutter = size - 3

    if(str.includes('...')){
    let newStr = str.substring(-3)
    console.log(newStr);   
     }

    if(str.length <= 3){
    trimmedStr = str.slice(0, size)
    console.log(trimmedStr + '...');
    return trimmedStr + '...'
   } 
    
    else if( str.length <= size){
        console.log(str);
    return str        
        } 
    
    else {
        trimmedStr = str.slice(0, cutter )
        console.log(trimmedStr + '...');
        return trimmedStr + '...'
    }


    

}

trim("Creating kata is fun", 14)
trim("He", 1)
trim("Code Wars is pretty rad", 50)
trim('Hey...', 3)
