let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newButton=document.querySelector("#renew-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide")

}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
            
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();

    });

});
const enableboxes=() =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="empty";
        box.innerText="";

    }
}
const disabelboxes=() =>{
    for(let box of boxes)
    {
        box.disabled=true;

    }
}
const showWinner =(winner)=>{
    msg.innerText='you are winner';
    msgContainer.classList.remove("hide");
    disabelboxes();
}




const checkWinner =()=> {
    for(let pattern of winPatterns )
    {
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("wnner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}
newButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
