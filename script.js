let cont = document.getElementById("rebour");

function timer(seconde){
    for(let i = 0;i<seconde;i++){
        cont.innerHTML = i.toString()
    }
}

timer(prompt("nombre"))
