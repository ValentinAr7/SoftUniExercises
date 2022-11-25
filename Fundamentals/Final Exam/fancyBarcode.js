function fancyBarcode (input){

    let n = input.shift()

    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1, })/gm

    for(let i = 0; i <n; i ++){
        let barcode = input[i]

        let match = pattern.exec(barcode)
        while(match !== null){
            match = pattern.exec(barcode)
    }
    }
    let barcodes = input.match(pattern)
    console.log(barcodes.join(" "));
}

fancyBarcode(["3",
            
            "@#FreshFisH@#",
            "@###Brea0D@###",
            "@##Che4s6E@##"])

