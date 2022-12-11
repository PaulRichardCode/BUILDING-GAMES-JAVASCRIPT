const btns = document.querySelectorAll("button");

const computerChoice = document.querySelector("#computer-choice");
const userChoice = document.querySelector("#user-choice");
const result = document.querySelector("#result");

let mommy;
let computer;
let answer;

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
  if (computerChoice.innerHTML === userChoice.innerHTML) {
    answer = "It a Draw";
  } else if (
    computerChoice.innerText === "rock" &&
    userChoice.innerText === "paper"
  ) {
    answer = "You Win(Congrats!)";
  } else if (
    computerChoice.innerText === "rock" &&
    userChoice.innerText === "scissors"
  ) {
    answer = "You lose(Try again!)";
  } else if (
    computerChoice.innerText === "paper" &&
    userChoice.innerText === "rock"
  ) {
    answer = "You lose(Try again!)";
  } else if (
    computerChoice.innerText === "paper" &&
    userChoice.innerText === "scissors"
  ) {
    answer = "You Win(Congrats!)";
  } else if (
    computerChoice.innerText === "scissors" &&
    userChoice.innerText === "rock"
  ) {
    answer = "You Win(Congrats!)";
  } else if (
    computerChoice.innerText === "scissors" &&
    userChoice.innerText === "paper"
  ) {
    answer = "You lose(Try again!)";
  }

  result.innerHTML = answer;
}
