// let chars = ["ABCDE",
// "abcde",
// "12345",
// "#$%^&"
// ];

let chars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
"abcdefghijklmnopqrstuvwxyz",
"0123456789",
"!@#$%^&*-=_+[]\\/?"
];

let clickedChars = [];

for (i=0; i<chars.length; i++) {
    clickedChars += chars[i];
}

function getPassword() {
    let l = document.getElementById("lengthSelect");
    document.getElementById("results").innerHTML = "";
    for(i=0; i<l.value; i++) {
        randomNum = Math.floor(Math.random()*clickedChars.length);
        document.getElementById("results").innerHTML += clickedChars[randomNum];
    }   
}

function copyPassword() {
    alert("Copy button pressed.");
}

function getCharTypes() {

}

function postResults() {
    document.getElementById("results").innerHTML = "SAMPLE PASSWORD";
}

function clickCharType() {
    let checkedTypes = 0;
    allCharTypes = document.getElementsByClassName("charType");
    clickedChars = [];
    
    for(i=0; i<allCharTypes.length; i++){
        isItChecked = allCharTypes[i].checked;
        if(isItChecked==true) {
            checkedTypes++;
            clickedChars += chars[i];
        }
    }
    
    let colorCharTypes = document.getElementById("charTypes");
    let showErrorMsg = document.getElementById("errorNoCharTypesClicked");
    let hideButtons = document.getElementById("buttons");

    if (checkedTypes < 1) {
        colorCharTypes.style.backgroundColor = "yellow";
        showErrorMsg.style.display = "block";
        hideButtons.style.display = "none";
        
    } else {
        colorCharTypes.style.backgroundColor = "white";
        showErrorMsg.style.display = "none";
        hideButtons.style.display = "block";
    }
}