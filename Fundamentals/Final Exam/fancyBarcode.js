function fancyBarcode (input){

    let n = Number(input.shift())

    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g

    for(let i = 0; i <n; i ++){
        let barcode = input[i]

        let match = pattern.exec(barcode)
        let concatenatedDigit = "";
        let isValid = false
        while(match !== null){
            console.log(match[2]);
            let barcodeText = match[2]

            for(let ch of barcodeText){
                
            }
    }
    }

}

fancyBarcode(["3",
            
            "@#FreshFisH@#",
            "@###Brea0D@###",
            "@##Che4s6E@##"])

