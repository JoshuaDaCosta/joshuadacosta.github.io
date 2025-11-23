alert("Este site ainda em desenvolvimento, aguarda novas actualizações!")


window.onload = () => {
    window.scrollTo(0, 0);
  };




var navbar = document.querySelector("nav>ol>ul")
var button=document.getElementById("dropdown")
var nav=document.querySelector("header>nav")
var buttonclose=document.getElementById("dropdownx")
var navol=document.querySelector("nav>ol")

var inicio=document.querySelector("nav>ol>ul>li:nth-child(1)")
var sobre=document.querySelector("nav>ol>ul>li:nth-child(2)")
var habilidades=document.querySelector("nav>ol>ul>li:nth-child(3)")
var experiencias=document.querySelector("nav>ol>ul>li:nth-child(4)")
var projectos=document.querySelector("nav>ol>ul>li:nth-child(5)")
var contactos=document.querySelector("nav>ol>ul>li:nth-child(6)")

button.addEventListener("click", ()=>{
    navbar.style.display="flex";
    button.style.display="none"
    nav.style.flexDirection="column";
    navol.style.height="auto"
    navol.style.width="100%"

})


buttonclose.addEventListener("click", ()=>{
    navbar.style.display="none";
    button.style.display="block";
    nav.style.flexDirection="row"
    navol.style.height="auto"
    navol.style.width="auto"

})

inicio.addEventListener("click", ()=>{
    navbar.style.display="none";
    button.style.display="block";
    nav.style.flexDirection="row"
    navol.style.height="auto"
    navol.style.width="auto"

})
sobre.addEventListener("click", ()=>{
    navbar.style.display="none";
    button.style.display="block";
    nav.style.flexDirection="row"
    navol.style.height="auto"
    navol.style.width="auto"

})
habilidades.addEventListener("click", ()=>{
    navbar.style.display="none";
    button.style.display="block";
    nav.style.flexDirection="row"
    navol.style.height="auto"
    navol.style.width="auto"

})
experiencias.addEventListener("click", ()=>{
    navbar.style.display="none";
    button.style.display="block";
    nav.style.flexDirection="row"
    navol.style.height="auto"
    navol.style.width="auto"

})
projectos.addEventListener("click", ()=>{
    navbar.style.display="none";
    button.style.display="block";
    nav.style.flexDirection="row"
    navol.style.height="auto"
    navol.style.width="auto"

})
contactos.addEventListener("click", ()=>{
    navbar.style.display="none";
    button.style.display="block";
    nav.style.flexDirection="row"
    navol.style.height="auto"
    navol.style.width="auto"

})


