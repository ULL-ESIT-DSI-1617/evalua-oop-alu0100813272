"use strict"

var Und = require('../ecma6/underlinecell.js')
var UnderlinedCell = Und.UnderlinedCell
var should = require('should');


var tx = require('../ecma6/textcell.js')
var TextCell = tx.TextCell


var rTex = require('../ecma6/rtextcell.js')
var RTextCell = rTex.RTextCell


describe("UnderlinedCell-ecma6", function() {

  it("Inicializacion", function() {
       
       should.exist(new UnderlinedCell(new TextCell(String("Pedro"))));
       //Herencia
       should.exist(new UnderlinedCell(new RTextCell(String("Juan"))));
       
   })
   
   it("Metodo minWidth", function() {
       //Cantida de letras
       new UnderlinedCell(new TextCell(String("Pedro"))).minWidth().should.equal(5);
       new UnderlinedCell(new RTextCell(String("juan"))).minWidth().should.equal(4);
   })
   it("Metodo minHeight()", function() {
        // tien 1 en texcerl y se le suma 1 dos lines minimo
        new UnderlinedCell(new TextCell(String("Pedro"))).minHeight().should.equal(2);
        new UnderlinedCell(new RTextCell(String("juan"))).minHeight().should.equal(2);
       
   })
   
   it("Metodo draw(with,height)", function() {
       var datoA = new UnderlinedCell(new TextCell(String("Pedro")));
       datoA.draw(6,2).should.have.ownProperty('0').equal('Pedro ');
       datoA.draw(6,2).should.have.ownProperty('1').equal('------');
       
       
       var datoA = new UnderlinedCell(new RTextCell(String("juan")));
       datoA.draw(5,2).should.have.ownProperty('0').equal(' juan');
       datoA.draw(5,2).should.have.ownProperty('1').equal('-----');

   })
   
});