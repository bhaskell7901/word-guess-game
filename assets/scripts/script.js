let startButton = document.getElementById("play-button");
let gameWord = document.getElementById("game-word");

let word = "testword";

let wordArr = [];
let gameArr = [];
var counter = 0;

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
    console.log(gameArr.join(""));
    gameWord.textContent = gameArr.join("");
}


startButton.addEventListener("click", function(){
    setWordArray("testword");
    renderGameWord();
});

document.addEventListener("keydown", function(e){
    console.log(e);
    var char = e.key.toLowerCase();

    for(var i = 0; i < wordArr.length; i++){
        if(wordArr[i].toLowerCase() === char){
            gameArr[i] = wordArr[i];
        }
    }
    renderGameWord();
});

