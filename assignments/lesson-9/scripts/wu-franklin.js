var cityloc = 'MN/Franklin.json';

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

  document.getElementById('forecastText').innerHTML = wInfo2.forecast.fcttext;
}



// <script src="scripts/forecast.js"></script>
// <script src="scripts/windchill.js"></script>
