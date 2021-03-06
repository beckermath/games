const canvas = document.getElementById('grid');
const ctx = canvas.getContext('2d');
setInterval(game, 15);


//draw board white
ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
ctx.fill();

//draw board lines
ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(200, 600);
ctx.stroke();
ctx.moveTo(400, 0);
ctx.lineTo(400, 600);
ctx.stroke();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.stroke();
ctx.moveTo(0, 400);
ctx.lineTo(600, 400);
ctx.stroke();

count = 1;

const boxes = [
    {
        x: 0,
        y: 0,
        id: 1,
        full: false,
        foo: "-"
        
    },
    {
        x: 200,
        y: 0,
        id: 2,
        full: false,
        foo: "-"
    },
    {
        x: 400,
        y: 0,
        id: 3,
        full: false,
        foo: "-"
    },
    {
        x: 0,
        y: 200,
        id: 4,
        full: false,
        foo: "-"
    },
    {
        x: 200,
        y: 200,
        id: 5,
        full: false,
        foo: "-"
    },
    {
        x: 400,
        y: 200,
        id: 6,
        full: false,
        foo: "-"
    },
    {
        x: 0,
        y: 400,
        id: 7,
        full: false,
        foo: "-"
    },
    {
        x: 200,
        y: 400,
        id: 8,
        full: false,
        foo: "-"
    },
    {
        x: 400,
        y: 400,
        id: 9,
        full: false,
        foo: "-"
    }
];

function isIntersect(point, box){
    return ((point.x > box.x && point.x < box.x + 200) && (point.y > box.y && point.y < box.y + 200));
}

canvas.addEventListener('click', (e) => {
    const pos = {
        x: e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
        y: e.clientY + document.body.scrollTop + document.documentElement.scrollTop
    }

    pos.x -= canvas.offsetLeft;
    pos.y -= canvas.offsetTop;

    for(i = 0; i < boxes.length; i++){
        if(isIntersect(pos, boxes[i]) && !boxes[i].full){
            if(count % 2 != 0)
            {
                count++;
                drawCircle(boxes[i]);
                botsTurn(i);
            }
        }
    }
});

