function attachEvents() {

    document.getElementById('refresh').addEventListener('click', getAllMsg);


}

function renderMsg(data){
    const textArea = document.getElementById('message')
    //stores the data of author and content in a variable
    const content = Object.values(data).map(entry => `${entry.author}: ${entry.content}`) 
    textArea.textContent = content

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