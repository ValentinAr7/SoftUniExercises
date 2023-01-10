function townsInJson (data){

    let array = []
    let obj = {}

    // Extract the town, latitude and longitude data
    let townInfo = data.map(element => {
        let [town, latitude, longitude] = element.split(" | ")

        array.push(obj = {
            Town: town,
            Latitude: latitude,
            Longitude: longitude
        })
        
        
    })
    console.table(array);

}

townsInJson ([
'Town | Latitude | Longitude |',
'Sofia | 42.696552 | 23.32601 |',
'Beijing | 39.913818 | 116.363625 |'
])