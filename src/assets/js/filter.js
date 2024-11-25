const filterBtn = document.getElementById("filter-btn")
const sortBtn = document.getElementById("sort-btn")
const filterArea = document.getElementById("filter-area")
const productsArea = document.getElementById("products-area")

filterBtn.addEventListener("click", () => {
    filterArea.classList.toggle("hidden")
    productsArea.classList.toggle("w-full")
    productsArea.classList.toggle("w-4/5")
    productsArea.classList.toggle("gird-cols-4")
    productsArea.classList.toggle("gird-cols-5")
    
})