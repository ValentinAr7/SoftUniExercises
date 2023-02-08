function attachEvents() {

}


async function getAllMsg(){
    const url = 'http://localhost:3030/jsonstore/messenger'
    const response = await fetch(url)
    const data = await response.json()

    return data
}

async function createMessage(){
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