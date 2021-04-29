
class Background {
    constructor(x,y,width,height,image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }
    drawImg(ctx) {
        let background = new Image();
        background.src = this.image;
        ctx.drawImage(background,this.x,this.y,this.width,this.height);
    }
}

let bgr = new Background(0,-3000,900,5000,'./img/road1.png');
let bgrSpd = 15;

function bgrMove() {
    bgr.drawImg(ctx);
    bgr.y += bgrSpd;
    if(bgr.y >0)
        bgr.y = -2500;
}
