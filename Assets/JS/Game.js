// Modulus The Card Game
console.log("It is alive");
// Players
const players = [];

function addPlayer() {
    let name = document.getElementById("PlayerName").value;
    console.log(name + " was detected");
    if (name !== "") {
        players.push(name);
        console.log(players);
    }
    //players.push();
    //document.getElementById("PlayerList").appendChild(document.createElement('li').innerHTML = "name"); 
};
// End game function
function gameOver() {
    var r = confirm("The game is over.\nPlayer won!\nOK to play again?");
    if (r == true) {
        window.location.reload();
    } else {
        console.log("Stay on page");
    }
};