/* Weather Temporary Code */
let temp_f = 0;
let wind_speed_mph = 0;
let weather_summary = "Cloudy";
var degree_sign = "\u00B0";

/* Element Selectors */
const weather_temp_f = document.querySelector("#w-temp");
const weather_description = document.querySelector("#w-description");
const weather_icon = document.querySelector("#w-icon");
const wind_speed = document.querySelector("#w-speed");
const wind_chill = document.querySelector("#w-chill");

/* Weather API Code */
// store the url of the weather api in a variable which contains weather data for the coordinates of Draper, UT.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.5247&lon=-111.8638&APPID=50658f3950af3ac334e2b387a6c80e76&units=imperial';

// use an asynchronous fetch() function to request the weather API & check if it is valid
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();

  function  displayResults(weatherData) {

    const { name } = weatherData;
    const { icon, description } = weatherData.weather[0];
    const { temp, humidity } = weatherData.main;
    const { speed } = weatherData.wind;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    console.log('Weather: \n' + name, temp + 'F', humidity, speed + '\n', description);
    const description_cap = description.charAt(0).toUpperCase() + description.slice(1); // capitalize the first letter in the string

    /* Set Weather Icon */
    checkIcon(icon)

    /* Calculate Windchill */
    let temp_c = convertFtoC(temp);
    // 'f' is wind chill in Fahrenheit
    if (temp <= 50 && speed > 3) {
        var f = windChill(temp, speed);
        format_wind_chill = f.toFixed(0) + degree_sign + "F";
    }
    else {
        format_wind_chill = "N/A";
    }

    /* Display Values */
    weather_temp_f.textContent = temp.toFixed(0) + degree_sign + "F";
    weather_description.textContent = description_cap;
    wind_speed.textContent = speed.toFixed(1) + " mph";
    wind_chill.textContent = format_wind_chill;
    }

function checkIcon(icon) {
    // icon information can be found at https://openweathermap.org/weather-conditions
    /* 01n = "clear sky"
     * 02n = "few clouds"
     * 03n = "scattered clouds"
     * 04n = "broken clouds"
     * 09n = "shower rain"
     * 10n = "rain"
     * 11n = "thunderstorm"
     * 13n = "snow"
     * 50n = "mist"
     */
    switch(icon) {
        case "01n": // clear
            weather_icon.src = "../lesson4/images/i-sunny-64px.webp";
            break;
        case "02n": // few clouds
            weather_icon.src = "../lesson4/images/i-part-cloudy-64px.webp";
            break;
        case "03n": // scattered clouds
            weather_icon.src = "../lesson4/images/i-cloudy-64px.webp";
            break;
        case "04n": // broken clouds
            weather_icon.src = "../lesson4/images/i-cloudy-64px.webp";
            break;
        case "09n": // shower rain
            weather_icon.src = "../lesson4/images/i-rainy-64px.webp";
            break;
        case "10n": // rain
            weather_icon.src = "../lesson4/images/i-rainy-64px.webp";
            break;
        case "11n": // thunderstorm
            weather_icon.src = "../lesson4/images/i-stormy-64px.webp";
            break;
        case "13n": // snow
            weather_icon.src = "../lesson4/images/i-snowy-64px.webp";
            break;
        case "50n": // mist
            weather_icon.src = "../lesson4/images/i-hazy-64px.webp";
            break;
    }
}

/* Fahrenheit to Celcius Conversion */
function convertFtoC(f) {
    c = ((f-32) *5) / 9;
    return c; 
}

/* Wind Chill Code */
function windChill(t, s) {
    // 't' is air temperature in Fahrenheit,
    // 's' is windspeed in miles per hour at five feet above the ground.
    return 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
}
