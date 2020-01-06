window.onload = function() {
    canv = document.getElementById("grid");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/20);
}

var appleSound = document.getElementById("apple");
var gameOverSound = document.getElementById("over");

width = 59;
height = 29;
mult = 5;

px = Math.floor(Math.random() * width + 1);
py = Math.floor(Math.random() * height + 1);

xv = 0;
yv = 0;

ax = Math.floor(Math.random() * width + 1);
ay = Math.floor(Math.random() * height + 1);

trail = [];
tail = 1;

num = 0;

function game()
{
    px += xv;
    py += yv;

    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, canv.width, canv.height);

    for(var i = 0; i < trail.length; i++)
    {
        ctx.fillStyle = 'rgb(236, 77, 55)';
        ctx.fillRect(trail[i].x*mult, trail[i].y*mult, mult, mult);

        if(trail[i].x == px && trail[i].y == py && trail.length != 1)
        {
            died();
        }
    }
    
    if(px < 0 || px > width || py < 0 || py > height){
        died();
    }

    trail.push({x: px, y: py});

    while(trail.length > tail)
    {
        trail.shift();
    }

    if(px == ax && py == ay)
    {
        appleSound.play();
        num = Math.floor(Math.random() * 8 + 3);
        tail = tail + num;

        ax = Math.floor(Math.random() * width + 1);
        ay = Math.floor(Math.random() * height + 1);
    }

    ctx.fillStyle = 'rgb(29, 27, 27)';
    ctx.fillRect(ax*mult, ay*mult, mult, mult);
    
    document.getElementById("thing").innerHTML = tail;
}

function died()
{
    gameOverSound.play();
    ctx.fillStyle = 'rgb(236, 77, 55)';

    px = Math.floor(Math.random() * width + 1);
    py = Math.floor(Math.random() * height + 1);
    
    setTimeout(function(){
        window.alert("You DIED, length: " + tail + ", OK to restart");
        location.reload();
    }, 21);
}

function keyPush(evt)
{
    switch(evt.keyCode){
        case 37:
            if(xv != 1)
            {
                xv = -1;
                yv = 0;
            }
            break;
        case 38:
            if(yv != 1)
            {
                xv = 0;
                yv = -1;
            }
            break;
        case 39:
            if(xv != -1)
            {
                xv = 1;
                yv = 0;
            }
            break;
        case 40:
            if(yv != -1)
            {
                xv = 0;
                yv = 1; 
            }
            break;
        case 65:
            if(xv != 1)
            {
                xv = -1;
                yv = 0;
            }
            break;
        case 87:
            if(yv != 1)
            {
                xv = 0;
                yv = -1;
            }
            break;
        case 68:
            if(xv != -1)
            {
                xv = 1;
                yv = 0;
            }
            break;
        case 83:
            if(yv != -1)
            {
                xv = 0;
                yv = 1; 
            }
            break;
    }
}

