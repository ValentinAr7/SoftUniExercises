function roadRadar (speed, area){

    switch (area) {
        case 'motorway':
            let motorwaySpeedLimit = 130

            if(speed > motorwaySpeedLimit){
                console.log(`The speed is ${speed - motorwaySpeedLimit} km/h faster than the allowed speed of ${motorwaySpeedLimit} - {status}`);
            }
            console.log(`Driving ${speed} km/h in a {speed limit} zone`);
            break;


            case 'interstate':
                let InterstatespeedLimit = 90
    
    
                if(speed > InterstatespeedLimit){
                    console.log(`The speed is ${speed - InterstatespeedLimit} km/h faster than the allowed speed of ${InterstatespeedLimit} - {status}`);
                }
                console.log(`Driving ${speed} km/h in a {speed limit} zone`);
                break;

            
                case 'city':
                    let citySpeedLimit = 50
        
        
                    if(speed > citySpeedLimit){
                        console.log(`The speed is ${speed - citySpeedLimit} km/h faster than the allowed speed of ${citySpeedLimit} - {status}`);
                    }
                    console.log(`Driving ${speed} km/h in a {speed limit} zone`);
                    break;

                    case 'residential':
                        let residentialSpeedLimit = 50
            
            
                        if(speed > residentialSpeedLimit){
                            console.log(`The speed is ${speed - residentialSpeedLimit} km/h faster than the allowed speed of ${residentialSpeedLimit} - {status}`);
                        }
                        console.log(`Driving ${speed} km/h in a {speed limit} zone`);
                        break;
        
    
    


    }

}

roadRadar (40, 'city')