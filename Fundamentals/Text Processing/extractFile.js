function extractFile (string){

    let file = string.split("\\")
    let fileType = file.pop()
    
    let splitFile = fileType.split(".")

    let fil = splitFile.pop()
    
    console.log(`File name: ${splitFile}`);
    console.log(`File extension: ${fil}`);
}
extractFile(
    'C:\\Internal\\training-internal\\Template.pptx'
)