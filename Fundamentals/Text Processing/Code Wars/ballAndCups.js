function cupAndBalls(b, arr){
    
        for (var i=0; i<arr.length; ++i)
          if (arr[i][0]==b)
            b=arr[i][1];
          else if (arr[i][1]==b)
            b=arr[i][0];
        console.log(b);
      };

cupAndBalls (1, [[2,3],[1,2],[1,2]])