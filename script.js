
const roles = [
  "Data Analyst",
  "Risk Analyst",
  "BI Analyst",
  "Automation",
  "Financial Data Analyst",
  "Data Scientist",
  "Analytics Consultant",
  "Audit Analytics",
  "CAATS",
  "AML Specialist",
  "Banking System Tester"
];

let roleIndex = 0;
let charIndex = 0;
const typingEl = document.querySelector(".typing");

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 600);
  }
}

document.addEventListener("DOMContentLoaded", type);
