let startButton = document.getElementById("play-button");
let gameWord = document.getElementById("game-word");
let seconds = document.getElementById("seconds");
let winsElement = document.getElementById("wins");
let lossesElement = document.getElementById("losses");
let wins = localStorage.getItem("wins");
let losses = localStorage.getItem("losses");

let word = "testword";

let wordArr = [];
let gameArr = [];
let secondsLeft = 11;

function setWordArray(word){
    wordArr = word.split("");
    setGameArray(wordArr);
    return;
}

function setGameArray(wordArr){
    gameArr = new Array(wordArr.length);

    for(var i = 0; i < gameArr.length; i++){
        gameArr[i] = "_";
    }
    return;
}

function renderGameWord(){
    gameWord.textContent = gameArr.join("");
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    seconds.textContent = secondsLeft;

    if(secondsLeft === 0) {
      logOutcome(0);
      clearInterval(timerInterval);
    } else if(gameArr.join("") === wordArr.join("")){
      secondsLeft = 0;
      seconds.textContent = secondsLeft;
      clearInterval(timerInterval);
    }
  }, 1000);
}

function displayStats() {
  winsElement.textContent = wins;
  lossesElement.textContent = losses;
}

function logOutcome(decision) {
  if(decision) {
    if(wins) {
      wins = parseInt(wins);
      wins += 1;
      localStorage.setItem("wins", wins);
    } else {
      localStorage.setItem("wins", 1);
    }
    alert("You won! Press the Play Game button to try again.")
  } else {
    if(losses) {
      losses = parseInt(losses);
      losses += 1;
      localStorage.setItem("losses", losses);
    } else {
      localStorage.setItem("losses", 1);
    }
    alert("You lost! Press the Play Game button to try again.")
  }
  displayStats();
}



startButton.addEventListener("click", function(){
    setWordArray("testword");
    renderGameWord();
    secondsLeft = 11;
    setTime();
});

document.addEventListener("keydown", function(e){
    var char = e.key.toLowerCase();

    for(var i = 0; i < wordArr.length; i++){
        if(wordArr[i].toLowerCase() === char && gameArr[i] !== wordArr[i]){
          gameArr[i] = wordArr[i];
          secondsLeft += 3;
        }
    }
    renderGameWord();
    if(gameArr.join("") === wordArr.join("")){
      logOutcome(1);
    }
});

displayStats();

