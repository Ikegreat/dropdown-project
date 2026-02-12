const parentMenu = document.querySelector("#parentMenu");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

openBtn.addEventListener("click", () => {
    parentMenu.classList.add("active");
    // openBtn.style.display = "none";
    // closeBtn.style.display= "block";
   
})
closeBtn.addEventListener("click", () => {
    parentMenu.classList.remove("active")

})