function Thermostat(){
  this._temperature = 20;
  this._pModeIsOn = true;
};

//we could just write this.temperatue and our test would pass as well
// but this way we are signfying that we want it to be private
//and so we also making a temperature method in order to acccess it. Probably right.?!
// but we would have to alter our tests to not see temperature as a method. ie take out the brackets
Thermostat.prototype.temperature = function(){
  return this._temperature;
};

Thermostat.prototype.pModeIsOn = function() {
  return this._pModeIsOn
};

Thermostat.prototype.turnOnPMode = function() {
  this._pModeIsOn = true;
};

Thermostat.prototype.turnOffPMode = function() {
  this._pModeIsOn = false;
};

Thermostat.prototype.maxTemp = function(){
  if (this._pModeIsOn == true){
    return 25;
  } else {
    return 32;
  }
}

Thermostat.prototype.up = function() {
  if (this.temperature() < this.maxTemp()) {
    this._temperature ++;
  };
};

Thermostat.prototype.down = function() {
  if (this.temperature() > 10) {
    this._temperature --;
  };
};

Thermostat.prototype.resetButton = function() {
  this._temperature = 20;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this._temperature < 18){
    return "low-usage";
  } else if (this._temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
