//Hit values
let hitrn;
function getnewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

//timer
let timer=60;
function strttimer(){
  let timeint=setInterval(()=>{
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
    }
    else{
        clearInterval(timeint);
        document.querySelector("#pmain").innerHTML=`<h1>Game Over</h1>`;
    }
  },1000)
}

//score values
let score=0;
function getscore(){
   score+=10;
   document.querySelector("#scoreval").textContent=score;
}

//event listner
document.querySelector("#pmain").addEventListener("click",(e)=>{
    let clickval=Number(e.target.textContent);
    if(clickval===hitrn){
    getscore();
    makeBubble();
    getnewhit();
    }
})

function makeBubble(){
    let clutter="";
    for(let i=1;i<=150;i++){
        let rn= Math.floor(Math.random()*10);
        clutter +=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pmain").innerHTML=clutter;  
}
getnewhit();
makeBubble()
strttimer();