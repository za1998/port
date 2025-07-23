const terminal = document.getElementById('terminal');
const scream = document.getElementById('scream');

const virusLogs = [
  "Initializing remote access...",
  "Bypassing firewall...",
  "Accessing root directory...",
  "Injecting payload...",
  "Encrypting files... [██████▒▒▒▒]",
  "Encrypting files... [████████▒▒]",
  "Encrypting files... [██████████]",
  "Disabling antivirus...",
  "Accessing webcam... ✅",
  "Capturing keystrokes...",
  "Uploading documents to dark web...",
  "System Control: TAKEN OVER",
  "WARNING: Your system is now locked.",
  "Starting countdown: 00:10"
];

let i = 0;
let countdown = 10;

function typeLine() {
  if (i < virusLogs.length) {
    terminal.innerText += virusLogs[i] + "\n";
    i++;
    setTimeout(typeLine, 700);
  } else {
    document.body.classList.add('flash-red');
    scream.loop = true;
    scream.play().catch(() => {
      alert("Klik halaman agar suara bisa diputar.");
    });
    startCountdown();
  }
}

function startCountdown() {
  const interval = setInterval(() => {
    if (countdown <= 0) {
      terminal.innerText += "\n>>> SYSTEM ERASED <<<\n";
      clearInterval(interval);
    } else {
      terminal.innerText += `\rCountdown: 00:${countdown < 10 ? '0' + countdown : countdown}`;
      countdown--;
    }
  }, 1000);
}

document.addEventListener('click', () => {
  typeLine();
}, { once: true });

// Blok input dan klik kanan
document.onkeydown = () => false;
document.oncontextmenu = e => e.preventDefault();
document.onmousemove = () => window.scrollTo(0, 0);