function botsTurn(index){
    count++;
    if(boxes[0].foo == "X" && boxes[1].foo == "X" && boxes[2].foo == "-")
        drawX(boxes[2]);
    else if(boxes[0].foo == "X" && boxes[2].foo == "X" && boxes[1].foo == "-")
        drawX(boxes[1]);
    else if(boxes[1].foo == "X" && boxes[2].foo == "X" && boxes[0].foo == "-")
        drawX(boxes[0]);
    else if(boxes[3].foo == "X" && boxes[4].foo == "X" && boxes[5].foo == "-")
        drawX(boxes[5]);
    else if(boxes[3].foo == "X" && boxes[5].foo == "X" && boxes[4].foo == "-")
        drawX(boxes[4]);
    else if(boxes[4].foo == "X" && boxes[5].foo == "X" && boxes[3].foo == "-")
        drawX(boxes[3]);
    else if(boxes[6].foo == "X" && boxes[7].foo == "X" && boxes[8].foo == "-")
        drawX(boxes[8]);
    else if(boxes[6].foo == "X" && boxes[8].foo == "X" && boxes[7].foo == "-")
        drawX(boxes[7]);
    else if(boxes[7].foo == "X" && boxes[8].foo == "X" && boxes[6].foo == "-")
        drawX(boxes[6]);
    else if(boxes[0].foo == "X" && boxes[3].foo == "X" && boxes[6].foo == "-")
        drawX(boxes[6]);
    else if(boxes[0].foo == "X" && boxes[6].foo == "X" && boxes[3].foo == "-")
        drawX(boxes[3]);
    else if(boxes[3].foo == "X" && boxes[6].foo == "X" && boxes[0].foo == "-")
        drawX(boxes[0]);
    else if(boxes[1].foo == "X" && boxes[4].foo == "X" && boxes[7].foo == "-")
        drawX(boxes[7]);
    else if(boxes[1].foo == "X" && boxes[7].foo == "X" && boxes[4].foo == "-")
        drawX(boxes[4]);
    else if(boxes[4].foo == "X" && boxes[7].foo == "X" && boxes[1].foo == "-")
        drawX(boxes[1]);
    else if(boxes[2].foo == "X" && boxes[5].foo == "X" && boxes[8].foo == "-")
        drawX(boxes[8]);
    else if(boxes[2].foo == "X" && boxes[8].foo == "X" && boxes[5].foo == "-")
        drawX(boxes[5]);
    else if(boxes[5].foo == "X" && boxes[8].foo == "X" && boxes[2].foo == "-")
        drawX(boxes[2]);
    else if(boxes[0].foo == "X" && boxes[4].foo == "X" && boxes[8].foo == "-")
        drawX(boxes[8]);
    else if(boxes[0].foo == "X" && boxes[8].foo == "X" && boxes[4].foo == "-")
        drawX(boxes[4]);
    else if(boxes[4].foo == "X" && boxes[8].foo == "X" && boxes[0].foo == "-")
        drawX(boxes[0]);
    else if(boxes[2].foo == "X" && boxes[4].foo == "X" && boxes[6].foo == "-")
        drawX(boxes[6]);
    else if(boxes[2].foo == "X" && boxes[6].foo == "X" && boxes[4].foo == "-")
        drawX(boxes[4]);
    else if(boxes[4].foo == "X" && boxes[6].foo == "X" && boxes[2].foo == "-")
        drawX(boxes[2]);
    else if(boxes[0].foo == "O" && boxes[1].foo == "O" && boxes[2].foo == "-")
        drawX(boxes[2]);
    else if(boxes[0].foo == "O" && boxes[2].foo == "O" && boxes[1].foo == "-")
        drawX(boxes[1]);
    else if(boxes[1].foo == "O" && boxes[2].foo == "O" && boxes[0].foo == "-")
        drawX(boxes[0]);
    else if(boxes[3].foo == "O" && boxes[4].foo == "O" && boxes[5].foo == "-")
        drawX(boxes[5]);
    else if(boxes[3].foo == "O" && boxes[5].foo == "O" && boxes[4].foo == "-")
        drawX(boxes[4]);
    else if(boxes[4].foo == "O" && boxes[5].foo == "O" && boxes[3].foo == "-")
        drawX(boxes[3]);
    else if(boxes[6].foo == "O" && boxes[7].foo == "O" && boxes[8].foo == "-")
        drawX(boxes[8]);
    else if(boxes[6].foo == "O" && boxes[8].foo == "O" && boxes[7].foo == "-")
        drawX(boxes[7]);
    else if(boxes[7].foo == "O" && boxes[8].foo == "O" && boxes[6].foo == "-")
        drawX(boxes[6]);
    else if(boxes[0].foo == "O" && boxes[3].foo == "O" && boxes[6].foo == "-")
        drawX(boxes[6]);
    else if(boxes[0].foo == "O" && boxes[6].foo == "O" && boxes[3].foo == "-")
        drawX(boxes[3]);
    else if(boxes[3].foo == "O" && boxes[6].foo == "O" && boxes[0].foo == "-")
        drawX(boxes[0]);
    else if(boxes[1].foo == "O" && boxes[4].foo == "O" && boxes[7].foo == "-")
        drawX(boxes[7]);
    else if(boxes[1].foo == "O" && boxes[7].foo == "O" && boxes[4].foo == "-")
        drawX(boxes[4]);
    else if(boxes[4].foo == "O" && boxes[7].foo == "O" && boxes[1].foo == "-")
        drawX(boxes[1]);
    else if(boxes[2].foo == "O" && boxes[5].foo == "O" && boxes[8].foo == "-")
        drawX(boxes[8]);
    else if(boxes[2].foo == "O" && boxes[8].foo == "O" && boxes[5].foo == "-")
        drawX(boxes[5]);
    else if(boxes[5].foo == "O" && boxes[8].foo == "O" && boxes[2].foo == "-")
        drawX(boxes[2]);
    else if(boxes[0].foo == "O" && boxes[4].foo == "O" && boxes[8].foo == "-")
        drawX(boxes[8]);
    else if(boxes[0].foo == "O" && boxes[8].foo == "O" && boxes[4].foo == "-")
        drawX(boxes[4]);
    else if(boxes[4].foo == "O" && boxes[8].foo == "O" && boxes[0].foo == "-")
        drawX(boxes[0]);
    else if(boxes[2].foo == "O" && boxes[4].foo == "O" && boxes[6].foo == "-")
        drawX(boxes[6]);
    else if(boxes[2].foo == "O" && boxes[6].foo == "O" && boxes[4].foo == "-")
        drawX(boxes[4]);
    else if(boxes[4].foo == "O" && boxes[6].foo == "O" && boxes[2].foo == "-")
        drawX(boxes[2]);
    else if(!boxes[4].full)
        drawX(boxes[4]);
    else if(!boxes[0].full){
        drawX(boxes[0]);
    }
    else if(!boxes[2].full){
        drawX(boxes[2]);
    }
    else if(!boxes[6].full){
        drawX(boxes[6]);
    }
    else if(!boxes[8].full){
        drawX(boxes[8]);
    }
    else
    {
        for(i = 0; i < boxes.length; i++){
            if(!boxes[i].full){
                drawX(boxes[i]);
                break;
            }
        }
    }
}

