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

        const title = input.title.value;
        const category = input.category.value;
        const content = input.content.value;

        //validate input
        if(title == '' || category == '' || content == ''){
            return;
        }
    }
}