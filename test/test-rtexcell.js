"use strict"

var rTex = require('../ecma6/rtextcell.js')
var RTextCell = rTex.RTextCell

var should = require('should');



describe("rTextCell-ecma6", function() {

  it("Inicializacion", function() {
        should.exist(new RTextCell(String("Hola")));
   })
   it("Metodo minWidth", function() {
        new RTextCell(String("Hola")).minWidth().should.equal(4);
   })
   it("Metodo minHeight()", function() {
        new RTextCell(String("Hola")).minHeight().should.equal(1);
   })
   it("Metodo draw(with,height)", function() {
        var dato = new RTextCell(String('Hola \nperro'));
        dato.draw(8,2).should.have.ownProperty('1').equal('   perro');
    
   })
   
   
});


//var asser = require("assert")
//assert.equal("uno","uno");