function plantDiscovery (input){

    let n = input.shift()

    for(let i = 0; i < input[n]; i++){
        console.log(i);
    }

    

}

plantDiscovery(["3",
                "Arnoldii<->4",
                "Woodii<->7",
                "Welwitschia<->2",
                "Rate: Woodii - 10",
                "Rate: Welwitschia - 7",
                "Rate: Arnoldii - 3",
                "Rate: Woodii - 5",
                "Update: Woodii - 5",
                "Reset: Arnoldii",
                "Exhibition"])