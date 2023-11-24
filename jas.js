var btn = document.querySelector("button");
var cx = document.querySelector("div#caixa");
var mn = document.getElementById("menuabrir")
function abrirmenu(){
    cx.style.transform = "translateY(0px)";
    cx.style.opacity = "1";
    mn.style.opacity = "0"; /*
    mn.style.animationName = "ani";
    mn.style.animationDuration = " 5s";
    mn.style.animationIterationCount = "auto";
    */
}
function fecharmenu(){
    cx.style.transform = "translateY(-1500px)";
    cx.style.opacity = "0";
    mn.style.opacity = "1";
}
