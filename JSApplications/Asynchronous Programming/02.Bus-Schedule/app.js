function solve() {

    async function depart() {
        let infoElement = document.getElementById('info');
        let btnDepartElement=document.getElementById('depart');
        let btnArriveElement=document.getElementById('arrive');

        btnDepartElement.addEventListener(click, (e) => {

            let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`

            
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