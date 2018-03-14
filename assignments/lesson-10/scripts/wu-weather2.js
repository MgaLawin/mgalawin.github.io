// Current Conditions
var requestURL = 'http://api.wunderground.com/api/6710307f40d51364/conditions/q/MN/Franklin.json'
var requestCurrent = new XMLHttpRequest();
requestCurrent.open('GET', requestURL, true);
requestCurrent.send();

requestCurrent.onload = function(){
  var franklinWeather = JSON.parse(requestCurrent.responseText);
  console.log(franklinWeather);
  document.getElementById('currentTemp').innerHTML = franklinWeather.current_observation.temp_f;
  document.getElementById('w_icon').src = franklinWeather.current_observation.icon_url;
  document.getElementById('weatherString').innerHTML = franklinWeather.current_observation.weather;
  document.getElementById('wind').innerHTML = franklinWeather.current_observation.wind_mph;
}

// Current Condtions text
var conditionsText = new XMLHttpRequest();
conditionsText.open("GET", "http://api.wunderground.com/api/6710307f40d51364/forecast/q/MN/Franklin.json", true );
conditionsText.send();

conditionsText.onload = function (){
  var text = JSON.parse(conditionsText.responseText);
  console.log(text);
  document.getElementById('weatherText').innerHTML = text.forecast.txt_forecast.forecastday["0"].fcttext;
}
