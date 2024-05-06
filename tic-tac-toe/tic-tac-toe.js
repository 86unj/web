let elementsArray = document.querySelectorAll(".block");
let userSelection = []
let comSelection = []
let userTurnNO = 0

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

let thisinterval = setInterval(winnerCheck, 3000)

function winnerCheck() {
    let one = false, two =false
    while (userTurnNO > 2 && !one) {
        if (one = winner(userSelection)) {
            clearInterval(thisinterval)
            alert("You win!!")
        }
        //else if (two =winner(comSelection)){
        //    clearInterval(thisinterval)
        //    alert("You lose :(")
        //}
        //else if (userTurnNO>5){
        //    clearInterval(thisinterval)
        //    alert("Tie")
        //}
    }
}


//function comTurn() {
//    let selected = parseInt(userSelection[userTurnNO])
//    let comselect = document.getElementById(selected + 11)
    // alert(selected)
//    if (comselect.innerHTML == "") {
//        comselect.innerHTML = "&#11093"
//        comSelection[userTurnNO] = comselect.id
//    }
//    else {
//
//    }
//}

function winner(array) {
    let i, j
    let remainCnt, quotCnt
    let result = false

    //const isDiag = userSelection.some(function (number) {
    //    return [0, 11, 22].includes(number) || [2, 11, 20].includes(number);
    //});

    while (result === false) {
        for (j = 0; j < 3; j++) {
            remainCnt = 0
            quotCnt = 0
            for (i = 0; i < userTurnNO; i++) {
                if (array[i] % 10 === j) {
                    remainCnt++
                }
                if ((array[i] / 10 === j)) {
                    quotCnt++
                }
            }
            if (remainCnt > 2 || quotCnt > 2) {
                result = true
            }
        }
        //if (isDiag){
        //    result =true
        //}
    }
return result
    }