const loveLayer = document.getElementById("loveLayer");

function spawnLove() {
  if (!loveLayer) return;

  const love = document.createElement("div");
  love.className = "love";
  love.innerHTML = Math.random() > 0.5 ? "❤️" : "💛";

  love.style.left = Math.random() * window.innerWidth + "px";
  love.style.fontSize = Math.random() * 20 + 16 + "px";
  love.style.animationDuration = Math.random() * 4 + 6 + "s";

  loveLayer.appendChild(love);

  setTimeout(() => love.remove(), 10000);
}

setInterval(spawnLove, 600);