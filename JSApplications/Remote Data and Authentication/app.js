document.getElementById('login-form').addEventListener('submit', onLogin);

async function onLogin(event){
    event.preventDefault()

    const formData = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    const data = await response.json();
    sessionStorage.setItem('accessToken', data.accessToken);
}