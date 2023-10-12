const inputValue = document.querySelector("input");
const btnTry = document.querySelector("#btnTry");
const btnRestart = document.querySelector("#btnRestart");
const boxGame = document.querySelector("#game");
const boxModal = document.querySelector("#modal");
const tryText = document.querySelector("#try");
const errorMessage = document.querySelector(".error");

let randomNumber = generateRandomNumber();
let tries = 0;

function getInputFocused() {
  inputValue.focus();
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 11);
}

function cleanMessageError() {
  errorMessage.textContent = "";
}

function checkGuess() {
  const guess = parseInt(inputValue.value, 10);

  if (isNaN(guess)) {
    errorMessage.textContent = "Insira um valor";
    return;
  } else {
    tries++;
  }

  if (guess === randomNumber) {
    boxGame.classList.add("hide");
    boxModal.classList.remove("hide");
    tryText.textContent = `Você acertou em ${tries} tentativas!`;
  } else {
    errorMessage.textContent = "Errou! Tente novamente";
    tryText.textContent = "Game Over!!";
  }

  if (tries >= 3 && guess !== randomNumber) {
    boxGame.classList.add("hide");
    boxModal.classList.remove("hide");
  }

  getInputFocused();
  inputValue.value = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && boxGame.classList.contains("hide")) {
    btnRestart.click();
  }
});

btnTry.addEventListener("click", () => {
  checkGuess();
});

btnRestart.addEventListener("click", () => {
  randomNumber = generateRandomNumber();
  tries = 0;

  boxGame.classList.remove("hide");
  boxModal.classList.add("hide");
  cleanMessageError();
  getInputFocused();
});
