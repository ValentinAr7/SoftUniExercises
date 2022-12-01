function passwordReset (input){

    let passwordSystem = input.shift()

    let line = input.shift()

    while(line !== "Done"){
        let [command, index1, index2] = line.split(" ")

        switch (command) {
            case "TakeOdd":
                let newPassword = []

                for(let i = 0; i < passwordSystem.length; i++){
                    let currentLetter = passwordSystem[i]

                    if(i % 2 !== 0 ){
                        newPassword.push(currentLetter)

                    }
                }
                console.log(newPassword.join(""));


                break;
        
            default:
                break;
        }
        line = input.shift()
    }


}
passwordReset (["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])