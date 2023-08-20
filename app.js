let gameseq = [];
let userseq = [];

let btns = ["red", "green", "purple", "skyblue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
    }

    levelup();
});

function gameflash(btn) {
btn.classList.add("flash");
setTimeout(function () {
    btn.classList.remove("flash");
}, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
    }

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random() * 3);
    let randColor = btns [randidx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randbtn);
    // console.log(randidx);
    // console.log(randColor);
    // console.log(randbtn);


   
}

function checkANS(idx) {
    // console.log("curr level : ",level);
    let dx = level - 1;

    if (userseq[idx] == gameseq[idx]) {
   if (userseq.length == gameseq.length) {
    setTimeout(levelup, 1000);
   }
} else {
    h2.innerHTML = `game over! your score is <b>${level}<b> <br> press any key to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout (function() {
        document.querySelector("body").style.backgroundColor = "white";
        },250);
    reset();

}
}



function btnpress() {
    // console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkANS(userseq.length - 1)
}

let everybtn = document.querySelectorAll(".btn");
for (btn of everybtn ) {
    btn.addEventListener("click", btnpress);
}

function reset() {
started = false;
gameseq = [];
userseq = [];
level = 0;
}

 

