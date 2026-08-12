const envelope = document.getElementById("envelope");
const opening = document.getElementById("opening");
const site = document.getElementById("site");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    opening.classList.add("closed");
    site.classList.remove("hidden");
    requestAnimationFrame(() => site.classList.add("visible"));
  }, 1100);

  // Les navigateurs mobiles autorisent plus facilement l'audio
  // après une action de l'utilisateur.
  music.play().then(() => {
    musicBtn.textContent = "♫";
  }).catch(() => {
    musicBtn.textContent = "♪";
  });
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play().catch(() => {});
    musicBtn.textContent = "♫";
  } else {
    music.pause();
    musicBtn.textContent = "♪";
  }
});

// ===============================
// COMPTE À REBOURS
// ===============================
// MODIFIE cette date avec la date réelle du mariage.
const weddingDate = new Date("June 20, 2027 15:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
