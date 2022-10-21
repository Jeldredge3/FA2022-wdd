/* Weather Temporary Code */
let temp_f = 68;
let wind_speed_mph = 6;
let weather_summary = "Clear";
var degree_sign = "\u00B0";

/* Temperature & Wind Speed Code */
const weather_temp_f = document.querySelector("#w-temp");
const weather_description = document.querySelector("#w-description");
const weather_icon = document.querySelector("#w-icon");
const wind_speed = document.querySelector("#w-speed");

let format_temp_f = temp_f.toFixed(0) + degree_sign + " F";

weather_icon.textContent = "(placeholder)";
weather_temp_f.textContent = format_temp_f;
weather_description.textContent = weather_summary;
wind_speed.textContent = wind_speed_mph + " mph";

/* Fahrenheit to Celcius Conversion */
function convertFtoC(f) {
    c = ((f-32) *5) / 9;
    return c; 
}
let temp_c = convertFtoC(temp_f);
let format_temp_c = temp_c.toFixed(0) + degree_sign + " C";

/* Wind Chill Code */
const wind_chill = document.querySelector("#w-chill");

function windChill(t, s) {
    // 't' is air temperature in Fahrenheit,
    // 's' is windspeed in miles per hour at five feet above the ground.
    return 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
}
// 'f' is wind chill in Fahrenheit
var f = windChill(temp_f, wind_speed_mph);
format_wind_chill = f.toFixed(2) + degree_sign + " F";

wind_chill.textContent = format_wind_chill;
