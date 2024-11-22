ScrollReveal({
    distnace: '0px',
    duration: 2500,
});

ScrollReveal().reveal(".hero-section", { delay: 200 });
ScrollReveal().reveal(".arrivals-section", { delay: 200 });
ScrollReveal().reveal(".categories-section", { delay: 200 });
ScrollReveal().reveal(".shoes-section", { delay: 200 });

// slider images in shoes section
const slider = document.getElementById("slider");
let arrows = document.querySelectorAll(".arrows");
let firstImage = document.querySelectorAll("#slider > img")[0];
let imageWidth = firstImage.offsetWidth;

function maxScroll() {
    return slider.scrollWidth - slider.clientWidth;
}

arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        slider.scrollLeft += arrow.id == "left" ? -imageWidth : imageWidth;
        if(slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth))
            slider.scrollLeft = 0;
    })
})