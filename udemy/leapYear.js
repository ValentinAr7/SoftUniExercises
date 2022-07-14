function leapYear(input){

    year = Number(input[0])

    if(year % 4 == 0 ){
        console.log("leap year");        
    } else {
        console.log("Not a leap year");
    }

}

leapYear([2012])