function bonusScoringSystem (array){


    let numberOfStudents = array.shift()
    let totalNumOfLectures = array.shift()
    let additionalBonus = array.shift()
    let totalBonus = 0

    for(let i = 0; i < array.length; i++){
        let currentStudentAtendences = array[i]

        totalBonus = currentStudentAtendences / totalNumOfLectures * (5 + additionalBonus)
        console.log(Math.ceil(totalBonus));

    }

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