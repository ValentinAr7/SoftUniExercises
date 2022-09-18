function biblioteka (input){

    let book = input[0]

    let index = 1;
    let command = input[index];
    

    bookIsFound = false

    while(command !== "No More Books"){

        if(command === book){
            bookIsFound = true;
            break;
        }
        command = input[index];
        index++
    }

        if(bookIsFound === false){
            console.log("The book you search is not here!");
            console.log(`You checked ${index - 2} books.`);
        } else {
            console.log(`You checked ${index - 2} books and found it.`);
        }

}

biblioteka(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])