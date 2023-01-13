function encodeAndDecodeMessages() {

    let textAreas = document.getElementById("textArea")
    let buttons = document.querySelectorAll("button")

    buttons[0].addEventListener("click", encode)
    buttons[1].addEventListener("clicl", decode)

    function encode(e){
        let encodedMessage = ''
        let input = textAreas[0].value
        for(let i = 0; i < input.length; i++){
            encodedMessage += String.fromCharCode(input[index].charCodeAt(0) + 1)
        }
        textAreas[1].value = encodedMessage;
        textAreas[0].value = ''
    }

    function decode(){}
}