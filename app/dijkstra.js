
var checkNeighbors = function(cities, nearestName){
    for (var i = 0; i < cities.length; i++){
      if(cities[i].cityName == nearestName){
        for (n in cities[i].cityNeighbors[0] ){ 
		      for (var j = 0; j < cities.length; j++){
        	  if(cities[j].cityName == n){
            	if (cities[j].distance > cities[i].distance + cities[i].cityNeighbors[0][n]){ 
                cities[j].distance = cities[i].distance + cities[i].cityNeighbors[0][n];
              }
            }
          }

        }
        cities[i].known = true;
      }
    }
    return cities;
  }

module.exports = {

  findShortestPath: function (cities, startCityName, endCityName){
    console.log(startCityName + " " + endCityName);
   for (var i = 0; i < cities.length; i++){
     console.log("city: " + cities[i].cityName);
      if(cities[i].cityName == startCityName){
        cities[i].distance = 0;
        cities[i].known = false;
      }
      else {
      	cities[i].distance = 9999;
        cities[i].known = false;
      }
    }

    var finished = false;

    while(!finished){
      finished = true;
      for (var j = 0; j < cities.length; j++){ 
        if (!cities[j].known){   
          finished = false;           
          var nearest = {};
          nearest.distance = 9999;

          for (var k = 0; k < cities.length; k++){
            if (cities[k].distance < nearest.distance && !cities[k].known){
              nearest = cities[k];
              nearest.distance = cities[k].distance;
            }
          }
          cities = checkNeighbors(cities, nearest.cityName);

        }
      }
    }
    for (var l = 0; l < cities.length; l++){
      if(cities[l].cityName == endCityName){
        console.log (cities[l].distance);
        return cities[l].distance;
      }
    }

  }

  


}