window.addEventListener('load', solve);

function solve() {
    
    let genreElement = document.getElementById('genre');
    let songNameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');

    let allHitContainer = document.querySelector('.all-hits-container')

    let addBtnElement = document.getElementById('add-btn');

    addBtnElement.addEventListener('click', (e)=>{
        e.preventDefault()

    if(!genreElement.value || !songNameElement.value || !authorElement.value || !dateElement.value){
        return;
    }

    let divElement = document.createElement('div')
    divElement.classList.add('hits-info')

    let genreCellElement = document.createElement('h2');
    let nameCellElement = document.createElement('h2');
    let authorCellElement = document.createElement('h2');
    let dateCellElement = document.createElement('h3');

    divElement.appendChild(genreCellElement)
    divElement.appendChild(nameCellElement)
    divElement.appendChild(authorCellElement)
    divElement.appendChild(dateCellElement)

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn')
    saveBtn.textContent = 'Save song'
    divElement.appendChild(saveBtn)


    let likeBtn = document.createElement('button');
    likeBtn.classList.add('like-btn');
    likeBtn.textContent = 'Like song';
    divElement.appendChild(likeBtn)

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Delete Song'
    divElement.appendChild(deleteBtn)

    allHitContainer.appendChild(divElement)

    genreCellElement = genreElement.value;
    nameCellElement =songNameElement.value;
    authorCellElement = authorElement.value;
    dateCellElement = dateElement.value;


    })




}