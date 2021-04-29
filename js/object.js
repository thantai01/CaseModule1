class Object {
    constructor(image, x, y, witdh, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = witdh;
        this.height = height;
    }
    drawObj(ctx) {
        let object = new Image();
        object.src = this.image;
        ctx.drawImage(object,this.x, this.y, this.width, this.height);
    }
    moveDown() {
        // console.log(this.y);
        this.y += objSpd;
    }
}


// let objSpd = Math.floor(Math.random() * (20 - 5) + 5);
let objSpd = 10;
let botCar = [];
setInterval(addObj1, 2000);

function addObj1() {
    let positionX = [120, 300, 480, 700];
    let randomX = Math.floor(Math.random() * positionX.length);
    let randomY = Math.floor((Math.random() * (-100 - 500)));
    let a = Math.ceil(Math.random() * (3 - 1));
    let b = Math.ceil(Math.random() * (5 - 1));
    let obj1 = new Object('./img/Obj_img/obj' + a + '-' + b + '.png',
        positionX[randomX], randomY, 100, 200);
    botCar.push(obj1);
}

function displayObj1() {
    for (let i = 0; i < botCar.length; i++) {
        botCar[i].moveDown();
        botCar[i].drawObj(ctx);
    }
}






