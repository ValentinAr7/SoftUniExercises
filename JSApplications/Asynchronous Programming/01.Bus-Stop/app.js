async function getInfo() {

    const stopInfoElement = document.getElementById('stopId');
    const stopId = stopInfoElement.value
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
    const stopNameElement = document.getElementById('stopName');
    const busList = document.getElementById('buses');

    busList.innerHTML = ''


}