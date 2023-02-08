function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click', onLoadAllRecords)
    document.getElementById('btnCreate').addEventListener('click', handleCreateRec)

}

function handleCreateRec(){
    const person = document.getElementById('person')
    const phone = document.getElementById('phone')

}
function renderRecords(data) {
    const ul = document.getElementById('phonebook')
    Object.values(data).forEach(rec => {
        const li = document.createElement('li');
        li.textContent = `${rec.person}: ${rec.phone}`
        li.setAttribute('data-id', rec._id)

        const btnDelete = document.createElement('button')
        btnDelete.addEventListener('click', handleDelete)
        btnDelete.textContent = 'Delete'
        li.appendChild(btnDelete)
        ul.appendChild(li)
    })
}
//--------------------------------------------------------------------------
function handleDelete(e) {
    const li = e.target.parentElement;
    const id = li.getAttribute('data-id')

    onDeleteRecords(id);
    li.remove()
}


async function onLoadAllRecords() {

    const url = 'http://localhost:3030/jsonstore/phonebook'
    const response = await fetch(url);
    const data = await response.json()

    return renderRecords(data)
}
//----------------------------------------------------------------------

async function onCreateRecord(person, phone) {

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

async function onDeleteRecords() {
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;

    const response = await fetch(url, {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()
}





attachEvents();