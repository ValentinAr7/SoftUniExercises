function schoolGrade(input) {

    let grade = Number(input[0]);

    if (grade < 3.00) {
        console.log(`Fail (${grade.toFixed(2)})`);
    } else if (grade >= 3.00 && grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    }
    else if (grade >= 3.50 && grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.50 && grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.50 && grade < 6.00){
        console.log(`Excelent (${grade.toFixed(2)})`);
    }
}

schoolGrade(3.33)
