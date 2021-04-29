const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');
const CANVAS_WIDTH = c.width = 900;
const CANVAS_HEIGHT = c.height = 900;


function playerMove(event) {
    switch (event.keyCode) {
        case 100:
            main.moveLeft();
            main.drawCar(ctx);
            break;
        case 102:
            main.moveRight();
            main.drawCar(ctx);
            break;
    }
}
window.addEventListener('keydown',playerMove);

