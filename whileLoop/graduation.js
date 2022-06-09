function graduation(input){

    let index = 0;
    let name = input[index];
    index++

    let isExcludet = false
    let sumGrade = 0;
    let badGrade = 0;
    let counter = 1;

    while(counter <= 12){
        let tempGrade = Number(input[index])
        index++

        if (tempGrade < 4){
            badGrade++
            if(badGrade > 1) {
                isExcludet = true;
                console.log(`${name} has been excluded at ${counter} grade`)
                break;
            }
            continue
        }
        sumGrade += tempGrade
        counter++;
    }
    if(!isExcludet){
        let avgGrade = sumGrade / 12
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)

    }


}

graduation(["Gosho",
"5",
"5.5",
"6",
"5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])