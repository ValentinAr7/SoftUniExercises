class ArtGallery {
    constructor (creator){
        this.creator = creator
        this.possibleArticles = { 
            "picture":200,
            "photo":50,
            "item":250 
        }
        this.guests = []
    }

    addArticle( articleModel, articleName, quantity ){

    }
}


const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));