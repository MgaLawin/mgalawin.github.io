var tempH = parseFloat(document.getElementById('hightemp').innerHTML);
var tempL = parseFloat(document.getElementById('lowtemp').innerHTML);
var tempF = (tempH + tempL) / 2;
var speed = parseFloat(document.getElementById('windspeed').innerHTML);
var windChillTemp = 0;
if (tempF <= 50 && speed > 3) {
  var windChillTemp = 35.74 + (0.6215 * tempF) - (35.75 * speed ** .16) + (0.4275 * tempF * speed ** .16);
  var digits = 1;
  var multiplier = Math.pow(10, digits);
  windChillTemp = Math.round(windChillTemp * multiplier) / multiplier;
  document.getElementById("windChillTempValue").innerHTML = windChillTemp;
} else {
  document.getElementById('windChillTempValue').innerHTML = tempF;
}
