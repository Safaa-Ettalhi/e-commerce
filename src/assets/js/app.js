const menu_icon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menu_icon.addEventListener("click", () => {
    menu.classList.toggle("active");
})

ScrollReveal({
    distnace: '0px',
    duration: 2500,
});

ScrollReveal().reveal(".hero-section", { delay: 200 });
ScrollReveal().reveal(".arrivals-section", { delay: 200 });
ScrollReveal().reveal(".categories-section", { delay: 200 });
ScrollReveal().reveal(".shoes-section", { delay: 200 });