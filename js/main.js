function gameRunning() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    bgrMove();
    displayObj1(ctx);
    // displayObj2(ctx);
    main1.drawCar(ctx);
    gainPoint();
    getCrash();
    crashCheck();
}
setInterval(gameRunning,30);


let score = 0;

function gainPoint() {
    for (let i = 0; i < botCar1.length; i++) {
        if (botCar1[i].y >= 900) {
            score++;
            botCar1.splice(i,1);
            document.getElementById('score').value = score;
        }
    }
}

function getCrash(main1, obj1) {
    let top1 = main1.y;
    let left1 = main1.x;
    let right1 = main1.x + main1.width;
    let bot1 = main1.y + main1.height;

    let top2 = obj1.y;
    let left2 = obj1.x;
    let right2 = obj1.x + obj1.width;
    let bot2 = obj1 + obj1.height;
    if (left1 > right2 || right1 < left2 || top1 > bot2 || bot1 < top2) {
        return false;
    } else {
        return true;
    }
}
function crashCheck() {
    for (let i = 0; i < botCar1.length -1; i++) {
        if (getCrash(main1, botCar1[i])) {
            alert("You die");
            botCar1 = [];
            window.location.href = 'endgame.html';
        }
    }
}

// function difficultChange() {
//
// }