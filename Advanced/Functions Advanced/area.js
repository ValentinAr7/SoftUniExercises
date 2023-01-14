function areaVol(areaIn, volIn, input){
    return JSON.parse(input).map(cube => ({
        area: areaIn.call(cube),
        volume: volIn.call(cube)
    }))
}


console.log(areaVol(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`));