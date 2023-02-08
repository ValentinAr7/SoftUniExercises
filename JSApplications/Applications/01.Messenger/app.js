function attachEvents() {

    async function getAllMsg(){
        const url = 'http://localhost:3030/jsonstore/messenger'
        const response = await fetch(url)
        const data = await response.json()

        return data
    }

}

attachEvents();