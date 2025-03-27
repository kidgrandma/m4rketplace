// Dummy player data; replace with real-time data as needed.
const players = [
  { name: '@player1', bucket: 'apocalypse' },
  { name: '@player2', bucket: 'temu' },
  { name: '@player3', bucket: 'generic' },
  { name: '@player4', bucket: 'apocalypse' },
  { name: '@player5', bucket: 'temu' }
];

// Render players into their respective zones
function renderPlayers() {
  const zones = {
    apocalypse: document.getElementById('apocalypsePlayers'),
    temu: document.getElementById('temuPlayers'),
    generic: document.getElementById('genericPlayers')
  };

  // Clear previous content
  Object.values(zones).forEach(zone => zone.innerHTML = '');

  players.forEach((player, index) => {
    const el = document.createElement('div');
    el.className = 'player';
    el.textContent = player.name;
    // Stagger fade-in effect by delaying each player's animation slightly
    el.style.animationDelay = (index * 0.1) + 's';
    zones[player.bucket].appendChild(el);
  });
}

renderPlayers();
