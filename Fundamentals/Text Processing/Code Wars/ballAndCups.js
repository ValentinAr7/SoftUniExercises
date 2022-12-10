function cupAndBalls(b, arr){
    
        for (var i=0; i<arr.length; ++i)
        //arr[i] == currentIndex
          if (arr[i][0]==b)
            b=arr[i][1];
            // arr[i] = currentIndex of the for loop
            // if the first element of the currentIndex = b
            // b swaps position with the secnod element
            // the ball is in the cup of the second index in the bracket [1, 2]

          else if (arr[i][1]==b)
            b=arr[i][0];
            // if the ball is in the cup from index 1 (second element in the bracket)
            //swap position with the the first element
        console.log(b);
        //return the value
      };

cupAndBalls (1, [[2,3],[1,2],[1,2]])