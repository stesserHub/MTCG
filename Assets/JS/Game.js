// Modulus The Card Game
console.log("It is alive");
// Players
const players = [""];
// End game function
function gameOver() {
    var r = confirm("The game is over.\nPlayer won!\nOK to play again?");
    if (r == true) {
        window.location.reload();
    } else {
        console.log("Stay on page");
    }
};