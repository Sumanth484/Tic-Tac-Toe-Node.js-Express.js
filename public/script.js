const boxes = document.querySelectorAll(".box");
const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let reset = document.querySelector("#btnrst");
let btnnew = document.querySelector("#btnnew");
let count = 0;

let turnO = true;
function checkWinners() {
    for (let pattern of winners) {
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                document.querySelector("p").innerText = `Winner is ${pos1}`;
                document.querySelector("p").style.display = "block";
                for (let box of boxes) {
                    box.disabled = true;
                }
                
            }
        }
        
    }
}
boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO) {
            btn.innerText = "O";
            btn.style.backgroundColor = "#ED9B40";
            checkWinners();
            turnO = false;
        }
        else {
            btn.innerText = "X";
            btn.style.backgroundColor = "#B4ADEA";
            
            checkWinners();
            turnO = true;
        }
        count = count + 1;
        if (count === 9) {

            document.querySelector("p").innerText = `Game Draw, No winner...!!`;
            document.querySelector("p").style.display = "block";
        }
        btn.disabled = true;
        
    })
})

reset.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = ""
        box.style.backgroundColor = "white";
        document.querySelector("p").style.display = "none";
        box.disabled = false;
    }
})

btnnew.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = ""
        box.style.backgroundColor = "white";
        document.querySelector("p").style.display = "none";
        box.disabled = false;
    }
})
console.log(count);