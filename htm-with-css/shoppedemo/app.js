const elements = document.getElementsByClassName('.home-product-item_like');
const likes = document.getElementsByClassName('.js-like')
const unlikes = document.getElementsByClassName('.js-unlike')
// for( var i = 0; i < elements.length;i++){

//     function showHeart(){
//         element[i].classList.add('home-product-item_liked')
//     }
//     function hidenHeart(){
//         element[i].classList.remove('home-product-item_liked')
//     }
// }

// function showHeart(){
//     elements.classList.add('home-product-item_liked')
// }
// function hidenHeart(){
//     elements.classList.remove('home-product-item_liked')
// }
// like.addEventListener('click',showHeart)
// unlike.addEventListener('click',hidenHeart)
for(var i = 0;i < elements.length;i++){
    for(var j = 0;j < likes.length;j++){
        likes[j].addEventListener('click',function(){
            elements[i].classList.add('home-product-item_liked')
        })
    }
}