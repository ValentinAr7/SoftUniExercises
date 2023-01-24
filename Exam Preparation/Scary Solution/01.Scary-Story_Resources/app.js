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
  let mainElement = document.getElementById('main')
  let bodyElement = document.querySelector(".body");
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
    saveBtn.classList.add('save-btn')
    saveBtn.textContent = 'Save Story';
    saveBtn.disabled = false

    let editBtn = document.createElement("button");
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';
    editBtn.disabled = false;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.disabled = false;

    editBtn.addEventListener('click', (e)=>{
      firstNameElement.value = firstName
      lastNameElement.value = lastName
      ageElement.value = age
      storyTitleElement.value = storyTitle
      genreElement.value = genre
      storyElemenet.value = story

      liElement.remove()
    })

    saveBtn.addEventListener('click', (e)=>{
      mainElement.remove();
      let h1Saved = document.createElement("h1");
      h1Saved.textContent = "Your scary story is saved!";
      let bodyElement2 = document.createElement("div");
      bodyElement2.setAttribute('id', 'main');
      bodyElement.appendChild(bodyElement2);

      bodyElement2.appendChild(h1Saved);

    })









    articleElement.appendChild(fullNameCellElement)
    articleElement.appendChild(ageCellElement)
    articleElement.appendChild(storyTitleCellElement)
    articleElement.appendChild(genreCellElement)
    articleElement.appendChild(fullStoryCellElement)
    articleElement.appendChild(saveBtn)
    articleElement.appendChild(deleteBtn)
    articleElement.appendChild(editBtn)

    liElement.appendChild(articleElement);
    liElement.appendChild(saveBtnElement);
    liElement.appendChild(editBtnElement);
    liElement.appendChild(deleteBtnElement);

    previewListElement.appendChild(liElement)

  })


}
