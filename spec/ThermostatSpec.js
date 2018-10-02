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
  })

  describe('down', function(){
    it('decreases the temperature by one', function(){
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19);
    })
    it('set the temperature to minimum 10 if down argument less than 10', function(){
      for (var i=0; i<15; i++){
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(10);
    })
  })

  describe("pModeIsOn", function() {
    it("is on by default", function() {
      expect(thermostat.pModeIsOn()).toEqual(true);
    })
  })
})
