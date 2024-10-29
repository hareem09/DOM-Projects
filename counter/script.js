const con=document.querySelector(".container")
const inc=document.querySelector("#incr")
const dec=document.querySelector("#decr")
const reset=document.querySelector("#reset")
const num=document.querySelector("span")

let n=0;

inc.addEventListener("click",(e)=>{
    e.defaultPrevented;
    if(n>=0){
        num.innerHTML=n;
        n++;
    }
})
dec.addEventListener("click",(e)=>{
    e.defaultPrevented;
    if(n>=0){
        n--;
        num.innerHTML=n;
        
    }
})
reset.addEventListener("click",(e)=>{
    e.defaultPrevented;
    num.innerHTML="";
    n=0;
})