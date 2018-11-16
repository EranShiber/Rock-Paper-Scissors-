const scissors = document.getElementById('s');// 1
const paper = document.getElementById('p'); // 2
const rock = document.getElementById('r'); // 3
const h2 = document.getElementById('h2');
let userScoreNum = document.getElementById('userScoreNum');
let compScoreNum = document.getElementById('compScoreNum');

compScoreNum.innerHTML = 0;
userScoreNum.innerHTML = 0;

// scissors btn 

scissors.addEventListener("click", function () {
    let counter = 4
    const interval = setInterval(function () {
        h2.innerHTML = counter;
        if(counter===0){
            clearInterval(interval);
            runGame();
        }
        counter--
    }, 1000)
})

function runGame() {
    let compAnswer = Math.floor(Math.random() * 3) + 1;
    let scissor = 1;
    let papers = 2;
    let rocks = 3;
    switch(compAnswer) {
    case scissor:
    h2.innerHTML = "IT'S A TIE! "
    s.classList.add('tie-glow')
    setTimeout(function () { s.classList.remove('tie-glow') }, 2000);
    break;
    case papers:
    userScoreNum.innerHTML++
    compScoreNum.innerHTML--
    h2.innerHTML = "You Won!"
    s.classList.add('win-glow');
    setTimeout(function () { s.classList.remove('win-glow') }, 2000);
    r.classList.add('lose-glow');
    setTimeout(function () { r.classList.remove('lose-glow') }, 2000)
    break;  
    case rocks:
    userScoreNum.innerHTML--
    compScoreNum.innerHTML++
    h2.innerHTML = "You lost, Better luck next time!"
    r.classList.add('win-glow')
    setTimeout(function () { r.classList.remove('win-glow') }, 2000)
    s.classList.add('lose-glow');
    setTimeout(function () { s.classList.remove('lose-glow') }, 2000)
    break;
    default: 
    console.log('error');
    break;
}
   
}
// Paper btn ------------------
paper.addEventListener("click", function () {

    setTimeout(function () { h2.innerHTML = '3' }, 2000);
    setTimeout(function () { h2.innerHTML = '2' }, 3000);
    setTimeout(function () { h2.innerHTML = '1' }, 4000);
    setTimeout(function () { h2.innerHTML = 'Winner is:' }, 4000);
    setTimeout(function () {
        let compAnswer = Math.floor(Math.random() * 3) + 1;
        const scissor = 1;
        const papers = 2;
        const rocks = 3;
        if (compAnswer === papers) {
            h2.innerHTML = "Close one, IT'S A TIE! "
            p.classList.add('tie-glow');
            setTimeout(function () { p.classList.remove('tie-glow') }, 2000);
        } else if (compAnswer === rocks) {
            userScoreNum.innerHTML++;
            compScoreNum.innerHTML--
            h2.innerHTML = "You Won!"
            p.classList.add('win-glow');
            setTimeout(function () { p.classList.remove('win-glow') }, 2000);
            r.classList.add('lose-glow');
            setTimeout(function () { r.classList.remove('lose-glow') }, 2000);
        } else if (compAnswer === scissor) {
            userScoreNum.innerHTML--;
            compScoreNum.innerHTML++;
            h2.innerHTML = "You lost"
            s.classList.add('win-glow');
            setTimeout(function () { s.classList.remove('win-glow') }, 2000)
            p.classList.add('lose-glow');
            setTimeout(function () { p.classList.remove('lose-glow') }, 2000)
        }
    }, 5000)
})
//  Rock btn
rock.addEventListener("click", function () {
    setTimeout(function () { h2.innerHTML = '3' }, 1000);
    setTimeout(function () { h2.innerHTML = '2' }, 2000);
    setTimeout(function () { h2.innerHTML = '1' }, 3000);
    setTimeout(function () { h2.innerHTML = 'Winner is:' }, 4000);
    setTimeout(function () {
        let compAnswer = Math.floor(Math.random() * 3) + 1;
        let scissor = 1;
        let papers = 2;
        let rocks = 3;
        if (compAnswer === rocks) {
            h2.innerHTML = "IT'S A TIE!"
            r.classList.add('tie-glow');
            setTimeout(function () { r.classList.remove('tie-glow') }, 2000);
        } else if (compAnswer === scissor) {
            userScoreNum.innerHTML++;
            compScoreNum.innerHTML--
            h2.innerHTML = "You Won!"
            s.classList.add('lost-glow');
            setTimeout(function () { s.classList.remove('lose-glow') }, 2000)
            r.classList.add('win-glow');
            setTimeout(function () { r.classList.remove('win-glow') }, 2000);
        } else if (compAnswer === papers) {
            userScoreNum.innerHTML--;
            compScoreNum.innerHTML++;
            h2.innerHTML = "You lost";
            r.classList.add('lose-glow');
            setTimeout(function () { r.classList.remove('lose-glow') }, 2000)
            p.classList.add('win-glow');
            setTimeout(function () { p.classList.remove('win-glow') }, 2000)
        }
    }, 5000)
})



