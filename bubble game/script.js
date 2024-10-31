const pmain=document.querySelector("#pmain");
let score=0;
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
        pmain.innerHTML=`<div><h1>Game Over</h1><button class="btn">Retry</button></div>`;

        pmain.querySelector(".btn").addEventListener("click",()=>{
            timer=60;
            score=0;
            document.querySelector("#scoreval").textContent=score;
            makeBubble();
            getscore();
            getnewhit();
            strttimer();
            
        })
    }
  },1000)
}



//score values

function getscore(){
   score+=10;
   document.querySelector("#scoreval").textContent=score;
}

//event listner
pmain.addEventListener("click",(e)=>{
    let clickval=Number(e.target.textContent);
    if(clickval===hitrn){
    getscore();
    makeBubble();
    getnewhit();
    }
    else if(clickval!==hitrn)
    {
        document.querySelector("#scoreval").textContent=score-=10;
    }
})

function makeBubble(){
    let clutter="";
    for(let i=1;i<=150;i++){
        let rn= Math.floor(Math.random()*10);
        clutter +=`<div class="bubble">${rn}</div>`;
    }
    pmain.innerHTML=clutter;  
}
getnewhit();
makeBubble()
strttimer();
