const timeDisplay = document.getElementById("timeDisplay");
const button = document.getElementById('clickBtn');
const clickNumber = document.getElementById("clicks");

let timeLeft = 10;

function startTimer () { setInterval(function timer() {
    if(timeLeft <= -1) {
        clearInterval(timer);
    } else {
        timeDisplay.innerText = `${timeLeft} second(s)`;
    }
    timeLeft -=1;

}, 1000);
}

let count = 0;

button.addEventListener("click", function(e) {
startTimer();
 if (timeLeft > 0 ) {
 count+=1
 let clicks = count;
 clickNumber.textContent = `you clicked the button ${clicks} time(s).`
 }
})