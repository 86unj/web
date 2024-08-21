let second = document.getElementById("sec");
let minute = document.getElementById("min");
const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
let progress = document.getElementById("bar-progress");
let progressWidth = progress.offsetWidth;
let remainingTime = 0;

let userInput = 5;
let userTime = userInput * 60;


function startTimer() {
    remainingTime -= 1
    second.textContent = remainingTime % 60;
    minute.textContent = parseInt(remainingTime / 60);
    decreaseProgress();
    if (remainingTime === 0) {
        clearInterval(thisInterval)
        startButton.disabled = false;
    }
}


startButton.addEventListener("click", function () {
    remainingTime = userTime;
    resetProgress();
    startButton.disabled = true;
    thisInterval = setInterval(timer, 1000);// why it doesn't walk with timer()
});

stopButton.addEventListener("click", function () {
    if (stopButton.textContent == "stop") {
        clearInterval(thisInterval)
        stopButton.textContent = "resume"
    }
    else {
        stopButton.textContent = "stop"
        thisInterval = setInterval(timer, 1000);
    }
});

resetButton.addEventListener("click", function () {
    clearInterval(thisInterval);
    remainingTime = userInput * 60
    second.textContent = remainingTime % 60;
    min.textContent = parseInt(remainingTime / 60);
    startButton.disabled = false;
    resetProgress();
    stopButton.textContent= "stop"
});

function decreaseProgress() {
    let decrementValue;
    decrementValue = 550 / userTime;
    progressWidth -= decrementValue;
    progress.style.width = progressWidth + 'px';
}

function resetProgress() {
    progress.style.width = 550 + 'px';
    progressWidth = progress.offsetWidth;
}
