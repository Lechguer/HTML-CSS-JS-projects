

const menuToggle = document.getElementById("menu-toggle");
const sidebarLinks = document.querySelectorAll(".nav-sidebar a");
const closeBtn = document.querySelector(".close-btn");

sidebarLinks.forEach(link =>{
    link.addEventListener("click", () => {
        menuToggle.checked = false;
    })
})

closeBtn.addEventListener("click" , () =>{
    menuToggle.checked = false;
})

