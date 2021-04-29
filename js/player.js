
class Car {
    constructor( x, y, a, b, image) {
        this.x = x;
        this.y = y;
        this.width = a;
        this.height = b;
        this.image = image;
        this.dx = 180;
    }

    drawCar(ctx) {
        let car = new Image();
        car.src = this.image;
        ctx.drawImage(car, this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        if (this.x < 140) {
            this.dx = +this.dx;
        } else {this.x -=this.dx}
    }

    moveRight() {
        if(this.x > 520) {
            this.dx = +this.dx;
        } else {this.x += this.dx}
    }
}

let main = new Car (120,600,100,200,'./img/Main_img/main1.png')


let sel = 0;
function carChoice() {
    switch (sel%4) {
        case 0:
            main.drawCar(ctx);
            break;
        case 1:
            main.image = './img/Main_img/main2.png';
            main.drawCar(ctx);
            break;
        case 2:
            main.image = './img/Main_img/main3.png';
            main.drawCar(ctx);
            break;
        case 3:
            main.image = './img/Main_img/main4.png';
            main.drawCar(ctx);
            break;
    }
    sel++;
}




