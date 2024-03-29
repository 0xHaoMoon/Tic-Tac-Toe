let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id){
    if(!fields[id] && !gameOver){
    if (currentShape == 'cross') {
        currentShape = 'circle';
        document.getElementById('player-1').classList.remove('player-inactive')
        document.getElementById('player-2').classList.add('player-inactive')
    } else {
        currentShape = 'cross';
        document.getElementById('player-2').classList.remove('player-inactive')
        document.getElementById('player-1').classList.add('player-inactive')
    }

    fields[id] = currentShape;
    console.log(fields);
    draw();
    checkForWin();
}
}

function draw(){
    for(let i=0; i < fields.length; i++){
        if (fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none');
        }
    }
}

function checkForWin(){
    let winner;

    if (fields[0]== fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
        document.getElementById('linie-0').style.transform='scaleX(1)';
    }

    if (fields[3]== fields[4] && fields[4] == fields[5] && fields[3] ){
        winner = fields[3];
        document.getElementById('linie-1').style.transform='scaleX(1)';
    }

    if (fields[6]== fields[7] && fields[7] == fields[8] && fields[7]){
        winner = fields[7];
        document.getElementById('linie-2').style.transform='scaleX(1)';
    }

    if (fields[0]== fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('linie-4').style.transform='scaleX(1) rotate(90deg)';

    }

    if (fields[1]== fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('linie-3').style.transform='scaleX(1) rotate(90deg)';

    }

    if (fields[2]== fields[5] && fields[5] == fields[8]&& fields[2]){
        winner = fields[2];
        document.getElementById('linie-5').style.transform='scaleX(1) rotate(90deg)';

    }

    if (fields[0]== fields[4] && fields[4] == fields[8]&& fields[0]){
        winner = fields[0];
        document.getElementById('linie-6').style.transform='scaleX(1) rotate(45deg)';

    }

    if (fields[2]== fields[4] && fields[4] == fields[6]&& fields[2]){
        winner = fields[2];
        document.getElementById('linie-7').style.transform='scaleX(1) rotate(135deg)';

    }
     
    if(winner){
        gameOver = true;
        setTimeout(function(){
        document.getElementById('game-over').classList.remove('d-none');
        document.getElementById('restart-btn').classList.remove('d-none');
        }, 1000);
    }

    if (fields.length == 9 && !fields.includes(undefined) && !winner) {
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 1500);
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none')
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none')
        }

    }
}

function restart(){
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    for (let i = 0; i < 8; i++) {
        document.getElementById(`linie-${i}`).classList.add('d-none');
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById(`circle-${i}`).classList.add('d-none');
        document.getElementById(`cross-${i}`).classList.add('d-none');
    }
}
