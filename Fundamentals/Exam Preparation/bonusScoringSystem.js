function bonusScoringSystem (array){


    let numberOfStudents = array.shift()
    let totalNumOfLectures = array.shift()
    let additionalBonus = array.shift()

    let newArray = []

    for(let i = 0; i < array.length; i++){
        let currentStudentAtendences = array[i]
       

        newArray.push(currentStudentAtendences / totalNumOfLectures * (5 + additionalBonus))
    

        let bonusNum = Math.ceil(newArray);
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