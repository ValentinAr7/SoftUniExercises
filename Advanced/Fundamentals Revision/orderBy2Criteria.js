function solve (array){

    let sortNames = array.sort((a, b) =>{
       if(a.length !== b.length){
        return a.length - b.length
       } else {
           a.localeCompare(b)
       }
    })
    console.log(sortNames.join('\n'));

}

solve(['Isacc', 'Theodor','Jack', 'Harrison', 'George'])