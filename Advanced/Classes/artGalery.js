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
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles[articleModel]) {
            throw new Error(`This article model is not included in this gallery!`)
        }

        if (this.listOfArticles.some(x => x.articleName == articleName && x.articleModel == articleModel)) {
            quantity += quantity
        } else {
            this.listOfArticles.push({articleModel, articleName, quantity})
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest (guestName, personality){
        let guestFormat = {
            guestName,
            points: 0,
            purchaseArticle: 0
        }

         
        if(this.guests.some(x=> x.guestName == guestName)){
            throw new Error (`${guestName} has already been invited.`)
        }

        if(personality == 'Vip'){
            guestFormat.points = 500
        } else if(personality == 'Middle'){
            guestFormat.points == 250
        } else {
            guestFormat.points == 50

        }

        this.guests.push(guestFormat);
        return `You have successfully invited ${guestName}!`
        

    }

    // buyArticle ( articleModel, articleName, guestName){
    //     if(!this.listOfArticles.some(x => x.articleName == articleName && x.articleModel == articleModel)){
    //         throw new Error (`This article is not found.`)
    //     }

    //     if(quantity == 0){
    //         return `This guest is not invited.`
    //     }


    // }


}

const artGallery = new ArtGallery('Curtis Mayfield');

console.log(artGallery.inviteGuest('John', 'Vip'));

console.log(artGallery.inviteGuest('Peter', 'Middle'));

console.log(artGallery.inviteGuest('John', 'Middle'));