<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Pong Game</title>
    <style>
    	canvas {
         background:blueviolet;
         display: block;
         margin: auto;
       }
    </style>
</head>
<body>

<canvas id="myCanvas" width="1900" height="850"></canvas >


<script>
    // Variables
    function controls(){
        alert("Use:\n\n'W' for up and 'S' for down for Player 1 \n\n 'O' for up and 'K' for down for Player 2\n\nStart!")
    }
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height-30;
    var dx = 4;
    var dy = -4;
    var ballRadius = 10;
    var leftPaddleHeight = 180;
    var leftPaddleWidth = 15;
    var leftPaddleX = 5;
    var leftPaddleY = canvas.height / 2 - leftPaddleHeight / 2;
    var rightPaddleHeight = 180;
    var rightPaddleWidth = 15;
    var rightPaddleX = canvas.width - (rightPaddleWidth + 5);
    var rightPaddleY = canvas.height / 2 - rightPaddleHeight / 2;
    var leftUpPressed = false;
    var leftDownPressed = false;
    var rightUpPressed = false;
    var rightDownPressed = false;
    var leftScore = 0;
    var rightScore = 0;
    
    // functions
    function keyDownHandler(e){
        if(e.keyCode == 119 || e.keyCode == 87){
            leftUpPressed = true;
        }
        else if (e.keyCode == 115 || e.keyCode == 83){
            leftDownPressed = true;
        }
        if (e.keyCode == 111 || e.keyCode == 79){
            rightUpPressed = true;
        }
        else if(e.keyCode == 107 || e.keyCode == 75){
            rightDownPressed = true;
        }
    }
    function keyUpHandler(e){
        if(e.keyCode == 119 || e.keyCode == 87){
            leftUpPressed = false;
        }
        else if (e.keyCode == 115 || e.keyCode == 83){
            leftDownPressed = false;
        }
        if (e.keyCode == 111 || e.keyCode == 79){
            rightUpPressed = false;
        }
        else if(e.keyCode == 107 || e.keyCode == 75){
            rightDownPressed = false;
        }
    }
    function drawBall(){
        ctx.beginPath();
        ctx.arc(x,y,ballRadius,0,Math.PI*2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
    function drawScores(){
        ctx.font = "80px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(leftScore,(canvas.width/2) -110, 80);
        ctx.fillText(rightScore, (canvas.width / 2) + 60, 80);
    }
    function players(){
        ctx.font = "40px Serif";
        ctx.fillStyle = "black"
        ctx.fillText("Player 1",0,835)
        ctx.fillText("Player 2",1725,835)
    }
    function collisionWithLeftPaddle(){
        if((x-ballRadius) <= 5 + leftPaddleWidth){
            if(y> leftPaddleY && y< leftPaddleY + leftPaddleHeight)
            dx = -(dx-0.25);
            else if((x-ballRadius) <= 10){
                rightScore++;
                x=canvas.width/2;
                y=canvas.height/2;
                dx=4;
                dy=-4;
            }
        }
    }
    function collisionWithRightPaddle(){
        if((x + ballRadius) >= canvas.width - (rightPaddleWidth + 5)){
            if ( y>rightPaddleY && y< rightPaddleY + rightPaddleHeight)
            dx= -(dx+0.25);
            else if(x+ballRadius >= canvas.width){
                leftScore++;
                x=canvas.width/2;
                y=canvas.height/2;
                dx=-4;
                dy=4;
            }
        }
    }
    function computerCollisionWithWallsAndPaddle(){
        collisionWithLeftPaddle();
        collisionWithRightPaddle();
        if(((y-ballRadius)<=0 || ((y+ballRadius) >= canvas.height))){
            dy = -dy;
        }
    }
    function drawLeftPaddle(){
        ctx.beginPath();
        ctx.rect(leftPaddleX,leftPaddleY,leftPaddleWidth,leftPaddleHeight);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
        if(leftDownPressed && leftPaddleY < canvas.height - leftPaddleHeight){
            leftPaddleY += 7;
        }
        else if(leftUpPressed && leftPaddleY > 0){
            leftPaddleY -= 7;
        }
    }
    function drawRightPaddle(){
        ctx.beginPath();
        ctx.rect(rightPaddleX,rightPaddleY,rightPaddleWidth,rightPaddleHeight);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
        if(rightDownPressed && rightPaddleY < canvas.height - rightPaddleHeight){
            rightPaddleY += 7;
        }
        else if(rightUpPressed && rightPaddleY > 0){
            rightPaddleY -= 7;
        }
    }
    function drawScene(){
        ctx.beginPath();
        ctx.rect(canvas.width / 2 - 1,0,3, canvas.height);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        players();
        drawScores();
        drawScene();
        drawLeftPaddle();
        drawRightPaddle();
        drawBall();
        computerCollisionWithWallsAndPaddle();
        x += dx;
        y += dy;
    }
    setInterval(draw,10);
    controls();
    document.addEventListener("keydown",keyDownHandler,false);
    document.addEventListener("keyup",keyUpHandler,false);      
</script>
</body>
</html>
