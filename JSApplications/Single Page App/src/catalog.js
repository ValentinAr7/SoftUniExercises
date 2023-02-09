import { showDetailsView } from './details.js';

// 4 functions
// function showCatalogView() uses all 3 recepise

// function showCatalogView() displays the section and stores getAllRecipes() in variable recipes
// function getAllRecipes() fetch data from the server
// then call displayRecepise(recipes)
// function displayRecepise() maps all recepise and send them to createRecipeCard()
// import showCatalogView() in appjs

document.getElementById('recipe-list').addEventListener('click', openRecipe);
document.getElementById('catalog-link').addEventListener('click', showCatalogView);

export async function showCatalogView() {
    [...document.querySelectorAll('section')].forEach(s => s.style.display = 'none');
    //hides all elements

    const recipes = await getAllRecipes();
    
    document.getElementById('catalog-view').style.display = 'block';
    // It sets the display style property of the HTML element with the ID of "catalog-view" to "block". This makes the "catalog-view" section visible on the page.

    displayRecipes(recipes);
}

//------------------------ GET ALL RECEPIES FROM THE SERVER -----------------------------------
async function getAllRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes?select=' + encodeURIComponent('_id,name'));
    const recipes = await response.json();

    return recipes;
}

//----------------------------- DISPLAY ALL RECIPES-----------------------------------
function displayRecipes(recipes) {
    const cards = recipes.map(createRecipeCard);
    //It maps over the recipes array and passes each recipe data to the createRecipeCard() function. 
    //The result of the map function is an array of recipe cards (HTML elements).

    const fragment = document.createDocumentFragment();
    // It creates a Document Fragment object,

    for (let item of cards) {
        fragment.appendChild(item);
    }
    // The function then loops over the array of recipe cards (cards) and appends each card as a child node to the Document Fragment.

    const list = document.getElementById('recipe-list');
    list.replaceChildren(fragment);
    // Finally, the function gets the HTML element with the ID of "recipe-list" using document.getElementById('recipe-list') and replaces its child nodes with the Document Fragment using the replaceChildren method. This updates the content of the "recipe-list" element with the new recipe cards. 
}

//------------------------------ CREATE RECIPE CARD ------------------------------------------------
function createRecipeCard(recipe) {
    const element = document.createElement('li');
    element.textContent = recipe.name;

    const link = document.createElement('a');
    link.href = 'javascript:void(0)';
    link.text = '[Details]';
    link.id = recipe._id;
    element.appendChild(link);

    return element;
}

function openRecipe(event) {
    if (event.target.tagName == 'A') {
        event.preventDefault();
        const id = event.target.id;
        showDetailsView(id);
    }
}