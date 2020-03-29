const btnmenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btnmenu.onclick = function(){
    menu.classList.toggle("mostrar");
}