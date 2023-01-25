function solve() {

    let recepientElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title')
    let messageElement = document.getElementById('message')
    let ulElement = document.getElementById('list')

    let addToListButton = document.getElementById('add')
    let resetButton = document.getElementById('reset')


    addToListButton.addEventListener('click', (e)=>{
        e.preventDefault();

        let name = recepientElement.value;
        let title = titleElement.value;
        let message = messageElement.value;

        if(!name || !title || !message ){
            return
        }

        let liElement = document.createElement('li');
        let titleH4 = document.createElement('h4');
        let nameH4 = document.createElement('h4');
        let spanText = document.createElement('span');

        let buttonList = document.createElement('div');
        buttonList.id = 'list-action'
        
        let btnSend = document.createElement('button')
        btnSend.id = 'send'
        btnSend.textContent = 'Send'
        buttonList.appendChild(btnSend)


        let btnDelete = document.createElement('button')
        btnDelete.id = 'delete'
        btnDelete.textContent = 'Delete'
        buttonList.appendChild(btnDelete)

        titleH4.textContent = `Title: ${title}`
        nameH4.textContent = `Recipient: ${name}`
        spanText.textContent = message

        liElement.appendChild(titleH4)
        liElement.appendChild(nameH4)
        liElement.appendChild(spanText)
        liElement.appendChild(buttonList)

        ulElement.appendChild(liElement)




    })



}
solve()