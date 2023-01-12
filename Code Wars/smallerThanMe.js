function smaller(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let count = 0;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          count++;
        }
      }
      result.push(count);
    }
    console.log(result); 
    }


    smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])   //[4, 1, 5, 5, 0, 0, 0, 0, 0]);
    console.log("-------------");
    // smaller([1, 1, -1, 0, 0])