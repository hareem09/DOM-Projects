const password=document.querySelector("#password");
const hidden=document.querySelector("#hidden");
hidden.addEventListener("click",()=>{

   if(password.type=="password")
   {
    password.type="text";
    hidden.className="fa-solid fa-eye";
   }
   else{
    password.type="password";
    hidden.className="fa-regular fa-eye-slash";
   }
})


