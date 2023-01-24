window.addEventListener("load", solve);

function solve() {

  //Input fields
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const storyTitleElement = document.getElementById('story-title')
  const genreElement = document.getElementById('genre')
  const storyElemenet = document.getElementById('story')
  const previewListElement = document.getElementById('preview-list')
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

    // if(!firstName || !lastName || !age || !storyTitle || !genre || !story){
    //   return;
    // }

    let liElement = document.createElement('li')
    liElement.classList.add('story-info')

    let fullNameCellElement = document.createElement('h4');
    let ageCellElement = document.createElement('p');
    let storyTitleCellElement = document.createElement('p');
    let genreCellElement = document.createElement('p');
    let fullStoryCellElement = document.createElement('p')


    fullNameCellElement.textContent = `Name: ${firstName} ${lastName}`;
    ageCellElement.textContent = `Age: ${age}`;
    storyTitleCellElement.textContent = `Title: ${title}`;
    genreCellElement.textContent = `Genre: ${genre}`;
    fullStoryCellElement.textContent = `${story}`




    
    previewListElement.appendChild(liElement)
    previewListElement.appendChild(fullNameCellElement)
    previewListElement.appendChild(ageCellElement)
    previewListElement.appendChild(storyTitleCellElement)
    previewListElement.appendChild(genreCellElement)
    previewListElement.appendChild(fullStoryCellElement)



  })


}
