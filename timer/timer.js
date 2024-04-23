let element = document.getElementById("time")
element.innerHTML=59;

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(thisInterval);
    document.getElementById("stop").innerHTML = "resume"
});
thisInterval = setInterval(function () {element.innerHTML -= 1}, 1000);
if (element.innerHTML < 0){
    clearInterval(thisInterval)
}