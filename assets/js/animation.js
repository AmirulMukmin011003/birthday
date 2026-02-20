/* ================== KADO PINDAH RANDOM ================== */
let clickCount = 0;
const maxMoves = 20;

if (movingGift) {
  movingGift.addEventListener("click", () => {
    clickCount++;

    if (clickCount < maxMoves) {
      moveGift();
    } else {
      launchCelebration();
      setTimeout(() => {
        giftPopup.classList.remove("hidden");
      }, 800);
    }
  });
}

function moveGift() {
  const size = movingGift.offsetWidth;
  const x = Math.random() * (window.innerWidth - size);
  const y = Math.random() * (window.innerHeight - size);

  movingGift.style.left = `${x}px`;
  movingGift.style.top = `${y}px`;

  movingGift.style.transform = "scale(0.9)";
  setTimeout(() => {
    movingGift.style.transform = "scale(1)";
  }, 200);
}

/* ================== SELEBRASI ================== */
function launchCelebration() {
  document.body.classList.add("cinematic-zoom");
  movingGift.classList.add("gift-pop");

  for (let i = 0; i < 120; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.innerHTML = Math.random() > 0.5 ? "❤️" : "🎉";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.animationDuration = Math.random() * 2 + 2 + "s";
    celebrationLayer.appendChild(particle);
    setTimeout(() => particle.remove(), 4000);
  }

  setTimeout(() => {
    document.body.classList.remove("cinematic-zoom");
    movingGift.classList.remove("gift-pop");
  }, 600);
}