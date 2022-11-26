function activationKey (input){

    let rawActivationKey = input.shift()
    let index = 0
    let line = input[index]

    while(line !== "Generate"){
        let lineArguments = line.split(">>>")
        let command;
        let upperLower;
        let index1;
        let index2;
        console.log(lineArguments);
        
        line = input[index]
        index++
    }


}

activationKey(["abcdefghijklmnopqrstuvwxyz",

"Slice>>>2>>>6",

"Flip>>>Upper>>>3>>>14",

"Flip>>>Lower>>>5>>>7",

"Contains>>>def",

"Contains>>>deF",

"Generate"])