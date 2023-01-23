window.addEventListener('load', solve);

function solve() {

    const input = {
        title: document.getElementById('post-title'),
        category: document.getElementById('post-category'),
        content: document.getElementById('post-content')
    };

    const lists = {
        review: document.getElementById('review-list'),
        published: document.getElementById('published-list')
    }

    document.getElementById('publish-btn').addEventListener('click', publish);
    document.getElementById('clear-btn').addEventListener('click', clear);

    function publish(event){
        event.preventDefault();

        //read input fields
        const title = input.title.value;
        const category = input.category.value;
        const content = input.content.value;

        //validate input
        if(title == '' || category == '' || content == ''){
            return;
        }

        const li = document.createElement('li');
        li.className = 'rpost';
        li.innerHTML = `<article>
            <h4>${title}</h4>
            <p>Category: ${category}</p>
            <p>Content: ${content}</p>
            </article>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn approve">Edit</button>`
            
    }
}