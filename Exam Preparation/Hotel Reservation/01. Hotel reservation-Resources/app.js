window.addEventListener('load', solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let checkInElement = document.getElementById('date-in');
    let checkOutElement = document.getElementById('date-out');
    let guestsNumberElement = document.getElementById('people-count')

    let infoListElement = document.querySelector('.info-list')
    let infoReservationElement = document.getElementById('info-reservations')
    let btnNextElement = document.getElementById('next-btn')


    btnNextElement.addEventListener('click', (e) => {
        e.preventDefault()


        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let checkIn = checkInElement.value;
        let checkOut = checkOutElement.value;
        let guests = guestsNumberElement.value;

        let liElement = document.createElement('li');
        let articleElement = document.createElement('article');
        let h3Element = document.createElement('h3');
        let fromDateCell = document.createElement('p');
        let toDateCell = document.createElement('p');
        let forManyPeopleCell = document.createElement('p');

        let btnEdit = document.createElement('button');
        btnEdit.classList.add('edit-btn')
        btnEdit.textContent = 'Edit'

        let btnContinue = document.createElement('button');
        btnContinue.classList.add('continue-btn');
        btnContinue.textContent = 'Continue'

        h3Element.textContent = `Name: ${firstName} ${lastName}`;
        fromDateCell.textContent = `From date: ${checkIn}`;
        toDateCell.textContent = `To date: ${checkOut}`;
        forManyPeopleCell.textContent = `For ${guests} people`

        firstNameElement.value = '';
        lastNameElement.value = '';
        checkInElement.value = '';
        checkOutElement.value = '';
        guestsNumberElement.value = '';

        btnNextElement.disabled = true;
        btnEdit.disabled = false;
        btnContinue.disabled = false;

        btnEdit.addEventListener('click', (e) => {

            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            checkInElement.value = checkIn;
            checkOutElement.value = checkOut;
            guestsNumberElement.value = guests;

            infoListElement.remove()
            btnNextElement.disabled = false;

        })

        btnContinue.addEventListener('click', (e) =>{

            let li = document.createElement('li');
            li.classList.add('reservation-content')

            let ul =  document.querySelector('.confirm-list')

            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            let fromDate = document.createElement('p');
            let toDate = document.createElement('p');
            let forManyPeople = document.createElement('p');
    
            let btnConfirm = document.createElement('button');
            btnConfirm.classList.add('confirm-btn')
            btnConfirm.textContent = 'Confirmt'
    
            let btnSave = document.createElement('button');
            btnSave.classList.add('save-btn');
            btnSave.textContent = 'Save'
    
            h3.textContent = `Name: ${firstName} ${lastName}`;
            fromDate.textContent = `From date: ${checkIn}`;
            toDate.textContent = `To date: ${checkOut}`;
            forManyPeople.textContent = `For ${guests} people`

            infoListElement.remove()
            btnNextElement.disabled = false;

            
        article.appendChild(h3);
        article.appendChild(fromDate);
        article.appendChild(toDate);
        article.appendChild(forManyPeople);

        li.appendChild(article);
        li.appendChild(btnSave);
        li.appendChild(btnConfirm);

        ul.appendChild(li)


        })









        articleElement.appendChild(h3Element);
        articleElement.appendChild(fromDateCell);
        articleElement.appendChild(toDateCell);
        articleElement.appendChild(forManyPeopleCell);

        liElement.appendChild(articleElement);
        liElement.appendChild(btnEdit);
        liElement.appendChild(btnContinue);

        infoListElement.appendChild(liElement)






    })





}





