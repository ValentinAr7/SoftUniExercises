function activationKey (input){

    let rawActivationKey = input.shift()
    
    let index = 0
    let line = input[index]
    let removedElement = input.shift()

    while(line !== "Generate"){
        let lineArguments = line.split(">>>")
        let command = lineArguments[0]
        let upperLower;
        let index1;
        let index2;
        
        

        switch (command) {
            case "Contains":
                index1 = lineArguments[1]

                if(rawActivationKey.includes(index1)){
                  console.log( `${rawActivationKey} contains ${index1}`); 
                } else{
               console.log("Substring not found!"); 
                }
                break;
        
                
            case "Flip":
                upperLower = lineArguments[1]
                index1 = lineArguments[2]
                index2 = lineArguments[3]

                if(upperLower == "Upper"){
                    let subStr = rawActivationKey.substring(index1, index2)
                    rawActivationKey = rawActivationKey.replace(subStr, subStr.toUpperCase())
                    console.log(rawActivationKey);
                } else {
                    let subStr = rawActivationKey.substring(index1, index2)
                    rawActivationKey = rawActivationKey.replace(subStr, subStr.toLowerCase())
                    console.log(rawActivationKey);
                }
                break;

                case "Slice":
                    index1 = lineArguments[1]
                    index2 = lineArguments[2]

                let subStr = rawActivationKey.substring(index1, index2)
                rawActivationKey = rawActivationKey.replace(subStr, "")
                console.log(rawActivationKey);
                break;
        }
        line = input[index]
        index++
    }

console.log(`Your activation key is: ${rawActivationKey}`);
}

activationKey(["abcdefghijklmnopqrstuvwxyz",

"Slice>>>2>>>6",

"Flip>>>Upper>>>3>>>14",

"Flip>>>Lower>>>5>>>7",

"Contains>>>xzy",

"Contains>>>deF",

"Generate"])