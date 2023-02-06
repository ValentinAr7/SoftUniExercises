function zipWith(fn,a,b) {

    const result = []

    const length = Math.min(a.length, b.length)
    for(let i = 0; i < length; i++){
        result.push(fn(a[i], a[i]))
    }

    console.log(result);
  }

  zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )