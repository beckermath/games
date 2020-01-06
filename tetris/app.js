const cvs = document.getElementById("grid");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("thing");
const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20;
const VACANT = "white"; 
const cvs2 = document.getElementById("next");
const ctx2 = cvs2.getContext("2d");
var dropSpeed = 600;
var increaser = .75;
var apple = document.getElementById("apple");
var alt = true;
var count = 1;
var nextPiece = 1;

//tetrominos

const I = [
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	],
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	]
];

const J = [
	[
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 1, 0],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	]
];

const L = [
	[
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[1, 0, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 0]
	]
];

const O = [
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0],
	]
];

const S = [
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	],
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const T = [
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const Z = [
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 0, 1],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[1, 0, 0]
	]
];


//draw a square for main board
function drawSquare(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ);

    ctx.strokeStyle = "BLACK";
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

//draw a square for next piece board
function drawSquare2(x, y, color){
    ctx2.fillStyle = color;
    ctx2.fillRect(x*SQ,y*SQ,SQ,SQ);

    ctx2.strokeStyle = "BLACK";
    ctx2.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

//create the boards

let board = [];
for( r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT;
    }
}

let board2 = [];
for( r = 0; r <4; r++){
    board2[r] = [];
    for(c = 0; c < 4; c++){
        board2[r][c] = VACANT;
    }
}



//draw the main board
function drawBoard(){
    for( r = 0; r <ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}

drawBoard();

//draw the next piece board
function drawBoard2(){
    for( r = 0; r <4; r++){
        for(c = 0; c < 4; c++){
            drawSquare2(c,r,board2[r][c]);
        }
    }
}

drawBoard2();

//pieces with thier colors

const PIECES = [
    [Z,"rgb(226, 125, 96)"],
    [S,"rgb(65, 179, 163)"],
    [T,"rgb(252, 231, 125)"],
    [O,"rgb(195, 141, 158)"],
    [L,"rgb(74, 39, 79)"],
    [I,"rgb(133, 220, 191)"],
    [J,"rgb(232, 168, 124)"]
];

drawNext(PIECES[3]); //orientation 3

//draw the piece for the next board
function drawNext(piece){
    for(r = 0; r < 4; r++){
        for(c = 0; c < 4; c++){
            ctx2.fillStyle = "white";
            ctx2.fillRect(r*20,c*20,20,20);

            ctx2.strokeStyle = "BLACK";
            ctx2.strokeRect(r*SQ,c*SQ,SQ,SQ);
        }
    }

    var foo = piece[0];

    if(foo.length == 1){
        var tero = foo[0];
    }
    else{
        var tero = foo[2];
    }
    
    for(r = 0; r < tero.length; r++){
        for(c = 0; c < tero.length; c++){
            if(tero[r][c]){
                drawSquare2(c, r, piece[1]);
            }

            ctx2.strokeStyle = "BLACK";
            ctx2.strokeRect(r*SQ,c*SQ,SQ,SQ);
        }
    }
}

//generate random pieces for main and next boards

function randomPiece(){
    let r = randomN = Math.floor(Math.random() * PIECES.length)
    let r2 = randomN = Math.floor(Math.random() * PIECES.length) 

    if(count % 2 == 0)
    {
        count++;
        r2 = nextPiece;
        drawNext(PIECES[r]);
        nextPiece = r;
        return new Piece( PIECES[r2][0], PIECES[r2][1]);
        
    }
    else{
        count++;
        r = nextPiece;
        drawNext(PIECES[r2]);
        nextPiece = r2;
        return new Piece( PIECES[r][0],PIECES[r][1]);
        
    }
}

let p = randomPiece();

//piece object

function Piece(tetromino,color){
    this.tetromino = tetromino;
    this.color = color;
    
    this.tetrominoN = 0; // we start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];
    
    // we need to control the pieces
    this.x = 3;
    this.y = -2;
}

//fill function

Piece.prototype.fill = function(color){
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we draw only occupied squares
            if( this.activeTetromino[r][c]){
                drawSquare(this.x + c,this.y + r, color);
            }
        }
    }
}

//draw a piece to the board

Piece.prototype.draw = function(){
    this.fill(this.color);
}

