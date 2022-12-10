const btns = document.querySelectorAll("button");

const computerChoice = document.querySelector("#computer-choice");
const userChoice = document.querySelector("#user-choice");
const result = document.querySelector("#result");

let mommy;
let computer;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    userChoice.innerHTML = e.target.id;
    getComputerChoice();
    getResult();
  });
});

function getComputerChoice() {
  const random = Math.floor(Math.random() * btns.length) + 1;

  if (random === 1) {
    computer = "rock";
  } else if (random === 2) {
    computer = "paper";
  } else if (random === 3) {
    computer = "scissors";
  }

  computerChoice.innerHTML = computer;
}

function getResult() {
  if (computerChoice.innerText === "rock" && userChoice.innerText === "") {
    console.log("MOVE ON BROTHER");
  }
}
