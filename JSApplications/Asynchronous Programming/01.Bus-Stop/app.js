async function getInfo() {
    const stopInfoElement = document.getElementById('stopId');  //get the element by ID
    const stopId = stopInfoElement.value                        //store the value of the stopInfoElement
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`     //url address of stopIds
    const stopNameElement = document.getElementById('stopName');            //get stopName element
    const busList = document.getElementById('buses');                       //get busList elements
   
    busList.innerHTML = ''                  //reset the input value

    //Make a network request to the specified url. 
    //The response from the server is being awaited and converted to JSON format using the .json().
    const response = await fetch(url);          
    const data = await response.json();       
    
    
    stopNameElement.textContent = data.name;    
    Object.entries(data.buses).forEach((busNumber, timeArrive) => {     //for each element print
        const li = document.createElement('li');
        li.textContent = `Bus ${busNumber} arrives in ${timeArrive} minutes`
        busList.appendChild(li)
    })


}