function roadRadar (speed, area){

    switch (area) {
        case 'motorway':
            let speedLimit = 130


            if(speed > speedLimit){
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - {status}`);
            }
            console.log(`Driving ${speed} km/h in a {speed limit} zone`);
            break;
    

            
    }

}

roadRadar (40, 'city')