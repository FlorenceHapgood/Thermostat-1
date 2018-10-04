$(document).ready(function() {
var thermostat = new Thermostat();
updateTemperature();

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
