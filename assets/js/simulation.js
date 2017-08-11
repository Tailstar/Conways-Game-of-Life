var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var gridX = 25;
var gridY = 25;
var grid = createGrid(gridX);
var tempgrid = createGrid(gridX);

function run() {
    updateGrid();
    drawGrid();
}

function createGrid(rows) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = []
    }
    return arr;
}

function clickGrid(evt) {
    ctx.fillStyle = "#000000";
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
    return squareCount;
}

function updateGrid() {
    for (var x = 0; x < gridX; x++) {
        for (var y = 0; y < gridY; y++) {
            var cells = checkSquares(x, y);
            if (grid[x][y] == 1) {
                if (cells < 2) {
                    tempgrid[x][y] = 0;
                } else if (cells >= 2 && cells <= 3) {
                    tempgrid[x][y] = 1;
                } else if (cells > 3) {
                    tempgrid[x][y] = 0;
                }
            } else {
                if (cells == 3) {
                    tempgrid[x][y] = 1;
                }
            }     
        }
    }
    grid = tempgrid;
    tempgrid = createGrid(gridX);
}

function drawGrid() {
    ctx.clearRect(0, 0, gridX, gridY);
    for (var x = 0; x < gridX; x++) {
        for (var y = 0; y < gridY; y++) {
            if (grid[x][y] == 1) {
                ctx.fillRect(x * 20, y * 20, 20, 20);
            } else {
                ctx.clearRect(x * 20, y * 20, 20, 20);
            }
        }
    }
}