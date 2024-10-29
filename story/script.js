const arr=[ 
    {dp:"https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=600",
        story:"https://images.pexels.com/photos/7956666/pexels-photo-7956666.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {dp:"https://images.pexels.com/photos/28721522/pexels-photo-28721522/free-photo-of-woman-in-white-hijab-in-serene-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            story:"https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=600"},
            {dp:"https://images.pexels.com/photos/3696665/pexels-photo-3696665.jpeg?auto=compress&cs=tinysrgb&w=600",
                story:"https://images.pexels.com/photos/1526049/pexels-photo-1526049.jpeg?auto=compress&cs=tinysrgb&w=600"},
                {dp:"https://images.pexels.com/photos/4218697/pexels-photo-4218697.jpeg?auto=compress&cs=tinysrgb&w=600",
                    story:"https://images.pexels.com/photos/3150555/pexels-photo-3150555.jpeg?auto=compress&cs=tinysrgb&w=600"},
                    {dp:"https://images.pexels.com/photos/3928917/pexels-photo-3928917.jpeg?auto=compress&cs=tinysrgb&w=600",
                        story:"https://images.pexels.com/photos/29079520/pexels-photo-29079520/free-photo-of-antique-calligraphy-pen-on-arabic-script-document.jpeg?auto=compress&cs=tinysrgb&w=600"},    
];
let clutter="";
arr.forEach(function(elem,idx){
   clutter+=` <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})
const stories=document.querySelector("#stories");
stories.innerHTML=clutter;

const fScreen=document.querySelector("#full-screen")
stories.addEventListener("click",(e)=>{
   fScreen.style.display="block";
   fScreen.style.backgroundImage= `url(${arr[e.target.id].story})`

   setTimeout(()=>{
    fScreen.style.display="none";
   },5000)
})
