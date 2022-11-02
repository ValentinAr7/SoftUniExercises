function bonusScoringSystem (array){


    let numberOfStudents = Number(array.shift())
    let totalNumOfLectures = Number(array.shift())
    let additionalBonus = Number(array.shift())
    let newArray = []


    for(let i = 0; i < array.length; i++){
        let currentStudentAtendences = array[i]
       

        newArray.push(currentStudentAtendences / totalNumOfLectures * (5 + additionalBonus))
    


    }
    let arrayNumbers = newArray.map(Number)
    console.log(Math.ceil(Math.max.apply(Math, arrayNumbers))); 
}

bonusScoringSystem ([5,      // number of students
    25,                     // number of lectures
    30,                     //additional bonus

    12,                     // count of attendence for each lecture
    19,
    24,
    16,
    20
])