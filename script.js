var roundScore, totalScore, dice, activePlayer, playGame;

newStart();
function newStart(){
    roundScore = 0;
    totalScore = [0,0];
    activePlayer = 0;
    playGame = true;
    
    document.querySelector(".totalScorePlayer-0").textContent = 0;
    document.querySelector(".totalScorePlayer-1").textContent = 0;
    document.querySelector(".currentScore-0").textContent = 0;
    document.querySelector(".currentScore-1").textContent = 0;
    document.querySelector(".image").style.display = "none";
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
    document.querySelector(".name-0").textContent = "Skore prveho hraca";
    document.querySelector(".name-1").textContent = "Skore druheho hraca";
}


document.querySelector(".rollDice").addEventListener("click", function(){
    if(playGame){
        var dice = Math.ceil(Math.random()*6);
        var diceElement = document.querySelector(".imageBild");
        document.querySelector(".image").style.display = "block";
        console.log(diceElement.src = "img/" + dice + ".jpg");
    
        if(dice !== 1){
            roundScore = roundScore + dice;
            document.querySelector(".currentScore-" + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
            
        }
    }
  });

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    roundScore = 0;
    document.querySelector(".currentScore-0").textContent = 0;
    document.querySelector(".currentScore-1").textContent = 0;
    document.querySelector(".image").style.display = "none";
    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");
}
document.querySelector(".holdDice").addEventListener("click", function(){
    if(playGame){
        totalScore[activePlayer] =  totalScore[activePlayer] + roundScore;
        document.querySelector(".totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer] ;
        if(totalScore[activePlayer] >= 20){
            document.querySelector(".name-" + activePlayer).textContent = "Vitaz!";
            playGame = false;
        }else{
            nextPlayer();
            document.querySelector(".image").style.display = "none";
        }
    }
});
document.querySelector(".newGame").addEventListener("click", newStart);














































