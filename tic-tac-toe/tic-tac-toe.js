let elementsArray = document.querySelectorAll(".block");
let userSelection = []
let comSelection = []
let userTurnNO = 0
let result=0;

elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (elem.innerHTML == "") {
            elem.innerHTML = "&#10060"
            userSelection[userTurnNO] = elem.id
            comTurn()
            userTurnNO++
            //alert("You've selected: "+userSelection)
        }

    })
})

function comTurn() {
    let selected = parseInt(userSelection[userTurnNO])
    let comselect = document.getElementById(selected + 10)
    // alert(selected)
    if (comselect.innerHTML == "") {
        comselect.innerHTML = "&#11093"
    }
    else {

    }
}

function winner() {
    return 0
}