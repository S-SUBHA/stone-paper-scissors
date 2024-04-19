let options = document.querySelectorAll(".options");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let messageContent = document.querySelector("#message-content");

const availableOptions = ["stone", "paper", "scissor"];
const userWonMsg = "Congratulations! You have won.";
const userLostMsg = "Sorry, you have lost! Try again.";
const drawMsg = "It is a Draw! Play again.";

const checkWinner = (evt) => {
  const userInput = evt.target.id;
  const compInput = availableOptions[Math.floor(Math.random() * 3)];

  if (userInput === compInput) draw();
  else {
    // if(userInput === "stone" && compInput === "scissor") userWon();
    // if(userInput === "stone" && compInput === "paper") userLost();

    // if(userInput === "paper" && compInput === "stone") userWon();
    // if(userInput === "paper" && compInput === "scissor") userLost();

    // if(userInput === "scissor" && compInput === "paper") userWon();
    // if(userInput === "scissor" && compInput === "stone") userLost();

    userInput === "stone" && (compInput === "scissor" ? userWon() : userLost());
    userInput === "paper" && (compInput === "stone" ? userWon() : userLost());
    userInput === "scissor" && (compInput === "paper" ? userWon() : userLost());
  }
};

const userWon = () => {
  userScore.innerText = ++userScore.innerText;
  messageContent.innerText = userWonMsg;
  messageContent.style.backgroundColor = "rgb(170, 246, 131)";
};

const userLost = () => {
  compScore.innerText = ++compScore.innerText;
  messageContent.innerText = userLostMsg;
  messageContent.style.backgroundColor = "rgb(247, 160, 114)";
};

const draw = () => {
  messageContent.innerText = drawMsg;
  messageContent.style.backgroundColor = "rgb(217, 229, 214)";
};

for (option of options) {
  option.addEventListener("click", checkWinner);
}
