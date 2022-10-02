function commonElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        for (let r = 0; r < arr2.length; r++) {
        
            if (arr1[i] === arr2[r]) {
            console.log(arr1[i]);
            }
    }
}
}
commonElements
    (['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])