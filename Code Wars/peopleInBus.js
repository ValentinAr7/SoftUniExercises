var number = function(busStops){
    return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
  }


function peopleInBus(busStops, stops){

    let peopleIn = 0;
    let peopleOut = 0;
    let peopleLeft = 0

    for(let stop of busStops){
        peopleIn += stop[0]
        peopleOut += stop[1]
        peopleLeft = peopleIn - peopleOut
    }
    
return peopleLeft
}

peopleInBus([[10,0],[3,5],[5,8]], 5)