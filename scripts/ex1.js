const divs = document.querySelectorAll("div")

for(let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = 'blue'; 
}

function changeColors() {
    document.querySelector("#d1").style.backgroundColor = "yellow";
    document.querySelector("#d2").style.backgroundColor = "red";
    document.querySelector("#d3").style.backgroundColor = "green";
}
