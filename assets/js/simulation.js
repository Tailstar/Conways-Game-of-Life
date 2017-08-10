var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";

var gridX = 24;
var gridY = 24;
var grid = createGrid(gridX);

function run() {
  drawGrid();
  //updateGrid();
}

function createGrid(rows) {
	var arr = [];
	for (var i = 0; i < rows; i++) {
		arr[i] = [0]
	}
	return arr;
}

function clickGrid(evt) {
    var posX = Math.floor((evt.clientX - canvas.offsetLeft) / 2 / 10);
    var posY = Math.floor((evt.clientY - canvas.offsetTop) / 2 / 10);
    grid[posX][posY]^=1;
    for (var x = 0; x < gridX; x++) {
      for (var y = 0; y < gridY; y++) {
        if (grid[x][y] == 1) {
          ctx.fillRect(x*20, y*20, 20, 20);
        } else {
          ctx.clearRect(x*20, y*20, 20, 20);
        }
      }
    }
}

function updateGrid() {
  
}

function drawGrid() {
	ctx.clearRect(0, 0, gridX, gridY);
}