function attachEvents() {

}

async function onLoadAllRecords() {

    const url = 'http://localhost:3030/jsonstore/phonebook'
    const response = await fetch(url);
    const data = await response.json()

}
//----------------------------------------------------------------------

async function onCreateRecord(person, phone){

    const url = 'http://localhost:3030/jsonstore/phonebook'
    const body = {
        person,
        phone
    }

    const response = await fetch(url, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    const data = await response.json()
    return data
}

async function onDeleteRecords(){
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;

    const response = await fetch(url,  {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()
}



attachEvents();