function game(){
    
    if((boxes[0].foo == "X" && boxes[1].foo == "X" && boxes[2].foo == "X") || (boxes[0].foo == "O" && boxes[1].foo == "O" && boxes[2].foo == "O"))
        document.getElementById("yo").innerHTML = "X's win";
    else if((boxes[3].foo == "X" && boxes[4].foo == "X" && boxes[5].foo == "X") || (boxes[3].foo == "O" && boxes[4].foo == "O" && boxes[5].foo == "O"))
        document.getElementById("yo").innerHTML = "X's win";
    else if((boxes[6].foo == "X" && boxes[7].foo == "X" && boxes[8].foo == "X") || (boxes[6].foo == "O" && boxes[7].foo == "O" && boxes[8].foo == "O"))
        document.getElementById("yo").innerHTML = "X's win";
    else if((boxes[0].foo == "X" && boxes[3].foo == "X" && boxes[6].foo == "X") || (boxes[0].foo == "O" && boxes[3].foo == "O" && boxes[6].foo == "O"))
        document.getElementById("yo").innerHTML = "X's win";
    else if((boxes[1].foo == "X" && boxes[4].foo == "X" && boxes[7].foo == "X") || (boxes[1].foo == "O" && boxes[4].foo == "O" && boxes[7].foo == "O"))
        document.getElementById("yo").innerHTML = "X's win";
    else if((boxes[2].foo == "X" && boxes[5].foo == "X" && boxes[8].foo == "X") || (boxes[2].foo == "O" && boxes[5].foo == "O" && boxes[8].foo == "O"))
        document.getElementById("yo").innerHTML = "X's win";
    else if((boxes[0].foo == "X" && boxes[4].foo == "X" && boxes[8].foo == "X") || (boxes[0].foo == "O" && boxes[4].foo == "O" && boxes[8].foo == "O"))
        document.getElementById("yo").innerHTML = "X's win";
    else if((boxes[2].foo == "X" && boxes[4].foo == "X" && boxes[6].foo == "X") || (boxes[2].foo == "O" && boxes[4].foo == "O" && boxes[6].foo == "O"))
        document.getElementById("yo").innerHTML = "X's win";
    else if(checkForCats())
        document.getElementById("yo").innerHTML = "cats game";
}

function checkForCats(){
    let foo = true;

    for(i = 0; i < boxes.length; i++){
        if(!boxes[i].full){
            foo = false;
        }
    }
    return foo;
}


function drawX(box){
    ctx.beginPath();
    ctx.moveTo(box.x + 40, box.y + 40);
    ctx.lineTo(box.x + 160, box.y + 160);
    ctx.stroke();
    ctx.moveTo(box.x + 40, box.y + 160);
    ctx.lineTo(box.x + 160, box.y + 40);
    ctx.stroke();
    box.foo = "X";
    box.full = true;
}

function drawCircle(box){
    ctx.beginPath();
    ctx.arc(box.x + 100, box.y + 100, 60, 0, 2 * Math.PI);
    ctx.stroke();
    box.foo = "O";
    box.full = true;
}

function consoleBoxes(){
    for(i = 0; i < boxes.length; i++){
        console.log(boxes[i]);
    }
}






