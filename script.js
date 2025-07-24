const terminal = document.getElementById('terminal');
const alarm = document.getElementById('alarm');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/█▓▒░';
const getRandomChar = () => characters.charAt(Math.floor(Math.random() * characters.length));

function randomLine(length = 70) {
  return Array.from({ length }, getRandomChar).join('');
}

function generateLogs() {
  const lines = [];
  for (let i = 0; i < 5; i++) {
    lines.push("[█] " + randomLine(80));
  }
  terminal.innerText += lines.join("\n") + "\n";
  if (terminal.innerText.length > 5000) {
    terminal.innerText = terminal.innerText.slice(-4000);
  }
  terminal.scrollTop = terminal.scrollHeight;
  setTimeout(generateLogs, 40);
}

function lockEverything() {
  document.onkeydown = e => e.preventDefault();
  document.oncontextmenu = e => e.preventDefault();
  document.onmousedown = e => e.preventDefault();
  document.onwheel = e => e.preventDefault();
  document.onmousemove = () => window.scrollTo(0, 0);
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}

document.addEventListener('click', () => {
  lockEverything();
  alarm.loop = true;
  alarm.volume = 1.0;
  alarm.play().catch(() => alert("Klik halaman untuk memulai suara!"));
  generateLogs();
}, { once: true });
