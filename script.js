document.addEventListener("DOMContentLoaded", function () {
    const userName = prompt("Qual é o seu nome?");
    if (userName) {
      document.querySelector("h1").textContent = userName;
    }
  });
  