function schoolLibrary (input){

    let bookShelf = input.shift().split("&")
    let command = input.slice()
    let currentLine = command.shift()

    while (currentLine != "Done") {
        let Lineargs = currentLine.split(" ");
        let command = Lineargs[0];
        let firstArgument = Lineargs[1]
        let secondArgument = Lineargs[2]    

        console.log(Lineargs);
        break;

    }
}

schoolLibrary (["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"
    ])