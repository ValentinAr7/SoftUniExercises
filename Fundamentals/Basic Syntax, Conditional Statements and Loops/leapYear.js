function leapYear(input){

    let year = Number(input)

    if(year % 4 == 0 && year % 100 == 1){
        console.log("yes");
    } else if(year % 400 == 0){
        console.log("yes");
    } else{
        console.log("no");
    }

}

leapYear(1984)