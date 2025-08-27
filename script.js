const text = "I like to explore new things";
let i = 0;
const speed = 100; 

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;
