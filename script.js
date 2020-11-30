let cont = document.getElementById("rebour");

let seconde = 1

window.setInterval(function (){
    cont.innerHTML = seconde.toString();
    console.log(seconde);
    cont.style.animationName = "anim"
    seconde++
},1000);