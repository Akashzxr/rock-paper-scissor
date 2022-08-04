let player_img = document.querySelector('#player-img');
let computer_img = document.querySelector('#computer-img');

let player_score = document.querySelector('#player-score');
let computer_score = document.querySelector('#computer-score');

let win_text1 = document.querySelector('#win-text-1');
let win_text2 = document.querySelector('#win-text-2');

//function to get computer choice
function getcomputerchoice() {
  let computeroption;
  let option = Math.floor(Math.random() * 3) + 1;
  switch(option){
    case 1:
        computeroption="ROCK";
        computer_img.textContent='🪨';
        break;
    case 2:
        computeroption="PAPER";
        computer_img.textContent='📄';
        break;
    case 3:
        computeroption="SCISSOR";
        computer_img.textContent='✂️';
        break;
  }
  return computeroption;
}

//display function
function display(val){
    player_img.textContent=val;
}

//function to get player choice
let pselect;
function getplayerchoice(val){
   
    if(val==1){
        pselect="ROCK";
    }
    else if(val==2){
        pselect="PAPER";
    }
    else if (val == 3){
        pselect="SCISSOR";
    }
}

let p=0;
let c=0;

//function to play a round
function playround(computerselection,playerselection){
    
    if(computerselection==playerselection){
       win_text1.textContent = "ITS A DRAW";
       win_text2.textContent = "NOBODY WINS"
    }
    else if(computerselection=='ROCK'&&playerselection=='PAPER'){
        win_text1.textContent = "YOU WIN";
        win_text2.textContent='PAPER BEATS ROCK';
        p++;
    }
    else if (computerselection=='PAPER'&&playerselection=='SCISSOR'){
        win_text1.textContent = "YOU WIN";
        win_text2.textContent='SCISSOR BEATS PAPER'
        p++;
    }
    else if (computerselection=='SCISSOR'&&playerselection=='ROCK'){
        win_text1.textContent = "YOU WIN";
        win_text2.textContent='ROCK BEATS SCISSOR';
        p++;
    }
    else if(computerselection=='PAPER'&&playerselection=='ROCK'){
        win_text1.textContent = "YOU LOSE";
        win_text2.textContent='PAPER BEATS ROCK';
        c++;
    }
    else if(computerselection=='SCISSOR'&&playerselection=='PAPER'){
        win_text1.textContent = "YOU LOSE";
        win_text2.textContent='SCISSOR BEATS PAPER';
        c++;
    }
    else if(computerselection=='ROCK'&&playerselection=='SCISSOR'){
        win_text1.textContent = "YOU LOSE";
        win_text2.textContent='ROCK BEATS SCISSOR';
        c++;
    }
}

//function to play game
function game(){
    let computer=getcomputerchoice();
    playround(computer,pselect);
    player_score.textContent=p;
    computer_score.textContent=c;
    if(p==5){
        alert("YEH YOU WIN");
        p=0;
        c=0;
        player_score.textContent=p;
        computer_score.textContent=c;
    }
    else if(c==5){
        alert("BETTER LUCK NEXT TIME! YOU LOSE");
        p=0;
        c=0;
        player_score.textContent=p;
        computer_score.textContent=c;
    }
}
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
