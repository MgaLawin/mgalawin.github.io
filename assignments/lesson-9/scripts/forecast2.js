  $(document).ready(function ($) {
    $.ajax({
      url: "https://api.wunderground.com/api/1ee6a7c406f598ba/forecast/q/MN/Franklin.json",
      dataType: "jsonp",
      success: function (parsed_json) {
        var v1 = parsed_json['forecast']['txt_forecast']['forecastday'];
        for (index in v1) {
          document.getElementById('forecastText').innerHTML = 'Weather forecast for ' + v1[index]['title'] + ' is ' + v1[index]['fcttext_metric'];
        }
      }
    });
  });
