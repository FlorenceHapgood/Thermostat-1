describe('Thermostat', function(){
  var thermostat = new Thermostat();
  describe('temperature', function(){
    it('has a starting temperature of 20', function(){
      expect(thermostat.temperature()).toEqual(20);
    })
  })
  describe("up", function(){
    it("increases the temperature by the argument", function() {
      expect(thermostat.up(4)).toEqual(24);
      expect(thermostat.temperature()).toEqual(24);
    })
  })
})
