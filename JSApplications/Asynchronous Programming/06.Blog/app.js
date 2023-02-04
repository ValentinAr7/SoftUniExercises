function attachEvents() {
document.getElementById('btnLoadPosts').addEventListener('click', getPosts)
}

async function getPosts(){
    const selectOp = document.getElementById('posts');
    const url = `http://localhost:3030/jsonstore/blog/posts`

    const response = await fetch(url)
    const data = response.json();

    Object.values(data).forEach(post => {
        const op = document.createElement('option');
        op.value = post.id;
        op.textContent = post.title;
    })
}

attachEvents();