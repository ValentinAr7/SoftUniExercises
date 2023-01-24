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

      let name = addNameElement.value;
      let email = emailElement.value;
      let phone = phoneElement.value;
      let address = addNameElement.value;
      let postcode = postcodeElement.value;
    })




}
