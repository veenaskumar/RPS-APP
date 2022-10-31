function randomchoice(){
    let choices=['rock','paper','scissor'];
    let computerch=(Math.floor(Math.random()*choices.length))
    return (choices[computerch])
}
const totalscore={player_score:0,computerchoice:0};
function game(Randomchoice,playerchoice){
    let score;
    if(Randomchoice==playerchoice){
        score=0;
    }else if(Randomchoice=='rock' && playerchoice=='paper'){
        score=1;
    }else if(Randomchoice=='paper' && playerchoice=='scissor'){
        score=1;
    }else if(Randomchoice=='scissor' && playerchoice=='rock'){
        score=1;
    }else{
        score=-1;
    }
    return score
}
let playerchoice=()=>{
   const rpsbutton=document.querySelectorAll('.rpsbut');
    rpsbutton.forEach(rpsbuttons=>{
    rpsbuttons.onclick=()=>onclickrps(rpsbuttons.value)
   })
}
let onclickrps=(playerchoice)=>{
    console.log({playerchoice});
    let computerchoice=randomchoice();
    console.log({computerchoice})
    let score=game(computerchoice,playerchoice) 
    totalscore['player_score']+=score;
    console.log({totalscore})
    console.log({score})
    showResult(score,playerchoice,computerchoice)
}
function showResult(score,playerchoice,computerchoice){
    var a=document.getElementById('playerchoice')
    var b=document.getElementById('computerchoice')
    var c=document.getElementById('score')
    var d=document.getElementById('clear')
    b.style.color='orange'
    b.innerText=`Your Score:${totalscore['player_score']}`
    a.innerText=`Player: "${playerchoice}" vs Computer :"${computerchoice}"`
    if(score==-1){
        c.innerText='you Lose'
        c.style.color='red'
    }else if(score==0){
        c.innerText='Draw'
        c.style.color='yellow'
    }else{
        c.innerText='You won'
        c.style.color='green'
    }
    d.addEventListener('click',clear=()=>{
        a.innerText=""
        b.innerText=""
        c.innerText=""
    })
}
playerchoice();

