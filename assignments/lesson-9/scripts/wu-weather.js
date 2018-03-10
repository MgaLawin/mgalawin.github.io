var wFranklin = new XMLHttpRequest();

weatherFranklin.open('GET', 'https://api.wunderground.com/api/1ee6a7c406f598ba/conditions/q/MN/Franklin.json', true);
wFranklin.send();

wFranklin.onload = function () {
  var wInfo = JSON.parse(wFranklin.responseText);
  console.log(wInfo);

  document.getElementById('place-f').innerHTML = wInfo.current_observation.display_location.city;
  document.getElementById('w-icon-f').src = wInfo.current_observation.icon_url;
  document.getElementById('weatherString-f').innerHTML = wInfo.current_observation.weather;
  document.getElementById('highT-f').innerHTML = wInfo.current_observation.temp_f;
  document.getElementById('windSpeed-f').innerHTML = wInfo.current_observation.wind_mph;
  document.getElementById('precip-f').innerHTML = wInfo.current_observation.precip_1hr_in;
  document.getElementById('windChill-f').innerHTML = wInfo.current_observation.windchill_f;
}
