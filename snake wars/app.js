window.onload = function() {
    canv = document.getElementById("grid");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/20);
}

var gameOverSound = document.getElementById("over");
var appleSound = document.getElementById("apple");
var squish = document.getElementById("squish");
var grow = document.getElementById("grow");

p1score = 0;
p2score = 0;
buffer = true;
buffer2 = true;

width = 59;
height = 29;
mult = 5;

px = 10;
py = 5;

xv = 0;
yv = 0;

p2x = 49;
p2y = 5;

x2v = 0;
y2v = 0;

ax = Math.floor(Math.random() * width + 1);
ay = Math.floor(Math.random() * height + 1);

a2x = Math.floor(Math.random() * width + 1);
a2y = Math.floor(Math.random() * height + 1);

trail = [];
tail = 1;

trail2 = [];
tail2 = 1;

num = 0;

function game()
{
    px += xv;
    py += yv;

    p2x += x2v;
    p2y += y2v;

    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, canv.width, canv.height);

    for(var i = 0; i < trail.length; i++)
    {
        ctx.fillStyle = 'rgb(36, 54, 101)';
        ctx.fillRect(trail[i].x*mult, trail[i].y*mult, mult, mult);

        if(trail[i].x == p2x && trail[i].y == p2y && tail >1)
        {
            if(buffer && tail2 > 1)
            {
                tail2 = 1;
                p1score++;
                buffer = false;
                squish.play();
                setTimeout(function() {buffer = true;}, 2000);
            }
        }

        if(trail[i].x == px && trail[i].y == py && tail > 1)
        {
            tail = 1;
            gameOverSound.play();
        }
    }
    

    for(var i = 0; i < trail2.length; i++)
    {
        ctx.fillStyle = 'rgb(139, 216, 189)';
        ctx.fillRect(trail2[i].x*mult, trail2[i].y*mult, mult, mult);

        if(trail2[i].x == px && trail2[i].y == py && tail2 > 1)
        {
            if(buffer2 && tail > 1)
            {
                tail = 1;
                p2score++;
                buffer2 = false;
                squish.play();
                setTimeout(function() {buffer2 = true;}, 2000);
            }
        }

        if(trail2[i].x == p2x && trail2[i].y == p2y && tail2 > 1)
        {
            tail2 = 1;
            gameOverSound.play();
        }
    }
    
    if(px < 0)
        px = width;
    if(px > width)
        px = 0;
    if(py < 0)
        py = height;
    if(py > height)
        py = 0;

    if(p2x < 0)
        p2x = width;
    if(p2x > width)
        p2x = 0;
    if(p2y < 0)
        p2y = height;
    if(p2y > height)
        p2y = 0;

    trail.push({x: px, y: py});
    trail2.push({x: p2x, y: p2y});

    while(trail.length > tail){
        trail.shift();
    }

    while(trail2.length > tail2){
        trail2.shift();
    }

    if((px == ax && py == ay) || (px == a2x && py == a2y))
    {
        grow.play();
        num = Math.floor(Math.random() * 3 + 3);
        tail = tail + num;

        if(px == ax && py == ay)
        {
            ax = Math.floor(Math.random() * width + 1);
            ay = Math.floor(Math.random() * height + 1);
        }
        else
        {
            a2x = Math.floor(Math.random() * width + 1);
            a2y = Math.floor(Math.random() * height + 1);
        }
    }

    if((p2x == ax && p2y == ay) || (p2x == a2x && p2y == a2y))
    {
        grow.play();
        num = Math.floor(Math.random() * 8 + 3);
        tail2 = tail2 + num;

        if(p2x == ax && p2y == ay)
        {
            ax = Math.floor(Math.random() * width + 1);
            ay = Math.floor(Math.random() * height + 1);
        }
        else
        {
            a2x = Math.floor(Math.random() * width + 1);
            a2y = Math.floor(Math.random() * height + 1);
        }
    }

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(ax*mult, ay*mult, mult, mult);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(a2x*mult, a2y*mult, mult, mult);

    document.getElementById("thing").innerHTML = p1score;
    document.getElementById("thing2").innerHTML = p2score;
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
            if(x2v != 1)
            {
                x2v = -1;
                y2v = 0;
            }
            break;
        case 87:
            if(y2v != 1)
            {
                x2v = 0;
                y2v = -1;
            }
            break;
        case 68:
            if(x2v != -1)
            {
                x2v = 1;
                y2v = 0;
            }
            break;
        case 83:
            if(y2v != -1)
            {
                x2v = 0;
                y2v = 1; 
            }
            break;
    }
}



