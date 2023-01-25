function solve() {

    let recepientElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title')
    let messageElement = document.getElementById('message')
    let ulElement = document.getElementById('list')

    let addToListButton = document.getElementById('add')
    let resetButton = document.getElementById('reset')


    addToListButton.addEventListener('click', (e) => {
        e.preventDefault();

        let name = recepientElement.value;
        let title = titleElement.value;
        let message = messageElement.value;

        if (!name || !title || !message) {
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

        recepientElement.value = '';
        titleElement.value = '';
        messageElement.value = ''

        //------------------------------------------------------------------------------------
        btnSend.addEventListener('click', (e) => {
            let ulSentEmails = document.querySelector('.sent-list')


            let sendBtnLiElement = document.createElement('li')

            let toSpanElement = document.createElement('span')
            let titleSpanElement = document.createElement('span')

            let divElement = document.createElement('div');
            divElement.id = 'btn'

            let btnDelete2 = document.createElement('button')
            btnDelete2.classList.add('delete')
            btnDelete2.textContent = 'Delete'

            toSpanElement.textContent = `To: ${name}`
            titleSpanElement.textContent = `Title: ${title}`

            liElement.remove()



            divElement.appendChild(btnDelete2)

            sendBtnLiElement.appendChild(toSpanElement)
            sendBtnLiElement.appendChild(titleSpanElement)
            sendBtnLiElement.appendChild(divElement)

            ulSentEmails.appendChild(sendBtnLiElement)



            //---------------------------------------------------------------------------------------------------------------------
            btnDelete2.addEventListener('click', (e) => {
                let ulDeleteElement = document.querySelector('.delete-list')

                let deleteBtnLiElement = document.createElement('li');
                let toDeleteSpan = document.createElement('span');
                let titleDeleteSpan = document.createElement('span');

                toDeleteSpan.textContent = `To: ${name}`
                titleDeleteSpan.textContent = `Title: ${title}`

                deleteBtnLiElement.appendChild(toDeleteSpan)
                deleteBtnLiElement.appendChild(titleDeleteSpan)

                ulDeleteElement.appendChild(deleteBtnLiElement)

                ulSentEmails.remove()

            })


        })



        btnDelete.addEventListener('click', (e) => {
            let ulDeleteElement = document.querySelector('.delete-list')

            let deleteBtnLiElement = document.createElement('li');
            let toDeleteSpan = document.createElement('span');
            let titleDeleteSpan = document.createElement('span');

            toDeleteSpan.textContent = `To: ${name}`
            titleDeleteSpan.textContent = `To: ${title}`

            deleteBtnLiElement.appendChild(toDeleteSpan)
            deleteBtnLiElement.appendChild(titleDeleteSpan)

            ulDeleteElement.appendChild(deleteBtnLiElement)

            ulElement.remove()

        })

        liElement.appendChild(titleH4)
        liElement.appendChild(nameH4)
        liElement.appendChild(spanText)
        liElement.appendChild(buttonList)

        ulElement.appendChild(liElement)
    })
}
solve()