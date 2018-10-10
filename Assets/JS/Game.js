// Modulus The Card Game
console.log("It is alive");
// Players
const players = [];

function addPlayer() {
    // Participants
    console.log(players);
    // Get value from input 
    let name = document.getElementById("PlayerName").value;
    // Compare potential participant against player array
    let uniqueName = players.includes(name);
    console.log(uniqueName);

    // Name of potential participant
    console.log(name + " was detected");
    if (name !== "" && uniqueName == false) {
        players.push(name);
        console.log(players);
    } else {
        alert("invalid player name");
    };
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