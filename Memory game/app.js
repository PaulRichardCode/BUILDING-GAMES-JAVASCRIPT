const cardArray = [
  { name: "fries", img: "img/fries.jpg" },
  {
    name: "hamburger",
    img: "img/hamburger.jpg",
  },
  {
    name: "hotdog",
    img: "img/hotdog.jpg",
  },
  {
    name: "icecream",
    img: "img/ice cream.jpg",
  },
  {
    name: "milkshake",
    img: "img/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "img/pizza.jpg",
  },
  {
    name: "white",
    img: "img/white.jpg",
  },
  {
    name: "blank",
    img: "img/blank.jpg",
  },
  {
    name: "fries",
    img: "img/fries.jpg",
  },
  {
    name: "hamburger",
    img: "img/hamburger.jpg",
  },
  {
    name: "hotdog",
    img: "img/hotdog.jpg",
  },
  {
    name: "icecream",
    img: "img/ice cream.jpg",
  },
];
/* 
cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChoosen = [];
let cardWon = [];
let cardChoosenId = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.append(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const option1 = cardChoosenId[0];
  const option2 = cardChoosenId[1];

  console.log("checking match");
  if (option1 == option2) {
    alert("you have clicked the same image");
  }

  if (cardChoosen[0] == cardChoosen[1]) {
    alert("You found a Match");
    cards[option1].setAttribute("src", "img/white.jpg");
    cards[option2].setAttribute("src", "img/white.jpg");
    cards[option1].removeEventListener("click", flipCard);
    cards[option2].removeEventListener("click", flipCard);
    cardWon.push(cardChoosen);
  } else {
    cards[option1].setAttribute("src", "img/blank.jpg");
    cards[option2].setAttribute("src", "img/blank.jpg");
  }
  cardChoosen = [];
  cardChoosenId = [];

  resultDisplay.innerText = cardWon.length;

  if (cardWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratultions you found them all";
  }
}

function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  cardChoosen.push(cardArray[cardId].name);
  cardChoosenId.push(cardId);
  /*   console.log(cardChoosenId); 
  console.log(cardChoosen);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChoosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
 */

const grid = document.querySelector("#grid");
const cardChosen = [];

/* function images() {
  for (let i = 1; i < cardArray.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", "img/blank.jpg");
    grid.appendChild(img);
    img.addEventListener("click", flipOut);
    img.setAttribute("data-id", i);
  }
}
images();

function flipOut() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  console.log(cardChosen);

  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 2000);
  }
}

function checkMatch() {
  if (cardChosen[0] === cardChosen[1]) {
    alert("you ve won");
  } else {
    
  }
}
 */
