const parentMenu = document.querySelector("#parentMenu");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const featureHead = document.querySelector("#mobile-feature-head");
const dropDown = document.querySelector("#mobile-feature-dropdown")
const companyHead = document.querySelector("#mobile-company-header")
const companyDropdown = document.querySelector("#mobile-company-dropdown")
const featureHeadDesktop = document.querySelector("#feature-head");
const featureDropdown = document.querySelector("#feature-dropdown")
const companyHeadDesktop = document.querySelector("#company-head");
const companyDropdownDesktop = document.querySelector("#company-dropdown")
openBtn.addEventListener("click", () => {
    parentMenu.classList.add("active");
    // openBtn.style.display = "none";
    // closeBtn.style.display= "block";
   
})
closeBtn.addEventListener("click", () => {
    parentMenu.classList.remove("active")

})
featureHead.addEventListener("click", ()=> {
    dropDown.style.display = 
    dropDown.style.display === "block" ? "none" :"block";
})

companyHead.addEventListener("click", () => {
    companyDropdown.style.display = 
    companyDropdown.style.display === "block" ? "none" : "block"
}) 
featureHeadDesktop.addEventListener("click", ()=> {
    featureDropdown.style.display =
    featureDropdown.style.display === "block" ? "none" :"block"
    
})

companyHeadDesktop.addEventListener("click", () => {
    companyDropdownDesktop.style.display =
    companyDropdownDesktop.style.display === "block" ? "none" : "block"
})