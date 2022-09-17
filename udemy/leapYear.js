function leapYear(input){

    year = Number(input[0])

    if(year % 4 == 0 ){
        console.log("This is a leap year ");        
    } else {
        console.log("This is not a leap year");
    }

}

leapYear(["2012"])