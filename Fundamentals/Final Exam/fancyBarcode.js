function fancyBarcode (input){

    let numberOfBarcodes = input.shift()

    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1, })/gm

    let barcodes = input.match(pattern)
    console.log(barcodes.join(" "));
}

fancyBarcode(["3",
            
            "@#FreshFisH@#",
            "@###Brea0D@###",
            "@##Che4s6E@##"])

