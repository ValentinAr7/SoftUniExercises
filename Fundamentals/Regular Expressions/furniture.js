function furniture (input){

    let pattern = />>(?<name>)[A-Za-z]+<<(?<price>)[\d]+[\.]*[\d]+!(?<quantity>)[\d]+/g

}

furniture (['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])