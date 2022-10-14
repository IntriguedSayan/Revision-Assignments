
const menu=document.getElementById("initHamburger")

window.addEventListener("resize",()=>{

    const width=window.innerWidth
    if(Number(width)>720){
        menu.style.display="flex"
    }else{
        menu.style.display="none"
    }

})

function openMenu(){

   
    menu.style.display==="none"?menu.style.display="flex":menu.style.display="none"

}