const dates=document.querySelector(".clock");

setInterval(()=>{
    const d=new Date();  
    const hr=d.getHours();
if(hr>=12)
{
    console.log("pm")
    dates.innerHTML=`<span>${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}PM</span>`;
}
else{
    console.log("am");
    dates.innerHTML=`<span>${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}AM</span>`;
    
}

},1000)
