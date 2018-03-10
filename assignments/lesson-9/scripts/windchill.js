var cityloc = "MN/Franklin.json"

var cityConditions = 'https://api.wunderground.com/api/1ee6a7c406f598ba/conditions/q/' + cityloc;

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
