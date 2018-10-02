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
  return true
};

Thermostat.prototype.up = function() {
  this._temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.temperature() > 10) {
    this._temperature --;
  };
};

// the user is trying to lower it BY a specific number,
// not setting it to what they want the temp to be
