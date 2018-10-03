describe('Thermostat', function(){
  var thermostat
  beforeEach(function(){
    thermostat = new Thermostat();
  })

  describe('temperature', function(){
    it('has a starting temperature of 20', function(){
      expect(thermostat.temperature()).toEqual(20);
    })
  })

  describe("up", function(){
    it("increases the temperature by one", function() {
      thermostat.up()
      expect(thermostat.temperature()).toEqual(21);
    })
    it('cannot be increased more than max temp, pmode on', function(){
      for (var i=0; i<15; i++){
        thermostat.up();
      }
      expect(thermostat.temperature()).toEqual(25);
    })
  })

  describe('down', function(){
    it('decreases the temperature by one', function(){
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19);
    })
    it('cannot be decreased more than min temp', function(){
      for (var i=0; i<15; i++){
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(10);
    })
  })

  describe('turn off Pmode', function(){
    it('sets pMode to false', function(){
      thermostat.turnOffPMode()
      expect(thermostat.pModeIsOn()).toEqual(false);
    })
  })

  describe('turn on Pmode', function(){
    it('sets pMode to true', function(){
      thermostat.turnOffPMode()
      thermostat.turnOnPMode()
      expect(thermostat.pModeIsOn()).toEqual(true);
    })
  })

  describe('maxTemp', function(){
    it('if pmode is on sets the max temperature to 25', function(){
      expect(thermostat.maxTemp()).toEqual(25);
    })
    it('if pmode is off sets the max temperature to 32', function(){
      thermostat.turnOffPMode()
      expect(thermostat.maxTemp()).toEqual(32);
    })
  })

  describe("pModeIsOn", function() {
    it("is on by default", function() {
      expect(thermostat.pModeIsOn()).toEqual(true);
    })
  })

  describe("resetButton", function() {
    it("resets the temperature to 20", function() {
      thermostat.resetButton();
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe("currentEnergyUsage", function() {
    it("if the temperature is under 18, it returns low usage", function() {
      for (var i=0; i<3; i++){
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(17)
      expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
    });
    it("returns medium usage if the temperature is under 25", function() {
      for (var i=0; i<4; i++){
        thermostat.up();
      }
      expect(thermostat.temperature()).toEqual(24)
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
    });
    it("returns high usage if the temperature is anything else", function() {
      for (var i=0; i<5; i++){
        thermostat.up();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
    });
  });
});
