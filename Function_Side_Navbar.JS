const bars=document.querySelector(".fa-bars");
const navbar=document.querySelector(".move_2");
bars.addEventListener("click",(btn)=>{
bars.classList.toggle("move");
navbar.classList.toggle("side_navbar");
})