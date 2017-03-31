"use strict"

var Tex = require('../ecma6/textcell.js')
var TextCell = Tex.TextCell

var should = require('should');



describe("TextCell-ecma6", function() {

  it("Inicializacion", function() {
       
        should.exist(new TextCell(String("Hola")));
   })
   it("Metodo minWidth", function() {
        new TextCell(String("Hola")).minWidth().should.equal(4);
   })
   it("Metodo minHeight()", function() {
        new TextCell(String("Hola")).minHeight().should.equal(1);
   })
   
   it("Metodo draw(with,height)", function() {
       var dato = new TextCell(String('Hola'));
       dato.draw(8,1).should.have.ownProperty('0').equal('Hola    ');

   })
   
});
      