const istatus=document.querySelector("h5")
const btn=document.querySelector("#add")

let check=0;
btn.addEventListener("click",()=>{
    if(check==0){
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        btn.innerHTML="Remove Friend";
        btn.style.backgroundColor="red";
        check=1;
    }
    else{
        istatus.innerHTML="Strangers";
        istatus.style.color="red";
        btn.innerHTML="Add Friend";
        btn.style.backgroundColor="rgb(122, 182, 122)";
        check=0;
    }
})