/*
  var cities = [
        {
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
 */


module.exports = function (cities, startCity, endCity){

  var allKnown = false;

  // Add city distances and known
  for (city in cities){
    if(city.cityName === startCity.cityName){
      city.distance = 0;
      city.known = true;
    }
    else {
      city.distance = 99999;
      city.known = false;
    }
  }

  // Go through startCity neighbors and execute checkNeighbors on each
  for (n in startCity.cityNeighbors){
    cities[n].distance = startCity.cityNeighbors[n];
    checkNeighbors(n);
  }

  // Loop through cities, if unknown cities, get the unknown with the smallest distance and execute checkNeighbors
  // If no more unknown cities, end loop
  while (!allKnown){
    for (city in cities){
      allKnown = true;
      if (!city.known){
        checkNeighbors(getNearestUnknown());
        allKnown = false;
      }
    }
  }

  if(allKnown){
    return cities[endCity].distance;
  }

  // Check neighbors of selected city
  // If current distance (CD) + distance to neighbor (DtN) is less than neighbors current distance to source (DtS) --> DtS = CD + DtN
  // Finally set known = true to prevent repeating this step on selected city
  var checkNeighbors = function (city){
    for (n in city.cityNeighbors){
      if (city.distance + city.cityNeighbors[n] < n.distance){
        n.distance = city.distance + city.cityNeighbors[n];
      }
    }
    city.known = true;
  }

  // Loop through cities
  // Check unknown cities' distance and return the nearest
  var getNearestUnknown = function(){
    var nearest;
    nearest.distance = 99999;
    for (city in cities){
      if (city.distance < nearest.distance && !city.known){
        nearest = city;
      }
    }
    return nearest;
  }


}