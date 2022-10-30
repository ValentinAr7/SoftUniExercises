function object (list){

    let employeeList = {};

    list.forEach(person => {
        employeeList[person] = person.length
        console.log(employeeList);
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