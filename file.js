
// ----------------toggle nav----------------

let navToggler =document.querySelector(".nav-toggler");
navToggler.addEventListener("click", togglNav);
function togglNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open")
}

// -----------close nav when cliking on anav item
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        togglNav();
    }
});

// -------------------sticky header-------------
window.addEventListener("scroll", function(){
    if(this.pageYOffset >60){
    document.querySelector(".header").classList.add("sticky")
    }
    else{
        document.querySelector(".header").classList.remove("sticky")
    }
})
// -----------------menu tabls----------------------

let menuTabs=document.querySelector(".menu-tabs");
menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        let target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        let menuSection= document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active")
    }
})
