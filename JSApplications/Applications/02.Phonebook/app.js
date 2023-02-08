function attachEvents() {

}

async function loadPhones() {

    const url = 'http://localhost:3030/jsonstore/phonebook'
    const response = await fetch(url);
    const data = await response.json()

    return data
}
//----------------------------------------------------------------------

async function postPhone(){

    const url = 'http://localhost:3030/jsonstore/phonebook'
    const response = await fetch(url, {
        method: 'POST',
        'Content-Type': 'application/json',
        header: {
            
        }
    })
}



attachEvents();