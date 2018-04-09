var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    var platinum = $('#platinum').text(myObj.services[0].platinum);
    var diamond = $('#diamond').text(myObj.services[0].diamond);
    var gold = $('#gold').text(myObj.services[0].gold);

    var forkFull = $('#forkFull').text(myObj.services[1].forkFull);
    var forkSeal = $('#forkSeal').text(myObj.services[1].forkSeal);
    var forkTool = $('#forkTool').text(myObj.services[1].forkTool);
    var forkFluid = $('#forkFluid').text(myObj.services[1].forkFluid);

    var shockService = $('#shockService').text(myObj.services[2].shockService);
    var shockSeal = $('#shockSeal').text(myObj.services[2].shockSeal);
    var shock8 = $('#shock8').text(myObj.services[2].shock8);
    var shock10 = $('#shock10').text(myObj.services[2].shock10);

    var flatRepair = $('#flatRepair').text(myObj.services[3].flatRepair);
    var wheelTrue = $('#wheelTrue').text(myObj.services[3].wheelTrue);
    var hubService = $('#hubService').text(myObj.services[3].hubService);
    var wheelBuild = $('#wheelBuild').text(myObj.services[3].wheelBuild);

    var brake = $('#brake').text(myObj.services[4].brake);
    var chain = $('#chain').text(myObj.services[4].chain);
    var deraileur = $('#deraileur').text(myObj.services[4].deraileur);
    var drivetrain = $('#drivetrain').text(myObj.services[4].drivetrain);
  }
};
xmlhttp.open("GET", "https://mgalawin.github.io/final/scripts/bikeService.json", true);
xmlhttp.send();
