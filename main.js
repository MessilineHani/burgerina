const barsButton = document.getElementById("bars-button");
let mainContainer = document.querySelector(".main-container");
barsButton.onclick = () =>{
    mainContainer.classList.add("show-menu");
}