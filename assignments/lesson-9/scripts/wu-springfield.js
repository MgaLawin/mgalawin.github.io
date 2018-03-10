var weatherSpringfield = new XMLHttpRequest();

wSpringfield.open('GET', 'https://api.wunderground.com/api/1ee6a7c406f598ba/conditions/q/MO/Springfield.json', true);
wSpringfield.send();

wSpringfield.onload = function() {
  var weatherInfo = JSON.parse(wSpringfield.responseText);
  console.log(wInfo);

  document.getElementById('place-s').innerHTML = wInfo.current_observation.display_location.city;
  document.getElementById('w-icon-s').src = wInfo.current_observation.icon_url;
  document.getElementById('weatherString-s').innerHTML = wInfo.current_observation.weather;
  document.getElementById('highT-s').innerHTML = wInfo.current_observation.temp_f;
  document.getElementById('windSpeed-s').innerHTML = wInfo.current_observation.wind_mph;
  document.getElementById('precip-s').innerHTML = wInfo.current_observation.precip_1hr_in;
  document.getElementById('windChill-s').innerHTML = wInfo.current_observation.windchill_f;
}
