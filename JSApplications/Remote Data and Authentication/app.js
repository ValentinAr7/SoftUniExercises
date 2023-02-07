document.getElementById('login-form').addEventListener('submit', onLogin);

async function onLogin(event){
    event.preventDefault()

    const formData = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData.entries());
}