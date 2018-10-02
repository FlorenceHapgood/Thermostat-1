function Thermostat(){
  this._temperature = 20;
};

//we could just write this.temperatue and our test would pass as well
// but this way we are signfying that we want it to be private
//and so we also making a temperature method in order to acccess it. Probably right.?!
// but we would have to alter our tests to not see temperature as a method. ie take out the brackets
Thermostat.prototype.temperature = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(number) {
  return this._temperature += number
};
