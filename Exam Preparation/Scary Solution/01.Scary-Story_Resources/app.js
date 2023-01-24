window.addEventListener("load", solve);

function solve() {

  //Input fields
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const storyTitleElement = document.getElementById('story-title')
  const genreElement = document.getElementById('genre')
  const storyElemenet = document.getElementById('story')
  //buttons
  let btnPublishElement = document.getElementById('form-btn')

  let firstName = firstNameElement.value;
  let lastName = lastNameElement.value;
  let age = ageElement.value;
  let storyTitle = storyTitleElement.value;
  let genre = genreElement.value;
  let story = storyElemenet.value;

  btnPublishElement.addEventListener('click', (e)=> {
    e.preventDefault()

    

  })


}
