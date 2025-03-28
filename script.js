// Function to render players into their respective zones
function renderPlayers(players) {
const zones = {
  apocalypse: document.getElementById('apocalypsePlayers'),
  temu: document.getElementById('temuPlayers'),
  generic: document.getElementById('genericPlayers'),
  g0d: document.getElementById('g0dPlayers')
};

  // Clear previous content
  Object.values(zones).forEach(zone => zone.innerHTML = '');

  players.forEach((player, index) => {
    const el = document.createElement('div');
    el.className = 'player';
    el.textContent = player.name;
    // Add a team-specific class if team info is provided
  if (player.team) {
    el.classList.add(player.team);
  }
      if (player.shield) {
    el.classList.add('shield');
  }

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

// Poll for updates every 10 seconds
setInterval(fetchPlayers, 10000);
