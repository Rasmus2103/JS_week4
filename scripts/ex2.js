document.getElementById("outer").addEventListener("click", (event) => {
    const id = event.target.id;
    document.getElementById("output").innerHTML = id;
})  