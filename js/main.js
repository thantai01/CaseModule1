function gameRunning() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    bgrMove();
    displayObj1(ctx);
    main.drawCar(ctx);
    gainPoint();
    difficultChange();
    crashCheck();
}
setInterval(gameRunning,30);


let score = 0;
function gainPoint() {
    for (let i = 0; i < botCar.length; i++) {
        if (botCar[i].y >= 900) {
            score++;
            botCar.splice(i,1);
            document.getElementById('score').value = "Your Score: " + score;
        }
    }
}

function getCrash(main,obj) {
    let top1 = main.y;
    let left1 = main.x;
    let right1 = main.x + main.width;
    let bot1 = main.y + main.height

    let top2 = obj.y;
    let left2 = obj.x;
    let right2 = obj.x + obj.width;
    let bot2 = obj.y + obj.height;
    if(left2 > right1 || bot2 < top1 || right2 < left1 || top2 > bot1)
        return false;
    return true;
}

function crashCheck() {
    for (let i = 0; i < botCar.length; i++) {
        if (getCrash ( main, botCar[i])) {
            // console.log("END!!!")
            bgrSpd = 0;
            objSpd = 0;
            clearInterval(gameRunning);
        }
    }
}

function difficultChange() {
   if(score > 7) {
       bgrSpd=20;
       objSpd=20;
   } if(score > 15) {
       bgrSpd=25;
       objSpd=30;
   } if (score >22) {
       bgrSpd =30;
       objSpd =40;
    } if(score > 30) {
       bgrSpd = 35;
       objSpd = 50;
    } if(score > 40) {
       bgrSpd = 40;
       objSpd = 60;
    }
}

