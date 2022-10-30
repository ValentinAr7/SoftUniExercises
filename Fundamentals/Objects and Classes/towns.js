function towns (input){

    let townInfo = {}

    for (const line of input) {
        
        let [townName, latitude, longidtude] = line.split(" | ")

        townInfo.town = townName
        townInfo.latitude = Number(latitude).toFixed(2)
        townInfo.longidtude = Number(longidtude).toFixed(2)

console.log(townInfo);
    }
}

towns (['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])



       storedProducts[currentProduct] = available[index + 1]
//          class         key               value