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

    let genreCellElement = document.createElement('h2');
    let nameCellElement = document.createElement('h2');
    let authorCellElement = document.createElement('h2');
    let dateCellElement = document.createElement('h3');




    })




}