function doInputOutput() {
  var tempF = parseFloat(document.getElementById('Temperature').value);
  var speed = parseFloat(document.getElementById('WindSpeed').value);
  var windChillTemp = 0;
  if (tempF <= 50 && speed > 3) {
    var windChillTemp = windChill(tempF, speed);
    document.getElementById('outputDiv').innerHTML = windChillTemp + "°F";
  } else {
    document.getElementById('outputDiv').innerHTML = tempF + "°F";
  }
}

function windChill(tempF, speed) {
  var windChillTemp = 35.74 + (0.6215 * tempF) - (35.75 * speed ** .16) + (0.4275 * tempF * speed ** .16);
  return windChillTemp;
}
