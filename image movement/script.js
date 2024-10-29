const elem=document.querySelectorAll(".elem")
const img=document.querySelectorAll(".elem img")

elem.forEach(val=> {
    val.addEventListener("mouseenter",()=>{
        val.childNodes[3].style.opacity=1;
        // val.childNodes[3].style.left=val.x+"px"
        // val.childNodes[3].style.top=val.y+"px"
        // console.log("hello")
    })
    val.addEventListener("mousemove",(e)=>{
        // val.childNodes[3].style.opacity=1;
         val.childNodes[3].style.left=e.x+"px"
        val.childNodes[3].style.top=e.y+"px"
    })
    val.addEventListener("mouseleave",()=>{
        val.childNodes[3].style.opacity=0;
    })
});