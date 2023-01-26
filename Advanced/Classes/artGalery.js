class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        }
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        let articleModelLower = articleModel.toLowerCase()
        if (!this.possibleArticles[articleModelLower]) {
            throw new Error(`This article model is not included in this gallery!`)
        }

        if (this.listOfArticles.some(x => x.articleName == articleName && x.articleModel == articleModel)) {
            quantity += quantity
        } else {
            let addObjectToArtciles = {articleModel, articleName, quantity}
            this.listOfArticles.push(addObjectToArtciles)
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }


}


const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));