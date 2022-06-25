function balls(input){

    let index = 0;
    let n = Number(input[index]);

    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yelloBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherColors = 0;

    for(let i = 0; i < n; i++){
        let color = input[index];
        index++

        switch(color){
            case "red":
                totalPoints += 5;
                redBalls++; break

                case "orange": 
                totalPoints += 10
                orangeBalls++;
                break;

                case "yellow": 
                totalPoints += 15;
                yelloBalls++;
                break;

                case "white": 
                totalPoints += 20;
                whiteBalls++;
                break;
                
                case "black": 
                totalPoints = Math.floor(totalPoints / 2);
                totalPoints++
                break;
        }
    }

}