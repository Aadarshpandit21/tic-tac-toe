let allBtns = document.querySelectorAll('.gameBtn');
let resetBtn = document.querySelector('#resetBtn');

//console.log(allBtns);
let turnOfO = true;
let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

allBtns.forEach((perBox) =>{
    perBox.addEventListener('click',()=>{
        // console.log('clicked on Box');
        // perBox.innerHTML = "yo";
        if(turnOfO == true){
            perBox.innerHTML = "O";
            turnOfO = false;
        }else{
            perBox.innerHTML = "X";
            turnOfO = true;
        }
        perBox.disabled = true;
        checkWinner();
    })
})

resetBtn.addEventListener('click', () => {
    allBtns.forEach((perBox) => {
        
        perBox.innerHTML = '';
        perBox.disabled = false;
    });

    turnOfO = true;
});



const checkWinner = ()=>{
   for(let i=0;i<winningPattern.length;i++){
    let [a,b,c] = winningPattern[i];
    let boxA = allBtns[a].innerHTML;
    let boxB = allBtns[b].innerHTML;
    let boxC = allBtns[c].innerHTML;

    if(boxA !="" && boxA == boxB && boxB == boxC){
        alert(`${boxA} is a winner`);
        resetGame();
    }
   }
};
