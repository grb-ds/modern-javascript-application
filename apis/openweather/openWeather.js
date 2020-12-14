//https://developer.mozilla.org/es/docs/Web/API/URL/URL
//https://openweathermap.org/forecast5#name5

/*let myGeoLatitude = localStorage.getItem('geoLatitude');
let myGeoLongitude = localStorage.getItem('geoLongitude');
 */


/*-----------------------  CALL FILE API --------------------------------*/
 const getCitiesFromFile = (city) => {
     let cities =  [];
       fetch('./apis/openweather/city.list.json')
        .then(response => response.json())
        .then(jsonResponse => {
           console.log(jsonResponse);

            let pattern = new RegExp( city, "g");

            console.log(pattern);
            cities = jsonResponse.filter(data => data.name.match(pattern));


          /*  jsonResponse.forEach(data =>
            {


                if (pattern.test(data.name.toUpperCase())) {
                    data.name.toUpperCase();
                   cities.push(data);
                }
            });*/
            console.log(cities);
           /* if ( city !== undefined && city[0] !== undefined){
                console.log(city);
                 callOpenWeatherAPI(city[0].coord.lat,city[0].coord.lon);
            }*/
        })
        .catch( e => {
            console.error(e);
        });
    };

/*--------------------------- CALL API ----------------------------------*/

/**
 * This async function use fetch to make request API One Call
 * bring current, hourly, week information and exclude minutely and alerts
 * @param All parameters are requerided
 */
const oneCallAPIRequest = async (latitude,longitude) => {
    const basePathAPI = "https://api.openweathermap.org";
    const keyAPI = "fecb38509801841509434bd9c74070e8";
    let units = "metric";
    let path = `${basePathAPI}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&exclude=minutely,alerts&appid=${keyAPI}`;
    //  ://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,alerts&appid=6d8f4ab095107d93c2331b5fb434dcb5
    console.log("ONE CALL PATH");
    console.log(path);
    return await fetch(path,{});
}

export { oneCallAPIRequest, getCitiesFromFile };