//undraw a piece

Piece.prototype.unDraw = function(){
    this.fill(VACANT);
}

//move down

Piece.prototype.moveDown = function(){
    if(!this.collision(0,1,this.activeTetromino)){
        this.unDraw();
        this.y++;
        this.draw();
    }else{
        // we lock the piece and generate a new one
        this.lock();
        p = randomPiece();
    }
    
}

//move right

Piece.prototype.moveRight = function(){
    if(!this.collision(1,0,this.activeTetromino)){
        this.unDraw();
        this.x++;
        this.draw();
    }
}

//move left

Piece.prototype.moveLeft = function(){
    if(!this.collision(-1,0,this.activeTetromino)){
        this.unDraw();
        this.x--;
        this.draw();
    }
}

//rotate

Piece.prototype.rotate = function(){
    let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
    let kick = 0;
    
    if(this.collision(0,0,nextPattern)){
        if(this.x > COL/2){
            // it's the right wall
            kick = -1; // we need to move the piece to the left
        }else{
            // it's the left wall
            kick = 1; // we need to move the piece to the right
        }
    }
    
    if(!this.collision(kick,0,nextPattern)){
        this.unDraw();
        this.x += kick;
        this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length; // (0+1)%4 => 1
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.draw();
    }
}

let score = 0;

Piece.prototype.lock = function(){
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            //skip vacant squares
            if( !this.activeTetromino[r][c]){
                continue;
            }
            //pieces to lock on top = game over
            if(this.y + r < 0){
                alert("you lose, score: " + scoreElement.innerHTML);
                //stop request animation frame
                gameOver = true;
                break;
            }
            //we lock the piece
            board[this.y+r][this.x+c] = this.color;
        }
    }
    //remove full rows
    for(r = 0; r < ROW; r++){
        let isRowFull = true;
        for( c = 0; c < COL; c++){
            isRowFull = isRowFull && (board[r][c] != VACANT);
        }
        if(isRowFull){
            dropSpeed = dropSpeed*increaser;
            console.log("dropSpeed : " + dropSpeed);
            console.log("increases: " + increaser);
            if(increaser < 1){
                increaser += .025;
            }
            
            apple.play();
            //if the row is full
            //we move down all the rows above it
            for( y = r; y > 1; y--){
                for( c = 0; c < COL; c++){
                    board[y][c] = board[y-1][c];
                }
            }
            //the top row board[0][..] has no row above it
            for( c = 0; c < COL; c++){
                board[0][c] = VACANT;
            }
            //increment the score
            score += 10;
        }
    }

    //update the board
    drawBoard();
    
    //update the score
    scoreElement.innerHTML = score;
}

//collision fucntion

Piece.prototype.collision = function(x,y,piece){
    for( r = 0; r < piece.length; r++){
        for(c = 0; c < piece.length; c++){
            // f the square is empty, we skip it
            if(!piece[r][c]){
                continue;
            }
            //coordinates of the piece after movement
            let newX = this.x + c + x;
            let newY = this.y + r + y;
            
            //conditions
            if(newX < 0 || newX >= COL || newY >= ROW){
                return true;
            }
            //skip newY < 0; board[-1] will crush our game
            if(newY < 0){
                continue;
            }
            //check if there is a locked piece alrady in place
            if( board[newY][newX] != VACANT){
                return true;
            }
        }
    }
    return false;
}

//CONTROL the piece

document.addEventListener("keydown",CONTROL);

function CONTROL(event){
    if(event.keyCode == 37){
        p.moveLeft();
        dropStart = Date.now();
    }else if(event.keyCode == 38){
        p.rotate();
        dropStart = Date.now();
    }else if(event.keyCode == 39){
        p.moveRight();
        dropStart = Date.now();
    }else if(event.keyCode == 40){
        p.moveDown();
    }
}

//drop the piece every 1sec

let dropStart = Date.now();
let gameOver = false;
function drop(){
    let now = Date.now();
    let delta = now - dropStart;
    if(delta > dropSpeed){
        p.moveDown();
        dropStart = Date.now();
    }
    if( !gameOver){
        requestAnimationFrame(drop);
    }
}

drop();
