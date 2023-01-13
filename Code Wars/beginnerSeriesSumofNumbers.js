const GetSum = (a, b) => {
        let min = Math.min(a, b),
            max = Math.max(a, b);
            console.log((max - min + 1) * (min + max) / 2);
         
      }

GetSum (5, 8) //--> 2 (-1 + 0 + 1 + 2 = 2)

//The (max - min + 1) part of the formula calculates the number 
//of integers between min and max, inclusive. The (min + max) part 
//of the formula calculates the average of min and max, and the 
//division by 2 gives the sum of the integers between min and max.



