// Modulus The Card Game

// Establish connectivity
console.log("It is alive");

// Global Variables
// Players
const players = [];

let playerList = document.getElementById("PlayerList");
let listedPlayer = document.createElement("li");

console.log(playerList);
console.log(listedPlayer);

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
    // Addint valid participant
    if (name !== "" && uniqueName == false) {
        players.push(name);
        console.log(players);
        // So I need one list item per participant
        for (player in players) {
            playerList.appendChild(listedPlayer).appendChild(document.createTextNode(player));
        }
        //listedPlayer.appendChild(document.createTextNode(name));
        //playerList.appendChild(listedPlayer);
    } else {
        alert("invalid player name");
    };
    
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