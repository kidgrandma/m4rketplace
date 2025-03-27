function renderPlayers(players) {
  const zones = {
    apocalypse: document.getElementById('apocalypsePlayers'),
    temu: document.getElementById('temuPlayers'),
    generic: document.getElementById('genericPlayers')
  };

  // Clear previous content
  Object.values(zones).forEach(zone => zone.innerHTML = '');

  // Append each player to their designated bucket
  players.forEach((player, index) => {
    const el = document.createElement('div');
    el.className = 'player';
    el.textContent = player.name;
    // Stagger the fade-in animation
    el.style.animationDelay = (index * 0.1) + 's';
    zones[player.bucket].appendChild(el);
  });
}

// Function to fetch the players.json file and update the board
function fetchPlayers() {
  fetch('players.json')
    .then(response => response.json())
    .then(data => {
      renderPlayers(data.players);
    })
    .catch(error => console.error('Error fetching player data:', error));
}

// Initial fetch
fetchPlayers();

// Poll for updates every 10 seconds (adjust the interval as needed)
setInterval(fetchPlayers, 10000);
