window.addEventListener('load', solution);

function solution() {

    let addNameElement = document.getElementById('fname');
    let emailElement = document.getElementById('email');
    let phoneElement = document.getElementById('phone');
    let addressElement = document.getElementById('address');
    let postcodeElement = document.getElementById('code');
    const submitBtnElement = document.getElementById('submitBTN')
    const previewElement = document.getElementById('infoPreview')

    const editBtnElement = document.getElementById('editBTN');
    const continueBtnElement = document.getElementById('continueBTN')

    submitBtnElement.addEventListener('click', (e) => {
      e.preventDefault()

      //take values from elements
      let name = addNameElement.value;
      let email = emailElement.value;
      let phone = phoneElement.value;
      let address = addressElement.value;
      let postcode = postcodeElement.value;

      if(!name || !email){
        return;
      }
      //create CELLS in preview
      let nameCellElement = document.createElement('li') 
      let emailCellElement = document.createElement('li') 
      let phoneCellElement = document.createElement('li') 
      let addressCellElement = document.createElement('li') 
      let postcodeCellElement = document.createElement('li')

      //assign values to the preview
      nameCellElement.textContent = `Full name: ${name}`;
      emailCellElement.textContent = `Email: ${email}`;
      phoneCellElement.textContent = `Phone Number: ${phone}`;
      addressCellElement.textContent = `Address: ${address}`;
      postcodeCellElement.textContent = `Postal Code: ${postcode}`;

      //Empty imput fileds after SUBMIT btn is clicked
      addNameElement.value= '';
      emailElement.value = '';
      phoneElement.value = '';
      addressElement.value = '';
      postcodeElement.value = '';

      editBtnElement.addEventListener('click', (e) =>{
        addNameElement.value= name
        emailElement.value = email
        phoneElement.value = phone
        addressElement.value = address
        postcodeElement.value = postcode

        previewElement.remove()
        document.getElementById("submitBTN").disabled = false; 
        document.getElementById("editBTN").disabled = true; 
        document.getElementById("continueBTN").disabled = true; 
  

      })











      previewElement.appendChild(nameCellElement);
      previewElement.appendChild(emailCellElement);
      previewElement.appendChild(phoneCellElement);
      previewElement.appendChild(addressCellElement);
      previewElement.appendChild(postcodeCellElement);

      document.getElementById("submitBTN").disabled = true; 
      document.getElementById("editBTN").disabled = false; 
      document.getElementById("continueBTN").disabled = false; 


    })




}