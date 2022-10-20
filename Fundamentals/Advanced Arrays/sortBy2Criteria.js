function sortBy2Criteria (array){

    let currentName = array.sort((a,b)=> a.length - b.length)
    console.log(currentName);


    // for (let i = 0; i < array.length; i++){
    //     let currentName = array[i]

    //     currentName = array.sort((a,b)=> a.length - b.length)
    //     console.log(currentName);

    // }

}

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])