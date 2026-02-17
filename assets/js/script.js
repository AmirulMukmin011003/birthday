/* ================== ELEMENT ================== */
const birthday = document.querySelector(".birthday");
const loveWrapper = document.getElementById("loveWrapper");

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");

const typing2 = document.getElementById("typing2");
const nextTo3 = document.getElementById("nextTo3");

const gifts = document.querySelectorAll(".gift-item");
const movingGift = document.getElementById("movingGift");
const celebrationLayer = document.getElementById("celebrationLayer");

const giftPopup = document.getElementById("giftPopup");
const nextPopup = document.getElementById("nextPopup");

const okGift = document.getElementById("okGift");
const goNext = document.getElementById("goNext");

const music = document.getElementById("bgMusic");

/* ================== TEXT ================== */
const textSection2 =
  `Pertama-tama dan yang paling utama
  
  "Semoga aku adalah orang pertama yang mengucapkan selamat ulang tahun untukmu. Bukan karena aku ingin paling cepat, tapi karena aku ingin selalu ada di awal cerita bahagiamu❤️"
  
  ANJAY...`;

/* ================== SECTION 1 → 2 ================== */
loveWrapper.addEventListener("click", () => {
  loveWrapper.style.transform = "scale(2)";
  loveWrapper.style.opacity = "0";
  birthday.classList.add("fade-out");

  setTimeout(() => {
    section1.classList.remove("active");
    section2.classList.add("active");

    startTyping(typing2, textSection2, 80, () => {
      nextTo3.classList.add("show");
    });

    if (music) music.play();
  }, 1000);
});

/* ================== TYPING EFFECT ================== */
function startTyping(element, text, speed = 80, onComplete) {
  element.textContent = "";
  let i = 0;

  const typingInterval = setInterval(() => {
    element.textContent += text[i];
    i++;

    if (i === text.length) {
      clearInterval(typingInterval);
      if (onComplete) onComplete();
    }
  }, speed);
}

/* ================== SECTION 2 → 3 ================== */
nextTo3.addEventListener("click", () => {
  section2.classList.remove("active");
  section3.classList.add("active");
});

/* ================== KADO PINDAH RANDOM ================== */
let clickCount = 0;
const maxMoves = 5;

if (movingGift) {
  movingGift.addEventListener("click", () => {
    clickCount++;

    if (clickCount < maxMoves) {
      moveGiftFullscreen();
    } else {
      launchCelebration(); // 🎉 CINEMATIC MOMENT
      setTimeout(() => {
        giftPopup.classList.remove("hidden");
      }, 800); // delay biar terasa cinematic
      }
  });
}

function moveGiftFullscreen() {
  const giftSize = movingGift.offsetWidth;
  const maxX = window.innerWidth - giftSize;
  const maxY = window.innerHeight - giftSize;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  movingGift.style.left = `${randomX}px`;
  movingGift.style.top = `${randomY}px`;

  movingGift.style.transform = "scale(0.9)";
  setTimeout(() => {
    movingGift.style.transform = "scale(1)";
  }, 200);
}

/* ================== POPUP ================== */
okGift.addEventListener("click", () => {
  giftPopup.classList.add("hidden");
  nextPopup.classList.remove("hidden");
});

goNext.addEventListener("click", () => {
  nextPopup.classList.add("hidden");
  section3.classList.remove("active");
  section4.classList.add("active");
  typeSequence();
});


/* ================== SELEBRASI ================== */
function launchCelebration() {
  document.body.classList.add("cinematic-zoom");
  movingGift.classList.add("gift-pop");

  for (let i = 0; i < 120; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    const isHeart = Math.random() > 0.5;
    particle.innerHTML = isHeart ? "❤️" : "🎉";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.animationDuration = (Math.random()*2 + 2) + "s";
    celebrationLayer.appendChild(particle);
    setTimeout(() => particle.remove(), 4000);
  }

  setTimeout(() => {
    document.body.classList.remove("cinematic-zoom");
    movingGift.classList.remove("gift-pop");
  }, 600);
}


/* ================== SECTION 4 TYPING ================== */
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const nextTo5 = document.getElementById("nextTo5");

function typeSequence() {
  startTyping(line1, "Sebelum itu, Selamat ulang tahun Nur🎉 semoga makin dewasa di umur yang sudah dewasa ini. Ya... meskipun kadang masih suka bikin emosi sedikit. Heheh🤭", 80, () => {
    startTyping(line2, "Maaf cuma bisa kasih yang seperti ini, memang agak beda dari kebanyakan orang lain ia yang kasih kado ataupun materi. Heheh...", 80, () => {
      startTyping(line3, "Tapi berharap a semoga semua yang kimaui pelan-pelan bisa tercapai, sehat terus, bahagia, dan jangan lupa… maua juga ikut di bahagiata😜🤍. Sekali lagi HBD NUR", 80, () => {
        setTimeout(() => {
          nextTo5.classList.add("show");
        }, 600);
      });
    });
  });
}

function startTyping(element, text, speed = 80, onComplete) {

  element.style.opacity = "1"; // tampilkan bubble
  element.textContent = "";

  let i = 0;

  const typingInterval = setInterval(() => {
    element.textContent += text[i];
    i++;

    if (i === text.length) {
      clearInterval(typingInterval);
      if (onComplete) onComplete();
    }
  }, speed);
}