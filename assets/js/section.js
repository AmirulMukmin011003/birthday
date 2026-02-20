/* ================== TEXT ================== */
const textSection2 = `Pertama-tama dan yang paling utama

"Semoga aku adalah orang pertama yang mengucapkan selamat ulang tahun untukmu.
Bukan karena aku ingin paling cepat,
tapi karena aku ingin selalu ada di awal cerita bahagiamu ❤️"

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

/* ================== SECTION 2 → 3 ================== */
nextTo3.addEventListener("click", () => {
  section2.classList.remove("active");
  section3.classList.add("active");
});

/* ================== POPUP ================== */
okGift.addEventListener("click", () => {
  giftPopup.classList.add("hidden");
  nextPopup.classList.remove("hidden");
});

goNext.addEventListener("click", () => {
  nextPopup.classList.add("hidden");
  section3.classList.remove("active");
  section4.classList.add("active");
  startSection4();
});

/* ================== SECTION 4 ================== */
function startSection4() {
  startTyping(
    line1,
    "Sebelum itu, selamat ulang tahun Nur🎉 semoga makin dewasa di umur yang sudah dewasa ini. Walaupun kadang masih suka bikin emosi sedikit 🤭",
    80,
    () => {
      startTyping(
        line2,
        "Maaf cuma bisa kasih yang seperti ini. Walau agak beda dari kebanyakan orang😅, tapi nanti bakal kesampaianji Toraja itu. Hahah",
        80,
        () => {
          startTyping(
            line3,
            "Tapi semoga semua yang kimau pelan-pelan bisa tercapai. Sehat terus, dan selalu bahagia🤍",
            80,
            () => {
              setTimeout(() => {
                nextTo5.classList.add("show");
              }, 600);
            }
          );
        }
      );
    }
  );
}

/* ================== SECTION 4 → 5 ================== */
nextTo5.addEventListener("click", () => {
  section4.classList.remove("active");
  section5.classList.add("active");
});

/* ================= SECTION 5 → 6 ================= */


if (nextTo6) {
  nextTo6.addEventListener("click", () => {
    section5.classList.remove("active");
    section6.classList.add("active");
  });
}

nextTo6.addEventListener("click", () => {
  section5.classList.remove("active");
  section6.classList.add("active");

  startMemories();
  changeMusic("assets/audio/kenangan.mp3");
});

/* ================== MUSIC CONTROL ================== */
function changeMusic(src) {
  if (!music) return;

  music.pause();
  music.src = src;
  music.load();

  music.volume = 0.6; // biar lembut
  music.play().catch(() => {});
}