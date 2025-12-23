// Typing effect
const text = [
  "Senior Data Analyst",
  "Analytics & Automation Specialist",
  "Turning Data Into Decisions"
];

let index = 0;
let charIndex = 0;
const typingEl = document.querySelector(".typing");

function type() {
  if (charIndex < text[index].length) {
    typingEl.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEl.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 1s ease";
  observer.observe(el);
});
