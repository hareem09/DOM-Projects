const con=document.querySelector("#container");
const icon=document.querySelector("i");
let scale=0;
con.addEventListener("dblclick",()=>{
    icon.style.transform='translate(-50%,-50%) scale(1)';
    icon.style.opacity=0.8;
    setTimeout(()=>{
        icon.style.opacity=0;
    
    },1000)
    setTimeout(()=>{
        icon.style.transform='translate(-50%,-50%) scale(0)';
    
    },2000)
        
    
})
