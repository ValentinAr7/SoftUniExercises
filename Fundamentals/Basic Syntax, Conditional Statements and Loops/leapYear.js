function leapYear(input){

    let year = Number(input)

    if(year % 4 == 0){
        console.log("yes");
    } else if(year % 100 == 1){
    } 
    else if(year % 400 == 0){
        console.log("yes");
    } else{
        console.log("no");
    }

}

leapYear(1900)