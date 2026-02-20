/* ================== TYPING EFFECT ================== */
function startTyping(element, text, speed = 80, onComplete) {
  element.textContent = "";
  element.style.opacity = "1";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;

    if (i === text.length) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, speed);
}