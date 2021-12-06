var card = document.getElementsByClassName("produto")
let products = [...card]
console.log(products)
products.map(item => {
    item.addEventListener("mouseover", () => {
        item.childNodes[3].style.display = "flex";
        
    })
    item.addEventListener("mouseleave", () => {
        item.childNodes[3].style.display = "none"
    })
})