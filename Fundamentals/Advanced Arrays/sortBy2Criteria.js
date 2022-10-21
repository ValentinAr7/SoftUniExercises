function sortBy2Criteria(array) {


    currentName = array.sort((a, b) => a.length - b.length || a.localeCompare(b))

    currentName.forEach(element => {
        console.log(element);
    });

}

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])