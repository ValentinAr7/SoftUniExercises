function passwordReset (input){

    let passwordSystem = input.shift()

    let line = input.shift()

    while(line !== "Done"){
        let [command, index1, index2] = line.split(" ")
        console.log(command);
        line = input.shift()
    }


}
passwordReset (["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])