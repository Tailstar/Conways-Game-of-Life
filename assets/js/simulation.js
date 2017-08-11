var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";

var gridX = 25;
var gridY = 25;
var grid = createGrid(gridX);

function run() {
    drawGrid();
    //updateGrid();
}

function createGrid(rows) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [0]
        for (var j = 0; j < rows; j++) {
            arr[i][j] = 0
        }
    }
    return arr;
}

function clickGrid(evt) {
    var posX = Math.floor((evt.clientX - canvas.offsetLeft) / 2 / 10);
    var posY = Math.floor((evt.clientY - canvas.offsetTop) / 2 / 10);
    grid[posX][posY] ^= 1;
    if (grid[posX][posY] == 1) {
        ctx.fillRect(posX * 20, posY * 20, 20, 20);
    } else {
        ctx.clearRect(posX * 20, posY * 20, 20, 20);
    }
}

function checkSquares(xpos, ypos) {
    var squareCount = 0
    try {
        if (typeof grid[xpos - 1][ypos - 1] == 'undefined') {
            squareCount += 0
        } else {
            squareCount += grid[xpos - 1][ypos - 1]
        }
    } catch (TypeError) {
        squareCount += 0
    };
    try {
        if (typeof grid[xpos][ypos - 1] == 'undefined') {
            squareCount += 0
        } else {
            squareCount += grid[xpos][ypos - 1]
        }
    } catch (TypeError) {
        squareCount += 0
    };
    try {
        if (typeof grid[xpos + 1][ypos - 1] == 'undefined') {
            squareCount += 0
        } else {
            squareCount += grid[xpos + 1][ypos - 1]
        }
    } catch (TypeError) {
        squareCount += 0
    };
    try {
        if (typeof grid[xpos - 1][ypos] == 'undefined') {
            squareCount += 0
        } else {
            squareCount += grid[xpos - 1][ypos]
        }
    } catch (TypeError) {
        squareCount += 0
    };
    try {
        if (typeof grid[xpos + 1][ypos] == 'undefined') {
            squareCount += 0
        } else {
            squareCount += grid[xpos + 1][ypos]
        }
    } catch (TypeError) {
        squareCount += 0
    };
    try {
        if (typeof grid[xpos - 1][ypos + 1] == 'undefined') {
            squareCount += 0
        } else {
            squareCount += grid[xpos - 1][ypos + 1]
        }
    } catch (TypeError) {
        squareCount += 0
    };
    try {
        if (typeof grid[xpos][ypos + 1] == 'undefined') {
            squareCount += 0
        } else {
            squareCount += grid[xpos][ypos + 1]
        }
    } catch (TypeError) {
        squareCount += 0
    };
    try {
        if (typeof grid[xpos + 1][ypos + 1] == 'undefined') {
            squareCount += 0
        } else {
            squareCount += grid[xpos + 1][ypos + 1]
        }
    } catch (TypeError) {
        squareCount += 0
    };
    console.log(squareCount);
}

function updateGrid() {
    for (var x = 0; x < gridX; x++) {
        for (var y = 0; y < gridY; y++) {
            // Do seomthing.
        }
    }
}

function drawGrid() {
    ctx.clearRect(0, 0, gridX, gridY);
}