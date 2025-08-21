const clock = document.getElementById('clock');

function updateClock() {
  const date = new Date();
  clock.textContent = date.toLocaleTimeString(); // safer than innerHTML for text
}

// Update immediately on load
updateClock();

// Update every second
setInterval(updateClock, 1000);
