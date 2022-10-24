function softUniReception (array){

    let teacher1 = Number(array.shift())
    let teacher2 = Number(array.shift())
    let teacher3 = Number(array.shift())

    let studentsCount = Number(array.shift())

    let studentsPerHour = teacher1 + teacher2 + teacher3

    let hours = 0
    

    while(studentsCount > 0){
        studentsCount -= studentsPerHour
        hours++

        if( hours % 4 == 0){
            hours++
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['1','2','3','45'])