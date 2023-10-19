const $footer = document.querySelector(".share"),
$btnShare = document.querySelector(".author__share"),
$shr = document.querySelector("#shr");
document.addEventListener("click", e =>{
    if(e.target == $btnShare){
        $footer.style.display = 'block';
        $shr.style.color = 'white';
        $btnShare.style.backgroundColor = 'hsl(212, 23%, 69%)';
    }
})