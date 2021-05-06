
let highScore = +loadData() ;
let user = loadDataArray();

function getPoint() {
    let point = 0;
    if( score > point) {
        let name = prompt("What's your name?!");
        let user = [name,point];
        score = point;
        highScore = point;
        saveData();
        saveDataArray();
        displayHighScore();
    }
}

function displayHighScore() {

}
function saveData() {
    localStorage.setItem('point',highScore);
}
function loadData() {
    if(localStorage.hasOwnProperty('point')) {
        return localStorage.getItem('point');
    } else {
        return 0;
    }
}
function saveDataArray(arr) {
    localStorage.setItem('user',JSON.stringify(arr));
}

function loadDataArray() {
    if(localStorage.hasOwnProperty('user')) {
        return JSON.parse(localStorage.getItem('user'));
    } else {
        return [];
    }
}
displayHighScore();