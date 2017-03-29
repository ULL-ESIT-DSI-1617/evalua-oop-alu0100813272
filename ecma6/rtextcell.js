"use strict"
var tx = require('./textcell.js')
var TextCell = tx.TextCell


// RTextCell
class RTextCell extends TextCell{
  contructor(text) {
     super.constructor(text)
  }

  draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(" ".repeat(width - line.length) + line);
    }
    return result;
  }
// End RTextCell    
}


module.exports = {
  RTextCell: RTextCell
};
