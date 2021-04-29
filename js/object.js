class Object {
    constructor(image, sx, sy, sw, sh, x, y, witdh, height) {
        this.image = image;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.x = x;
        this.y = y;
        this.width = witdh;
        this.height = height;
        // this.speed = speed;
    }

    drawObj(ctx) {
        let object = new Image();
        object.src = this.image;
        ctx.drawImage(object, this.sx, this.sy, this.sw, this.sh,
            this.x, this.y, this.width, this.height);

    }

    moveDown() {
        // console.log(this.y);
        this.y += speed;
    }
}

let speed = Math.floor(Math.random() * (20 - 5) + 5);

let botCar1 = [];
// let botCar2 = [];


setInterval(addObj1, 2000);
// setInterval(addObj2,1500);


function addObj1() {
    let positionX = [120, 300, 480, 700];
    let randomX = Math.floor(Math.random() * positionX.length);
    let randomY = Math.floor((Math.random() * (-300 - 1000)));
    let a = Math.floor(Math.random() * (3 - 1) + 1);
    let obj1 = new Object('./img/obj' + a + '.png', 0, 0, 74, 143,
        positionX[randomX], randomY, 100, 200);
    botCar1.push(obj1);
}

// function addObj2() {
//     let positionX = [120,320,520,700];
//     let randomX = Math.floor(Math.random() * positionX.length);
//     let a = Math.floor(Math.random()*(3-1)+1);
//     let randomY = Math.floor((Math.random()*(-100-500)-500));
//     let obj2 = new Object('./img/obj'+ a +'.png',74,143,74,143,
//         positionX[randomX],randomY,100,200);
//     botCar2.push(obj2);
// }


function displayObj1() {
    for (let i = 0; i < botCar1.length; i++) {
        botCar1[i].moveDown();
        botCar1[i].drawObj(ctx);
    }
}
//
// function displayObj2() {
//     for( let i = 0; i < botCar2.length; i++) {
//         botCar2[i].moveDown();
//         botCar2[i].drawObj(ctx);
//     }
// }


// let random = Math.floor(Math.random()*(-1-500)-500);
// console.log(random);







