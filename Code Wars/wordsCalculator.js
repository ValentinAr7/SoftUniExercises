function high(x) {
    let words = x.split(" ");
    let scores = [];
    for (let i = 0; i < words.length; i++) {
      let score = 0;
      for (let j = 0; j < words[i].length; j++) {
        score += words[i].charCodeAt(j) - 96;
      }
      scores.push(score);
    }
    let maxScore = Math.max(...scores);
    return words[scores.indexOf(maxScore)];
  }