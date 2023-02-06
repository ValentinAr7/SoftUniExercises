function high(x){
    let score = 0;

    for (let i = 0; i < x.length; i++) {
      score += x.charCodeAt(i) - 96;
    }


    return score;
  }

  high('man i need a taxi up to ubud')