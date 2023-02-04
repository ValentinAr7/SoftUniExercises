function solve() {

    async function depart() {
        let infoElement = document.getElementById('info');
        let btnDepartElement=document.getElementById('depart');
        let btnArriveElement=document.getElementById('arrive');

        let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`


        let response = await fetch(url);
        let data = await response.json()

        btnDepartElement.addEventListener(click, (e) => {
            e.preventDefault()
            btnDepartElement.disabled = true
            btnArriveElement.disabled = false

            infoElement.textContent = data.stopId

            

        })
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();