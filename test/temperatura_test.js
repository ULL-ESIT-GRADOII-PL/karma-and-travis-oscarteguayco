var expect = chai.expect;

describe("Medida", function() {
  describe("constructor", function() {
     it("should have a value (one argument's constructor)", function() {
      var med = new Medida("0.56f");
      expect(med.getValor()).to.equal(0.56);
    });
    it("should have a type (one argument's constructor)", function() {
      var med = new Medida("0.56f");
      expect(med.getTipo()).to.equal("f");
    });
    it("should have a value", function() {
      var med = new Medida(0.56, "c");
      expect(med.getValor()).to.equal(0.56);
    });
    it("should have a type", function() {
      var med = new Medida(0.56, "c");
      expect(med.getTipo()).to.equal("c");
    });
  });
  describe("#convertir", function() {
    it("should convert '32f' to Celsius correctly", function() {
      var value = Medida.convertir("32f to c");
      expect(value).to.equal("0.00 Celsius");
    });
    it("should show an error invalid input", function() {
      var value = Medida.convertir("lz to c");
      expect(value).to.equal("Introduzca una temperatura válida: 330e-1 F to C");
    });
  });
  describe("#match", function() {
    it("should return a correct matching", function() {
      var match = Medida.match("32f to k");
      expect(match.numero).to.equal("32");
      expect(match.tipo).to.equal("f");
      expect(match.destino).to.equal("k");
    });
  });
});

describe("Temperatura", function() {
  describe("constructor", function() {
    it("should have a value", function() {
      var temp = new Temperatura(32, "f");
      expect(temp.getValor()).to.equal(32);
    });
    it("should have a type", function() {
      var temp = new Temperatura(32, "f");
      expect(temp.getTipo()).to.equal("f");
    });
  });
});

describe("Fahrenheit", function(){
  describe("constructor", function(){
    it("should have a value", function() {
      var fah = new Fahrenheit(32);
      expect(fah.getValor()).to.equal(32);
    });
    it("should have a type", function() {
      var fah = new Fahrenheit(32);
      expect(fah.getTipo()).to.equal("f");  
    });
    it("should have a name", function() {
      var fah = new Fahrenheit(32);
      expect(fah.name).to.equal("Fahrenheit");  
    });
  });
  describe("#toCelsius", function() {
    it("should convert Fahrenheit to Celsius", function(){
      var value = new Fahrenheit(32).toCelsius();
      expect(value).to.equal(0);
    });  
  });
  describe("#toKelvin", function() {
    it("should convert Fahrenheit to Kelvin", function(){
      var value = new Fahrenheit(32).toKelvin();
      expect(value).to.equal(273.15);
    });  
  });
});

describe("Celsius", function(){
  describe("constructor", function(){
    it("should have a value", function() {
      var cel = new Celsius(15);
      expect(cel.getValor()).to.equal(15);
    });
    it("should have a type", function() {
      var cel = new Celsius(15);
      expect(cel.getTipo()).to.equal("c");  
    });
    it("should have a name", function() {
      var cel = new Celsius(32);
      expect(cel.name).to.equal("Celsius");  
    });
  });
  describe("#toFahrenheit", function() {
    it("should convert Celsius to Fahrenheit", function(){
      var value = new Celsius(0).toFahrenheit();
      expect(value).to.equal(32);
    });  
  });
  describe("#toKelvin", function() {
    it("should convert Celsius to Kelvin", function(){
      var value = new Celsius(0).toKelvin();
      expect(value).to.equal(273.15);
    });  
  });
});

describe("Kelvin", function(){
  describe("constructor", function(){
    it("should have a value", function() {
      var kel = new Kelvin(10);
      expect(kel.getValor()).to.equal(10);
    });
    it("should have a type", function() {
      var kel = new Kelvin(10);
      expect(kel.getTipo()).to.equal("k");  
    });
    it("should have a name", function() {
      var kel = new Kelvin(10);
      expect(kel.name).to.equal("Kelvin");  
    });
  });
  describe("#toFahrenheit", function() {
    it("should convert Kelvin to Fahrenheit", function(){
      var value = new Kelvin(273.15).toFahrenheit();
      expect(value).to.equal(32);
    });  
  });
  describe("#toCelsius", function() {
    it("should convert Kelvin to Celsius", function(){
      var value = new Kelvin(273.15).toCelsius();
      expect(value).to.equal(0);
    });  
  });
});

