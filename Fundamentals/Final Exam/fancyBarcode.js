function fancyBarcode (input){

    let numberOfBarcodes = input.shift()

    let pattern = /@#+[A-Z][A-Za-z0-9]+@#+/gm

    let barcodes = input.match(pattern)
    console.log(barcodes.join(" "));
}

fancyBarcode(["3",
            
            "@#FreshFisH@#",
            "@###Brea0D@###",
            "@##Che4s6E@##"])

