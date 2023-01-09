function products (data){

    let res = {}
    for(let i =0; i < data.length; i+=2){

        let productName = data[i]
        let calories = data[i + 1]

        res[productName] = calories
    }
    console.log(res);
}

products(
    ['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'])