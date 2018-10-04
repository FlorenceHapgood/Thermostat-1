$(document).ready(function() {
var thermostat = new Thermostat();
updateTemperature();

// $('#current-city').change(function() {
//   var city = $('#current-city').val();
// $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7d7d33a65c53f4cff779a0fb09c273aa&units=metric', function(data) {
//   $('#outside-temperature').text(data.main.temp)
//   })
// })
displayWeather('London');

$('#current-city').change(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=7d7d33a65c53f4cff779a0fb09c273aa';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#outside-temperature').text(data.main.temp);
  })
}

$('#temperature-up').click(function() {
  thermostat.up();
  updateTemperature();
})
$('#temperature-down').on('click', function() {
  thermostat.down();
  updateTemperature();
})
$('#temperature-reset').on('click', function() {
  thermostat.resetButton();
  updateTemperature();
})
$('#powersaving-on').on('click', function() {
  thermostat.turnOnPMode();
  updateTemperature();
})
$('#powersaving-off').on('click', function() {
  thermostat.turnOffPMode();
  updateTemperature();
})

function updateTemperature() {
  $('#temperature').text(thermostat._temperature);
  $("#temperature").attr('class', thermostat.currentEnergyUsage());
}
})


// 7d7d33a65c53f4cff779a0fb09c273aa
