
const memoryPhotos = [
  "assets/img/kenangan/1.jpeg",
  "assets/img/kenangan/2.jpeg",
  "assets/img/kenangan/3.jpeg",
  "assets/img/kenangan/4.jpeg",
  "assets/img/kenangan/5.jpeg",
  "assets/img/kenangan/6.jpeg",
  "assets/img/kenangan/7.jpeg",
  "assets/img/kenangan/8.jpeg",
  "assets/img/kenangan/9.jpeg",
  "assets/img/kenangan/10.jpeg",
  "assets/img/kenangan/11.jpeg",
  "assets/img/kenangan/12.jpeg",
  "assets/img/kenangan/13.jpeg",
  "assets/img/kenangan/14.jpeg",
  "assets/img/kenangan/15.jpeg",
  "assets/img/kenangan/16.jpeg",
  "assets/img/kenangan/17.jpeg",
  "assets/img/kenangan/18.jpeg",
  "assets/img/kenangan/19.jpeg",
  "assets/img/kenangan/20.jpeg",
  "assets/img/kenangan/21.jpeg",
  "assets/img/kenangan/22.jpeg"
//   "assets/img/kenangan/1.mp4",
//   "assets/img/kenangan/2.mp4"
];
let memoryIndex = 0;
let memoryInterval = null;

function createMemoryPhoto() {
  const img = document.createElement("img");
  img.src = memoryPhotos[memoryIndex];
  img.className = "memory-photo";

  /* ===== UKURAN FOTO (DIKECILKAN) ===== */
  const photoWidth = 180;
  const photoHeight = 240;

  /* ===== ZONA AMAN LAYAR ===== */
  const safeTop = 140;     
  const safeBottom = 200;
  const safeLeft = 20;
  const safeRight = 20;

  const minX = safeLeft;
  const maxX = window.innerWidth - photoWidth - safeRight;

  const minY = safeTop;
  const maxY = window.innerHeight - photoHeight - safeBottom;

  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  memoryGrid.appendChild(img);

  /* ===== FADE IN ===== */
  requestAnimationFrame(() => {
    img.classList.add("show");
  });

  /* ===== FADE OUT (OVERLAP) ===== */
  setTimeout(() => {
    img.classList.remove("show");
  }, 6000);

  /* ===== HAPUS SETELAH HILANG ===== */
  setTimeout(() => {
    img.remove();
  }, 9000);

  /* ===== FOTO URUT ===== */
  memoryIndex++;
  if (memoryIndex >= memoryPhotos.length) {
    memoryIndex = 0;
  }
}

function startMemories() {
  if (memoryInterval) return;

  createMemoryPhoto();

  memoryInterval = setInterval(() => {
    createMemoryPhoto();
  }, 3000); 
}

function stopMemories() {
  clearInterval(memoryInterval);
  memoryInterval = null;
}