function attachEvents() {
document.getElementById('btnLoadPosts').addEventListener('click', getPosts)
document.getElementById('btnViewPost').addEventListener('click', getComments)
}

async function getPosts(){
    const selectOp = document.getElementById('posts');
    const url = "http://localhost:3030/jsonstore/blog/posts"

    const response = await fetch(url)
    const data = await response.json();

    Object.values(data).forEach(post => {
        const op = document.createElement('option');
        op.value = post.id;
        op.textContent = post.title;
        selectOp.appendChild(op)
    })

    async function getComments(){
        const postsUrl = 'http://localhost:3030/jsonstore/blog/posts'
        const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'

        const selectedOp = document.getElementById('posts').selectedOptions[0]
        const titleElement = document.getElementById('post-title');
    
        const postResponse = await fetch(postsUrl);
        const postData = await postResponse.json()

        const commentsResponse = await fetch(commentsUrl)
        const commentsData = await commentsResponse.json();

        
    }

}

attachEvents();