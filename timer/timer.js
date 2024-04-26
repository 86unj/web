let second = document.getElementById("sec");
let minute = document.getElementById("min");
let stopButton = document.getElementById("stop");
let time = 5 * 60;

if (time <= 0) {
    clearInterval}

document.getElementById("start").addEventListener("click", function(){  
        thisInterval = setInterval(function () {
            time -= 1
            second.innerHTML=time%60;
            minute.innerHTML=parseInt(time/60);
        }, 1000);
});

stopButton.addEventListener("click", function() {
    if (stopButton.innterHTML == "stop"){
    clearInterval(thisInterval);
    stopButton.innerHTML = "resume"
    }
    else {
        stopButton.innerHTML = "stop"
    }
});

document.getElementById("reset").addEventListener("click", function() {
    clearInterval(thisInterval);
    time = 5*60
    second.innerHTML = time%60;
    min.innerHTML = parseInt(time/60);
});


