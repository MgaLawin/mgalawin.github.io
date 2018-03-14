var cityloc = 'NC/Greenville.json';

var cityConditions = 'https://api.wunderground.com/api/1ee6a7c406f598ba/conditions/q/' + cityloc;
var cityForecast = 'https://api.wunderground.com/api/1ee6a7c406f598ba/forecast/q/' + cityloc;

var wCity = new XMLHttpRequest();

wCity.open('GET', cityConditions, true);
wCity.send();

wCity.onload = function () {
  var wInfo = JSON.parse(wCity.responseText);
  console.log(wInfo);

  document.getElementById('weatherString').innerHTML = wInfo.current_observation.weather;
  document.getElementById('currentTemp').innerHTML = wInfo.current_observation.temp_f;
  document.getElementById('windSpeed').innerHTML = wInfo.current_observation.wind_mph;
  document.getElementById('windDir').innerHTML = wInfo.current_observation.wind_dir;
  document.getElementById('w-icon').src = wInfo.current_observation.icon_url;
}


var wCity2 = new XMLHttpRequest();

wCity2.open('GET', cityForecast, true);
wCity2.send();

wCity2.onload = function () {
  var wInfo2 = JSON.parse(wCity2.responseText);
  console.log(wInfo2);

  document.getElementById('forecastText').innerHTML = wInfo2.forecast.txt_forecast.forecastday["0"].fcttext;
}

var wCity3 = new XMLHttpRequest();

wCity3.open('GET', cityConditions, true);
wCity3.send();

wCity3.onload = function () {
  var wInfo3 = JSON.parse(wCity3.responseText);
  console.log(wInfo3);

  var temp = wInfo3.current_observation.temp_f;
  var speed = wInfo3.current_observation.wind_mph;
  var windChillTemp = 0;
  if (temp <= 50 && speed > 3) {
    var windChillTemp = 35.74 + (0.6215 * temp) - (35.75 * speed ** .16) + (0.4275 * temp * speed ** .16);
    var digits = 1;
    var multiplier = Math.pow(10, digits);
    windChillTemp = Math.round(windChillTemp * multiplier) / multiplier;
    document.getElementById("windChillTempValue").innerHTML = windChillTemp;
  } else {
    document.getElementById('windChillTempValue').innerHTML = temp;
  }
}
