function sortBy2Criteria (array){

    for (let i = 0; i < array.length; i++){
        let currentName = array[i]

        currentName = array.sort((a,b)=> a.length - b.length)
        console.log(currentName.join(" "));

    }

}

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])