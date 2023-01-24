window.addEventListener("load", solve);

function solve() {

  //Input fields
  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let storyTitleElement = document.getElementById('story-title')
  let genreElement = document.getElementById('genre')
  let storyElemenet = document.getElementById('story')
  let previewListElement = document.getElementById('preview-list')
  //buttons
  let btnPublishElement = document.getElementById('form-btn')
  

  btnPublishElement.addEventListener('click', (e)=> {
    e.preventDefault()

    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    let storyTitle = storyTitleElement.value;
    let genre = genreElement.value;
    let story = storyElemenet.value;

    if(!firstName || !lastName || !age || !storyTitle || !genre || !story){
      return;
    }
  
    let saveBtnElement = document.createElement('button');
    let editBtnElement = document.createElement('button');
    let deleteBtnElement = document.createElement('button');

    let liElement = document.createElement('li')
    liElement.classList.add('story-info')

    let articleElement=document.createElement('article')
    let fullNameCellElement = document.createElement('h4');
    let ageCellElement = document.createElement('p');
    let storyTitleCellElement = document.createElement('p');
    let genreCellElement = document.createElement('p');
    let fullStoryCellElement = document.createElement('p')

    fullNameCellElement.textContent = `Name: ${firstName} ${lastName}`;
    ageCellElement.textContent = `Age: ${age}`;
    storyTitleCellElement.textContent = `Title: ${storyTitle}`;
    genreCellElement.textContent = `Genre: ${genre}`;
    fullStoryCellElement.textContent = `${story}`

    firstNameElement.value = ''
    lastNameElement.value = ''
    ageElement.value = ''
    storyTitleElement.value = ''
    genreElement.value = ''
    storyElemenet.value = ''


    let saveBtn = document.createElement("button");
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = 'Save Story';

    let editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit Story';

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete Story';









    articleElement.appendChild(fullNameCellElement)
    articleElement.appendChild(ageCellElement)
    articleElement.appendChild(storyTitleCellElement)
    articleElement.appendChild(genreCellElement)
    articleElement.appendChild(fullStoryCellElement)

    liElement.appendChild(articleElement);
    liElement.appendChild(saveBtnElement);
    liElement.appendChild(editBtnElement);
    liElement.appendChild(deleteBtnElement);

    previewListElement.appendChild(liElement)

  })


}
