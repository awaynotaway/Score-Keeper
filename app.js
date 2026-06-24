const player1Score = document.querySelector('#player1-score');
const player2Score = document.querySelector('#player2-score');

const player1Btn = document.querySelector('#btnP1')
const player2Btn = document.querySelector('#btnP2')
const resetBtn = document.querySelector('#btnReset')

let p1 = 0;
let p2 = 0;

const addScore = (playerName) => {
    if (playerName === 'p1') {
        p1++;
        player1Score.textContent = p1;
    } else if (playerName === 'p2') {
        p2++;
        player2Score.textContent = p2;
    }
};

player1Btn.addEventListener('click', () => addScore('p1'));
player2Btn.addEventListener('click', () => addScore('p2'));

resetBtn.addEventListener('click', () => {
    p1 = 0;
    p2 = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
});