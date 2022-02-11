for(var i=0;i<document.querySelectorAll(".card").length;i++){
    document.querySelectorAll(".card")[i].addEventListener("mouseover",hoverEffect)
    document.querySelectorAll(".card")[i].addEventListener("mouseleave",hoverEffectRemoval)
}
for(var i=0;i<document.querySelectorAll(".section2 img").length;i++){
    document.querySelectorAll(".section2 img")[i].addEventListener("mouseover",imgHoverEffect)
    document.querySelectorAll(".section2 img")[i].addEventListener("mouseleave",imgHoverEffectRemoval)
}


function hoverEffect(){
    this.classList.add("shadow-sm")
}
function hoverEffectRemoval(){
    this.classList.remove("shadow-sm");
}

function imgHoverEffect(){
    this.classList.add("hoverZoom");
}
function imgHoverEffectRemoval(){
    this.classList.remove("hoverZoom");
}