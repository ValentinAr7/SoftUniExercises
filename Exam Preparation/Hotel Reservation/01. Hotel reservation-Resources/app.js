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

    btnNextElement.addEventListener('click', (e) =>{
        e.preventDefault()

        
    let firstName = firstNameElement.value;
    let lastName= lastNameElement.value;
    let checkIn = checkInElement.value;
    let checkOut = checkOutElement.value;
    let guests = guestsNumberElement.value;

    let liElement = document.createElement('li');
    

    let articleElement = document.createElement('article');
    let h3Element = document.createElement('h3');
    let fromDateCell =document.createElement('p');
    let toDateCell = document.createElement('p');
    let forManyPeopleCell = document.createElement('p');

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-btn')
    btnEdit.textContent = 'Edit'

    let btnContinue = document.createElement('button');
    btnContinue.classList.add('continue-btn');
    btnContinue.textContent = 'Continue'


    h3Element.value = `Name: ${firstName} ${lastName}`;
    fromDateCell.value = `From date: ${checkIn}`;
    toDateCell.value = `To date: ${checkOut}`;
    guests.value = `For ${guests} people`

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



    
    
