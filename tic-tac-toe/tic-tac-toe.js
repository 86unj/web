let elementsArray = document.querySelectorAll(".block");
let userSelection = []
let comSelection = []
let userTurnNO = 0
let result = 0;

elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (elem.innerHTML == "") {
            elem.innerHTML = "&#10060"
            userSelection[userTurnNO] = elem.id
            //comTurn()
            userTurnNO++
        }

    })
})

let thisinterval = setInterval(winnerCheck, 1000)

function winnerCheck() {
    let one = false, two = false
    while (userTurnNO > 2 && !one) {
        if (one = winner(userSelection)) {
            clearInterval(thisinterval)
            alert("You win!!")
        }
        //else if (two =winner(comselect)){
        //    alert("com win")
        // }
    }
}




function comTurn() {
    let selected = parseInt(userSelection[userTurnNO])
    let comselect = document.getElementById(selected + 11)
    // alert(selected)
    if (comselect.innerHTML == "") {
        comselect.innerHTML = "&#11093"
        comSelection[userTurnNO] = comselect.id
    }
    else {

    }
}

function winner(array) {
    let i, j
    let remainCnt, quotCnt, cntOne, cntTwo
    let result = false

    while (result === false) {
        for (j = 0; j < 3; j++) {
            remainCnt = 0
            quotCnt = 0
            for (i = 0; i < userTurnNO; i++) {
                if (array[i] % 10 === j) {
                    remainCnt++
                }
                if (parseInt(array[i] / 10 === j)) {
                    quotCnt++
                }
                if (array[i] === 0 || 11 || 22) {
                    cntOne++
                }
                if (array[i] === 2 || 11 || 20) {
                    cntTwo++
                }
            }
            if (remainCnt || quotCnt || cntOne || cntTwo > 2) {
                result = true
            }
        }
    }
    return result
}