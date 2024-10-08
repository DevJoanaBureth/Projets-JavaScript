const startButton = document.querySelector("#start-button");
const offScreen = document.querySelector("#off-screen");
const logoScreen = document.querySelector("#logo-screen");
const bootScreen = document.querySelector("#boot-screen");
const loadingBar = document.querySelector(".loading-bar .progress");
const desktop = document.querySelector("#desktop");
const secretFile = document.querySelector("#message-file");
const secretMessage = document.querySelector("#secret-message");
const taskbar = document.querySelector(".taskbar");
const windowsButton = document.querySelector(".windows-button");

let isComputerOn = false;

startButton.addEventListener("click", function () {
  if (!isComputerOn) {
    isComputerOn = true;
    offScreen.classList.add("hidden");
    logoScreen.classList.remove("hidden");

    setTimeout(() => {
      logoScreen.classList.add("visible");
    });

    setTimeout(() => {
      logoScreen.classList.remove("visible");
      logoScreen.classList.add("hidden");
      bootScreen.classList.remove("hidden");

      setTimeout(() => {
        loadingBar.style.width = "100%";
      });

      setTimeout(() => {
        bootScreen.classList.add("hidden");
        desktop.classList.remove("hidden");
        taskbar.style.visibility = "visible";
      }, 3000);
    }, 4000);
  }
});

secretFile.addEventListener("click", function () {
  desktop.classList.add("hidden");
  secretMessage.classList.remove("hidden");
  taskbar.style.visibility = "visible";
});

windowsButton.addEventListener("click", function () {
  if (isComputerOn) {
    location.reload();
  }
});

function mettreAJourHeure() {
  const now = new Date();

  const heures = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const hour = document.querySelector("#hour");

  hour.textContent = `${heures}:${minutes}`;
}

mettreAJourHeure();

setInterval(mettreAJourHeure, 1000);
