const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let fireworks = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.6;
  const color = `hsl(${Math.random() * 360},100%,60%)`;

  for (let i = 0; i < 30; i++) {
    fireworks.push({
      x,
      y,
      radius: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 4 + 2,
      alpha: 1,
      color
    });
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.015;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${hexToRgb(p.color)},${p.alpha})`;
    ctx.fill();

    if (p.alpha <= 0) fireworks.splice(i, 1);
  });

  requestAnimationFrame(animateFireworks);
}

function hexToRgb(hsl) {
  const temp = document.createElement("div");
  temp.style.color = hsl;
  document.body.appendChild(temp);
  const rgb = getComputedStyle(temp).color;
  document.body.removeChild(temp);
  return rgb.match(/\d+/g).slice(0,3).join(",");
}

/* fireworks muncul terus */
setInterval(createFirework, 800);
animateFireworks();