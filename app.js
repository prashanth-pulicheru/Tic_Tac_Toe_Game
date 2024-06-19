let boxes = document.querySelectorAll(".box");
let msgDis = document.querySelector("#msg");
let msgContainer = document.querySelectorAll(".msg-container");

let player0 = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(player0){
            box.innerText  = "O";
            player0 = false;
        }
        else{
            box.innerText = "X";
            player0 = true;
        }
        box.disabled = true;
        winnerCheck();
    });
    
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const winnerCheck = () => {
    for( pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner is " , pos1Val);
                showWinner(pos1Val);

            }
        }
    }
}

const showWinner = (winner) => {
    msgDis.innerText = `Congratulation Winner is ${winner}` ;
    msgContainerr.classList.remove("hide");
    disableBoxes();
}