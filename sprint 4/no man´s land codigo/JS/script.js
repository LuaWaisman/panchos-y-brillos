let currentScreen = 1;

function goToScreen(screenNumber) {
    document.getElementById('screen' + currentScreen).classList.remove('active');
    currentScreen = screenNumber;
    document.getElementById('screen' + currentScreen).classList.add('active');
}

function startGame() {
    setTimeout(() => {
        goToScreen(4);
    }, 500);
}

function simulateGameEnd(won) {
    if (won) {
        goToScreen(5);
    } else {
        goToScreen(6);
    }
}

// Menús - Victoria
function toggleVictoryMenu() {
    const submenu = document.getElementById('victory-submenu');
    submenu.classList.toggle('active');
    document.getElementById('victory-deck-menu').classList.remove('active');
}

function togglePlayAgainMenu() {
    const deckMenu = document.getElementById('victory-deck-menu');
    deckMenu.classList.toggle('active');
}

// Menús - Game Over
function toggleGameOverMenu() {
    const submenu = document.getElementById('gameover-submenu');
    submenu.classList.toggle('active');
    document.getElementById('gameover-deck-menu').classList.remove('active');
}

function toggleGameOverPlayMenu() {
    const deckMenu = document.getElementById('gameover-deck-menu');
    deckMenu.classList.toggle('active');
}

// Reiniciar juego
function restartGame(sameDeck) {
    if (sameDeck) {
        goToScreen(4);
    } else {
        goToScreen(3);
    }
}

// Tecla Escape vuelve al inicio
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        goToScreen(1);
    }
});
function showScreen(number) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen${number}`).classList.add('active');
}
