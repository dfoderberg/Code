
/*
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})
*/

   // 1 mile is 1/69th a degree of latitude
// ^ percentage of a degree that = a mile
let box_radius= .02;    // box radius needs to be the distance in miles from corner to corner of the box(square not rectangle)
                        


function knownLocationSearch(box_radius, user_lat, user_lon){
    
    let deltaLat = milesToLat(box_radius);
    let deltaLon = milesToLong(user_lat, box_radius);
    Math.abs(deltaLon);
    Math.abs(deltaLat);

// add bounding box check here probably new function

/*
the below code adjusts the latitude and longitude of the user location 
to create a bounding box that we can use to filter out known locations
they are divided by 2 to move the corner of the box half of the radius 
from the user location
 */
    var lat_min = (user_lat - deltaLat / 2).toFixed(5);
    var lat_max = (user_lat + deltaLat / 2).toFixed(5);
    var lon_min = (user_lon + deltaLon / 2).toFixed(5);
    var lon_max = (user_lon - deltaLon / 2).toFixed(5);


// returns a url that connects to the known location database and returns the known locations within the bounding box.
    return "http://development.lifebots.co/api.php/known_locations?filter[]=lat,gt," + lat_min + "&filter[]=lat,lt,"+ lat_max +
    "&filter[]=lng,gt," + lon_min + "&filter[]=lng,lt," + lon_max + "&order=id&page=1,10&key=b0tc0de"

}

let a = 40.02591;   // boulder rock club lat lon
let b = -105.25686;
console.log(knownLocationSearch(box_radius,a,b ));


function milesToLat(box_radius)
{
    let degreesPerMile = 1/69;   // a degree of latitude is 69 miles
    return degreesPerMile * box_radius / Math.sqrt(2);

}

function milesToLong(user_lat, box_radius)
{
    const a = 6371008   // radius of earth in meters
    let longitude_meters = (Math.PI / 180) * a * Math.cos(user_lat);  // calculates the delta longitude of 1 degree (in meters) at a known latitude
    let deltaLongitude_miles = longitude_meters / 1609.34;  // convert from meters to miles. 1 mile = 1609.34 m
    let degreesPerMile = 1 / deltaLongitude_miles;         // creates a variable for degrees of longitude per mile
    return degreesPerMile * box_radius / Math.sqrt(2);  // returns the delta longitude needed to create a bounding box of size box_radius
}



function toRadians(input){

    return ((input * Math.PI)/ 180);

}


function getDistance(){

    var user_lat = 40.02571;
    var user_lon = -105.25716;
    var poi_lat = 40.02611;
    var poi_lon = -105.25656;


    const R = 6371008;    // Radius of the Earth in Meters

    var φ1 = toRadians(user_lat); // Convert user latitude to radians
    var φ2 = toRadians(poi_lat);  // Convert POI latitude to radians
    var Δφ = toRadians(poi_lat-user_lat);  // difference between POI lat and User Lat in Radians
    var Δλ = toRadians(poi_lon-user_lon);  //difference between POI lon and User Lon in Radians

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = (R * c)/ 1609.34;

    return d.toFixed(2) + " miles";

}

console.log(getDistance());
