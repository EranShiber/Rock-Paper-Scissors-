const scissors = document.getElementById('s');// 1
const paper = document.getElementById('p'); // 2
const rock = document.getElementById('r'); // 3

const choices = [0,scissors,paper,rock]

const h2 = document.getElementById('h2');
let userScoreNum = document.getElementById('userScoreNum');
let compScoreNum = document.getElementById('compScoreNum');

compScoreNum.innerHTML = 0;
userScoreNum.innerHTML = 0;

window.onload = function() {
compScoreNum.innerHTML = localStorage.getItem('compScoreNum')|0
userScoreNum.innerHTML = localStorage.getItem('userScoreNum')|0
}


// scissors btn 
scissors.addEventListener("click", function () {
   startCounting(1)
})
// Paper btn ------------------
paper.addEventListener("click", function () {
    startCounting(2)
})
//  Rock btn
rock.addEventListener("click", function () {
    startCounting(3)
})
function startCounting(userChoice){
    let counter = 2
    const interval = setInterval(function () {
        h2.innerHTML = counter;
        if(counter===0){
            clearInterval(interval);
            runGame(userChoice);
        }
        counter--
    }, 1000)
}
function runGame(userChoice) {
    let compAnswer = Math.floor(Math.random() * 3) + 1;

    let scissor = 1;
    let pappers = 2;
    let rocks = 3;

    if (userChoice === compAnswer) {//tie
        h2.innerHTML = "IT'S A TIE! "
        choices[userChoice].classList.add('tie-glow')
    setTimeout(function () { choices[userChoice].classList.remove('tie-glow') }, 2000);
    }else if((userChoice===scissor && compAnswer===pappers)||
       (userChoice===pappers && compAnswer===rocks)||
       (userChoice===rocks && compAnswer===scissor)){//user win
        h2.innerHTML = "You Won!"
        updateScore('user')
        paintWinnerAndLoser(choices[userChoice],choices[compAnswer])
       } else {
           h2.innerHTML = "Compuer Won.";
           updateScore('comp')
           paintWinnerAndLoser(choices[compAnswer], choices[userChoice] )
       }

}
function paintWinnerAndLoser(winnerEle, loserEle) {
    winnerEle.classList.add('win-glow')
    setTimeout(function () {  winnerEle.classList.remove('win-glow') }, 2000);

    loserEle.classList.add('lose-glow')
    setTimeout(function () {  loserEle.classList.remove('lose-glow') }, 2000);
}
function updateScore(winner){
    if(winner==="user"){
        userScoreNum.innerHTML++
        localStorage.setItem('userScoreNum',userScoreNum.innerHTML)
    }else{
       compScoreNum.innerHTML++ 
       localStorage.setItem('compScoreNum',compScoreNum.innerHTML)
    }

}



