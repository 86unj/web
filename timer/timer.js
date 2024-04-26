let second = document.getElementById("sec");
let minute = document.getElementById("min");
let stopButton = document.getElementById("stop");
let time = 10;

let userInput = 5;
let userTime = userInput* 60;


function timer() { 
    time -= 1
    second.innerHTML = time % 60;
    minute.innerHTML = parseInt(time / 60);
    if (time ===0){
        clearInterval(thisInterval)
        document.getElementById("start").disabled=false;
    }
}


document.getElementById("start").addEventListener("click", function () {
time = userTime;
document.getElementById("start").disabled=true;
    thisInterval = setInterval(timer , 1000);// why it doesn't walk with timer()
});

stopButton.addEventListener("click", function () {
        if (stopButton.innerHTML == "stop"){
            clearInterval(thisInterval)
            stopButton.innerHTML = "resume"}
        else{
            stopButton.innerHTML ="stop"
            thisInterval= setInterval(timer , 1000);
        }
});

document.getElementById("reset").addEventListener("click", function () {
    clearInterval(thisInterval);
    time = 5 * 60
    second.innerHTML = time % 60;
    min.innerHTML = parseInt(time / 60);
    document.getElementById("start").disabled=false;
});


