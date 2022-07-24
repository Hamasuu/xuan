const action = document.querySelector(".home-product-item_like")
var like = document.querySelector(".home-product-item_like-icon-empty")
var unlike = document.querySelector(".home-product-item_like-icon")


like.addEventListener('click',function() {
    action.classList.add("home-product-item_liked")
    })

unlike.addEventListener('click',function() {
    action.classList.remove("home-product-item_liked")
})


