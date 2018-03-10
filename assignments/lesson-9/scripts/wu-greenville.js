var weatherGreenville = new XMLHttpRequest();

wGreenville.open('GET', 'https://api.wunderground.com/api/1ee6a7c406f598ba/conditions/q/NC/Greenville.json', true);
wGreenville.send();

wGreenville.onload = function () {
  var weatherInfo = JSON.parse(wGreenville.responseText);
  console.log(wInfo);

  document.getElementById('place-g').innerHTML = wInfo.current_observation.display_location.city;
  document.getElementById('w-icon-g').src = wInfo.current_observation.icon_url;
  document.getElementById('weatherString-g').innerHTML = wInfo.current_observation.weather;
  document.getElementById('highT-g').innerHTML = wInfo.current_observation.temp_f;
  document.getElementById('windSpeed-g').innerHTML = wInfo.current_observation.wind_mph;
  document.getElementById('precip-g').innerHTML = wInfo.current_observation.precip_1hr_in;
  document.getElementById('windChill-g').innerHTML = wInfo.current_observation.windchill_f;
}
