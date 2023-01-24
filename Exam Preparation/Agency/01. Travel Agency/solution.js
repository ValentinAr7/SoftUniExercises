window.addEventListener('load', solution);

function solution() {

    const addNameElement = document.getElementById('fname');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const addressElement = document.getElementById('address');
    const postcodeElement = document.getElementById('code');
    const submitBtnElement = document.getElementById('submitBTN')

    submitBtnElement.addEventListener('click', (e) => {
      e.preventDefault()

      //take values from elements
      let name = addNameElement.value;
      let email = emailElement.value;
      let phone = phoneElement.value;
      let address = addNameElement.value;
      let postcode = postcodeElement.value;


      //create CELLS in preview
      let divElement = document.createElement('div')
      
      let ulElement = document.createElement('ul')
      let nameCellElement = document.createElement('li')
      let emailCellElement = document.createElement('li')
      let phoneCellElement = document.createElement('li')
      let addressCellElement = document.createElement('li')
      let postcodeCellElement = document.createElement('li')

      let actionsElement = document.createElement('div')

      //assign values to the preview
      nameCellElement.textContent = name;
      emailCellElement.textContent = email;
      phoneCellElement.textContent = phone;
      addressCellElement.textContent = address;
      postcodeCellElement.textContent = postcode;



      ulElement.appendChild(nameCellElement);
      ulElement.appendChild(emailCellElement);
      ulElement.appendChild(phoneCellElement);
      ulElement.appendChild(addressCellElement);
      ulElement.appendChild(postcodeCellElement);







    })




}
