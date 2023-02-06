function persistence(num) {
    let count = 0;
  
    while (num >= 10) {
      count++;
      num = String(num).split("").reduce((a, b) => a * b);
    }
  
    return count;
  }

  persistence(39) 

