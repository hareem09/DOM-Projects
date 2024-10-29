let page=document.querySelector("body");
let btns=document.querySelectorAll(".button");
btns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.id==='grey')
        {
            page.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='blue')
        {
            page.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='white'){
            page.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='yellow'){
            page.style.backgroundColor=e.target.id;
        }
    });
});
// console.log(btn);
// btn.addEventListener("click" , function(e){
//     console.log(e.target.id);
//     page.style.backgroundColor="grey";
// })
// console.log(page);