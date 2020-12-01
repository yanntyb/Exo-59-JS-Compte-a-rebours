let cont = document.getElementById("rebour");

let seconde = parseInt(prompt("max ?"))

let interval = window.setInterval(function (){
    cont.innerHTML = seconde.toString();
    console.log(seconde);
    cont.style.animationName = "anim";
    seconde--;
    if(seconde === -1){
        clearInterval(interval)
    };
},1000);