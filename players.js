// Sample data of players with their tiers
const players = [
  { name: "Player1", tier: "Tier 1" },
  { name: "Player2", tier: "Tier 2" },
  { name: "Player3", tier: "Tier 2" },
  { name: "Player4", tier: "Tier 3" },
  // Add more players as needed
];

// Function to generate the player list HTML
function generatePlayerList(players) {
  let html = '';
  for (const player of players) {
    html += `<div>${player.name} - ${player.tier}</div>`;
  }
  return html;
}

// Function to display the player list
function displayPlayerList() {
  const playerListElement = document.getElementById('playerList');
  if (playerListElement) {
    playerListElement.innerHTML = generatePlayerList(players);
  }
}

// Call the function to display the player list
displayPlayerList();
