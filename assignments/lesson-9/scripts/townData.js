var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var townInfo = request.response;
  showTowns(townInfo);
}

function showTowns(jsonObj) {
  var town = jsonObj['towns'];

  for (var i = 0; i < town.length; i++) {
    if (town[i].name == "Franklin" || town[i].name == "Springfield" || town[i].name == "Greenville") {
      var wArt = document.createElement('article');
      var wH3 = document.createElement('h3');
      var wH4 = document.createElement('h4');
      var wP2 = document.createElement('p');
      var wP3 = document.createElement('p');
      var wP4 = document.createElement('p');
      var wUL = document.createElement('ul');

      wH3.textContent = town[i].name;
      wH4.textContent = town[i].motto;
      wP2.textContent = 'Year Founded: ' + town[i].yearFounded;
      wP3.textContent = 'Current Population: ' + town[i].currentPopulation;
      wP4.textContent = 'Average Rainfall: ' + town[i].averageRainfall;
      wUL.textContent = 'Events: ';

      var eventList = town[i].events;

      for (var j = 0; j < eventList.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = eventList[j];
        myList.appendChild(listItem);
      }

      wArt.appendChild(wH3);
      wArt.appendChild(wH4);
      wArt.appendChild(wP2);
      wArt.appendChild(wP3);
      wArt.appendChild(wP4);
      wArt.appendChild(wUL);

      section.appendChild(wArt);
    }
  }
}
