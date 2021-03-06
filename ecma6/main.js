
var Tex = require('./textcell.js')
var RTe =  require('./rtextcell.js')
var Und = require('./underlinecell.js')

var TextCell = Tex.TextCell
var RTextCell =  RTe.RTextCell
var UnderlinedCell = Und.UnderlinedCell

//---------------------------------------------
/*
  return the array of maximum heights of each row
*/
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

/*
  return the array of maximum widths of each column
*/
function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}
    



function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      // return new TextCell(String(row[name]));
      var value = row[name];
      if (/^\s*[-+]?\d+([.]\d*)?([eE][-+]?\d+)?\s*$/.test(value))
        return new RTextCell(String(value));
      else
        return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}    
    
function drawIt(data) {
  return drawTable(dataTable(data));
}


//var MOUNTAINS = require("./mountains.json");
//console.log(drawIt(MOUNTAINS));
module.exports = {
  drawIt: drawIt,
  drawTable: drawTable,
  TextCell: TextCell,
  RTextCell: RTextCell,
  UnderlinedCell: UnderlinedCell
};

       