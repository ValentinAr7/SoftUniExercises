function bonusScoringSystem (array){


    let numberOfStudents = array.shift()
    let totalNumOfLectures = array.shift()
    let additionalBonus = array.shift()

    for(let i = 0; i < array.length; i++){
        let currentStudentAtendences = array[i]
        let totalBonus = 0

        totalBonus = currentStudentAtendences / totalNumOfLectures * (5 + additionalBonus)
        let bonusNum = Math.ceil(totalBonus);
        console.log(Math.max(bonusNum));
    }

    // let max = Math.max(totalBonus)
    // console.log(max);

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