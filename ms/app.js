function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

var gridwidth = 40;

function Cell(i, j, w) {
    this.i = i;
    this.j = j;
  
    this.bomb = false;
    this.revealed = false;
}