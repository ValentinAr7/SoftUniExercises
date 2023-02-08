function attachEvents() {

    document.getElementById('refresh').addEventListener('click', getAllMsg);


}

function renderMsg(data){
    const content = Object.values(data).map(entry => `${entry.author}: ${entry.content}`) 
    debugger
}


async function getAllMsg(){
    const url = 'http://localhost:3030/jsonstore/messenger'
    const response = await fetch(url)
    const data = await response.json()

    renderMsg(data)
}

async function createMessage(body){

    
    const url = 'http://localhost:3030/jsonstore/messenger'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })

const data = response.json()
return data
}

attachEvents();