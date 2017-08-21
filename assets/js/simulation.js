var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

var gridX = 25;
var gridY = 25;
var grid = createGrid(gridX);
var tempgrid = createGrid(gridX);
var checker = 0;

function startAnimation(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate() {
    requestAnimationFrame(animate)
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        updateGrid();
        drawGrid();
    }
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
                checker ++;
                if (cells == 3) {
                    tempgrid[x][y] = 1;
                } else if (checker == 625) {
                    $( "#speed-slider" ).slider({
                      value: 0,
                    });
                    $("#speed-box").val(0);
                    startAnimation(0)
                }
            }     
        }
    }
    grid = tempgrid;
    tempgrid = createGrid(gridX);
    checker = 0;
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

// Pentadecathlon Preset
function pentadecathlon() {
    ctx.clearRect(0, 0, gridX, gridY);
    grid = createGrid(gridX);
    grid[12][6] ^= 1;
    grid[12][7] ^= 1;
    grid[11][8] ^= 1;
    grid[13][8] ^= 1;
    grid[12][9] ^= 1;
    grid[12][10] ^= 1;
    grid[12][11] ^= 1;
    grid[12][12] ^= 1;
    grid[11][13] ^= 1;
    grid[13][13] ^= 1;
    grid[12][14] ^= 1;
    grid[12][15] ^= 1;
    drawGrid();
}

// Pulsar Preset
function pulsar() {
    ctx.clearRect(0, 0, gridX, gridY);
    grid = createGrid(gridX);
    grid[10][10] ^= 1;
    grid[12][10] ^= 1;
    grid[14][10] ^= 1;
    grid[10][11] ^= 1;
    grid[14][11] ^= 1;
    grid[10][12] ^= 1;
    grid[14][12] ^= 1;
    grid[10][13] ^= 1;
    grid[14][13] ^= 1;
    grid[10][14] ^= 1;
    grid[12][14] ^= 1;
    grid[14][14] ^= 1;
    drawGrid();
}

// Tumbler Preset
function tumbler() {
    ctx.clearRect(0, 0, gridX, gridY);
    grid = createGrid(gridX);
    grid[10][7] ^= 1;
    grid[11][7] ^= 1;
    grid[13][7] ^= 1;
    grid[14][7] ^= 1;
    grid[10][8] ^= 1;
    grid[11][8] ^= 1;
    grid[13][8] ^= 1;
    grid[14][8] ^= 1;
    grid[11][9] ^= 1;
    grid[13][9] ^= 1;
    grid[9][10] ^= 1;
    grid[11][10] ^= 1;
    grid[13][10] ^= 1;
    grid[15][10] ^= 1;
    grid[9][11] ^= 1;
    grid[11][11] ^= 1;
    grid[13][11] ^= 1;
    grid[15][11] ^= 1;
    grid[9][12] ^= 1;
    grid[10][12] ^= 1;
    grid[14][12] ^= 1;
    grid[15][12] ^= 1;
    drawGrid();
}

// Stills Preset
function stills() {
    ctx.clearRect(0, 0, gridX, gridY);
    grid = createGrid(gridX);
    // Block
    grid[5][2] ^= 1;
    grid[6][2] ^= 1;
    grid[5][3] ^= 1;
    grid[6][3] ^= 1;
    grid[20][19] ^= 1;
    grid[21][19] ^= 1;
    grid[20][20] ^= 1;
    grid[21][20] ^= 1;

    // Vertical Beehive
    grid[4][7] ^= 1;
    grid[3][8] ^= 1;
    grid[5][8] ^= 1;
    grid[3][9] ^= 1;
    grid[5][9] ^= 1;
    grid[4][10] ^= 1;
    
    // Horizontal Beehive
    grid[15][2] ^= 1;
    grid[16][2] ^= 1;
    grid[14][3] ^= 1;
    grid[17][3] ^= 1;
    grid[15][4] ^= 1;
    grid[16][4] ^= 1;
    
    // NE Loaf
    grid[15][7] ^= 1;
    grid[16][7] ^= 1;
    grid[14][8] ^= 1;
    grid[17][8] ^= 1;
    grid[15][9] ^= 1;
    grid[17][9] ^= 1;
    grid[16][10] ^= 1;
    
    // SE Loaf
    grid[16][12] ^= 1;
    grid[15][13] ^= 1;
    grid[17][13] ^= 1;
    grid[14][14] ^= 1;
    grid[17][14] ^= 1;
    grid[15][15] ^= 1;
    grid[16][15] ^= 1;
    
    // SW Loaf
    grid[10][12] ^= 1;
    grid[9][13] ^= 1;
    grid[11][13] ^= 1;
    grid[9][14] ^= 1;
    grid[12][14] ^= 1;
    grid[10][15] ^= 1;
    grid[11][15] ^= 1;
    
    // NW Loaf
    grid[10][7] ^= 1;
    grid[11][7] ^= 1;
    grid[9][8] ^= 1;
    grid[12][8] ^= 1;
    grid[9][9] ^= 1;
    grid[11][9] ^= 1;
    grid[10][10] ^= 1;
    
    // NE Boat
    grid[14][18] ^= 1;
    grid[15][18] ^= 1;
    grid[13][19] ^= 1;
    grid[15][19] ^= 1;
    grid[14][20] ^= 1;
    
    // SE Boat
    grid[21][6] ^= 1;
    grid[20][7] ^= 1;
    grid[22][7] ^= 1;
    grid[21][8] ^= 1;
    grid[22][8] ^= 1;
    
    // SW Boat
    grid[21][12] ^= 1;
    grid[20][13] ^= 1;
    grid[22][13] ^= 1;
    grid[20][14] ^= 1;
    grid[21][14] ^= 1;
    
    // NW Boat
    grid[7][17] ^= 1;
    grid[8][17] ^= 1;
    grid[7][18] ^= 1;
    grid[9][18] ^= 1;
    grid[8][19] ^= 1;
    
    // Tub
    grid[4][14] ^= 1;
    grid[3][15] ^= 1;
    grid[5][15] ^= 1;
    grid[4][16] ^= 1;
    drawGrid();
}