window.onload = function() {
    canv = document.getElementById("grid");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/16);
}
var start = false;
document.getElementById("thing").innerHTML = "press space to begin";
var glitch = document.getElementById("glitch");
var over = document.getElementById("over");

score = 0;
width = 59;
height = 29;
mult = 5;

px = 29;
py = 14;

xv = 0;
yv = 0;

ax = Math.floor(Math.random()*width);
ay = Math.floor(Math.random()*height);

a2x = Math.floor(Math.random()*width);
a2y = Math.floor(Math.random()*height);

a3x = Math.floor(Math.random()*width);
a3y = Math.floor(Math.random()*height);

axv = 0;
ayv = 0;

function game() 
{
    px += xv;
    py += yv;

    var num;
    var num3;
    var num5;

    if(px > ax){
        num = Math.floor(Math.random()*2);
        num3 = 1;
        num5 = Math.floor(Math.random()*2);
    }
    else{
        num = Math.floor(Math.random()*2 -1);
        num3 = -1;
        num5 = Math.floor(Math.random()*2 -1);
    }

    var num2;
    var num4;
    var num6;

    if(py> ay){
        num2 = Math.floor(Math.random()*2);
        num4 = 1;
        num6 = Math.floor(Math.random()*2);
    }
    else{
        num2 = Math.floor(Math.random()*2 -1);
        num4 = -1;
        num6 = Math.floor(Math.random()*2 -1);
    }

    if(start){
        ax += num;
        ay += num2;
        a2x += num3;
        a2y += num4;
        a3x += num5;
        a3y += num6;
    }

    if(px < 0 || px > width || py < 0 || py > height){
        died();
    }

    if(ax < 0)
        ax = width;
    if(ax > width)
        ax = 0;
    if(ay < 0)
        ay = height;
    if(ay > height)
        ay = 0;

    if(a2x < 0)
        a2x = width;
    if(a2x > width)
        a2x = 0;
    if(a2y < 0)
        a2y = height;
    if(a2y > height)
        a2y = 0;

    if(a3x < 0)
        a3x = width;
    if(a3x > width)
        a3x = 0;
    if(a3y < 0)
        a3y = height;
    if(a3y > height)
        a3y = 0;
    
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = 'rgb(235, 33, 136)';
    ctx.fillRect(px*mult, py*mult, mult, mult);

    if((ax == px && ay == py) || (a2x == px && a2y == py) || (a3x == px && a3y == py))
    { 
        glitch.play();
        xv = 0; 
        yv = 0;
        axv = 0;
        ayv = 0;
        setTimeout(function(){killed();}, 500);
    }
    
    ctx.fillStyle = "rgb(8, 10, 82)";
    ctx.fillRect(ax*mult, ay*mult, mult, mult);

    ctx.fillStyle = "rgb(8, 10, 82)";
    ctx.fillRect(a2x*mult, a2y*mult, mult, mult);

    ctx.fillStyle = "rgb(8, 10, 82)";
    ctx.fillRect(a3x*mult, a3y*mult, mult, mult);

    if(start){
        score += 1;
        document.getElementById("thing").innerHTML = score;
    }
}

function keyPush(evt)
{
    if(start){
        switch(evt.keyCode){
            case 37:
                xv = -1;
                yv = 0;
                break;
            case 38:
                xv = 0;
                yv = -1;
                break;
            case 39:
                xv = 1;
                yv = 0;
                break;
            case 40:
                xv = 0;
                yv = 1;
                break;
            case 65:
                xv = -1;
                yv = 0;
                break;
            case 87:
                xv = 0;
                yv = -1;
                break;
            case 68:
                xv = 1;
                yv = 0;
                break;
            case 83:
                xv = 0;
                yv = 1;
                break;
        }
    }

    switch(evt.keyCode){
        case 32:
            start = true;
    }
}

function died(){
    over.play();
    window.alert("You ran into the wall, score: " + score);
    location.reload();
}

function killed(){
    px = 29;
    py = 14;

    ax = Math.floor(Math.random()*width);
    ay = Math.floor(Math.random()*height);

    a2x = Math.floor(Math.random()*width);
    a2y = Math.floor(Math.random()*height);

    a3x = Math.floor(Math.random()*width);
    a3y = Math.floor(Math.random()*height);

    a4x = Math.floor(Math.random()*width);
    a4y = Math.floor(Math.random()*height);
    
    if(start){
        window.alert("You were killed, score: " + score);
    }
    
    score = 0;
    start = false;
}