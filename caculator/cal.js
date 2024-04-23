let elementsArray = document.querySelectorAll(".number-button");
let operatorArray = document.querySelectorAll(".operator-button");
let screenField = document.getElementById("screen");
let numberArray=[];
let i=0;
let Anumber="";
let result;


elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function(){
        numberArray[i]=elem.textContent;
        i++;
        Anumber += elem.textContent;
        screenField.innerHTML = Anumber;
    });
});

operatorArray.forEach(function(oper) {
       oper.addEventListener("click", function(){
        let firstNumber = Number(Anumber);
        screenField.innerHTML="";
        Anumber="";
        numberArray[i]=oper.textContent;
        i++;
        });
});

document.getElementById("equal").addEventListener("click", function() {
        result=eval(numberArray.join(""));
        if (result){
        screenField.innerHTML = result;
        }
        numberArray=[];
        Anumber="";
        i=0;
});

document.getElementById("clear").addEventListener("click", function(){
        numberArray=[];
        Anumber=""
        screenField.innerHTML=""
        i=0;
})