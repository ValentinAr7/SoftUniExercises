const views = {
    '/': () => '<h2>Home Page</h2>',
    '/catalog': () => '<h2>Catalog</h2>',
    '/about': () => '<h2>About Page</h2>'
}

const main = document.querySelector('main');
document.querySelector('nav').addEventListener('click', onNavigate);

const startingView = window.location.pathname
showView(startingView)
window.addEventListener

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const name = new URL(event.target.href);
        const view = views[url.pathname];
        if (typeof view == 'function') {
            event.preventDefault()
            main.innerHTML = view()
            history.pushState(null, '', url.pathname)
        }
    }
}

function showView() {
    const view = views[name];
    if (typeof view == 'function') {
        main.innerHTML = view();
        return true
    } else {
        return false
    }
}