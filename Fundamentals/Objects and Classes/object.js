function object (list){

    let employeeList = {}

    array.forEach(person => {
        employeeList[person] = person.length
    });

    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }

}

object([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])