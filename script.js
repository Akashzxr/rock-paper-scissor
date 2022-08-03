const button = document.querySelector('button');
//function to get computer choice
function getcomputerchoice() {
  let computeroption;
  let option = Math.floor(Math.random() * 3) + 1;
  switch(option){
    case 1:
        computeroption="ROCK";
        break;
    case 2:
        computeroption="PAPER";
        break;
    case 3:
        computeroption="SCISSOR";
        break;
  }
  console.log("computer select  ="+computeroption);
  return computeroption;
}
//function to get player choice
function getplayerchoice(){
    pselect=prompt("enter selection")
    pselectupper=pselect.toUpperCase();
    console.log("player select ="+pselectupper);
    return pselectupper;
}

let p=0;
let c=0;

//function to play a round
function playround(computerselection,playerselection){
    
    if(computerselection==playerselection){
        console.log("itsa draw");
    }
    else if(computerselection=='ROCK'&&playerselection=='PAPER'){
        console.log('YOU WIN,PAPER BEATS STONE');
        p++;
    }
    else if (computerselection=='PAPER'&&playerselection=='SCISSOR'){
        console.log('YOU WIN,SCISSOR BEATS PAPER')
        p++;
    }
    else if (computerselection=='SCISSOR'&&playerselection=='ROCK'){
        console.log('YOU WIN,STONE BEATS SCISSOR');
        p++;
    }
    else{
        console.log("YOU LOSE");
        c++;
    }
}
//function to play game 5 times
function game(){
   let i;
   for(i=0;i<5;i++){
    let player=getplayerchoice();
    let computer=getcomputerchoice();
    playround(computer,player);
    console.log("playerscore ="+p);
    console.log("computerscore ="+c);
   }
}

button.addEventListener('click',game)
