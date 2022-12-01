function passwordReset (input){

    let passwordSystem = input.shift()
    let newPassword = []
    let line = input.shift()

    while(line !== "Done"){

        let [command, index1, index2] = line.split(" ")

        switch (command) {
            case "TakeOdd":

                for(let i = 0; i < passwordSystem.length; i++){
                    let currentLetter = passwordSystem[i]

                    if(i % 2 !== 0 ){
                        newPassword.push(currentLetter)
                        
                    }
                }
                console.log(newPassword.join(""));
                break;

                case "Cut": 

                newPassword = newPassword.join("")
                index1 = Number(index1)
                index2 = Number(index2)
                let length = index1 + index2
                console.log(length);
            
                let subStr = newPassword.substring(index1, length)
                newPassword = newPassword.replace(subStr, "")
                console.log(newPassword);
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