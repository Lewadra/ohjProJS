/*
  var cities = {
   tampere: {
              cityName: "tampere", cityNeighbors: [
              {turku: 150, vaasa: 240, helsinki: 170}]
            },
        {
            cityName: "vaasa", cityNeighbors: [
            {tampere: 240, oulu: 320, kuopio: 380}]
        },
        {
            cityName: "oulu", cityNeighbors: [
            {vaasa: 320, kuopio: 290, kajaani: 180}]
        }
   }     
 */
var checkNeighbors = function(cities, nearestName){
    for (var i = 0; i < cities.length; i++){
      if(cities[i].cityName == nearestName){
        //TARKISTA LÄHIMMÄN NAAPURIT, JOS NIIDEN DISTANCE < OMA DISTANCE + NAAPURIN VALUE NIIN MUUTA DISTANCE
        for (n in cities[i].cityNeighbors[0] ){ // loop naapurit
		      for (var j = 0; j < cities.length; j++){ // loop kaupungit
        	  if(cities[j].cityName == n){ //etsi naapuri kaupungeista
            	if (cities[j].distance > cities[i].distance + cities[i].cityNeighbors[0][n]){ // jos naapurin oma distance > oma + naapuridist
                cities[j].distance = cities[i].distance + cities[i].cityNeighbors[0][n];
              }
            }
          }
    	//document.write(" "  + n + " " + cities[0].cityNeighbors[0][n]);
        }
        cities[i].known = true;
      }
    }
    return cities;
  }

module.exports = {

  
  findShortestPath: function (cities, startCityName, endCityName){
    // KOKO PASKA LÄPI, STARTCITY DISTANCE = 0, 
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
      for (var j = 0; j < cities.length; j++){ // loop all, check if all known
        if (!cities[j].known){   
          finished = false;           // found unknown
          // ETSI LÄHIN KOKO PASKASTA, EKALLA KERRALLA STARTCITY
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