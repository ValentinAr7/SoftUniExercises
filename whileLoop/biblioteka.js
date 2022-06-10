function biblioteka (input){

    let book = input[0]

    let index = 1;
    let command = input[index];
    index++

    counter = 0;

    while(command !== "No More Books"){
        counter = counter + 1

        if(command = book){
            console.log(`You checked ${counter} books and found it`);
        } else{
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
        }
        command = input[index]
        index++
    }


}

biblioteka(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])