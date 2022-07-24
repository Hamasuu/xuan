const content = document.getElementById('content');
var listBackground = ['#ad17b1','#7917b1','#3317b1','#00d4ff']
for( let i = 0;i <= 80; i++){
    let box = document.createElement('div')
    box.classList.add('box')
    let indexOfBackground = Math.floor(Math.random()*listBackground.length)
    box.addEventListener('mouseenter', (e) => {
        e.target.style.background = listBackground[indexOfBackground]
    })
    box.addEventListener('mouseleave', (e) => {
        setTimeout(() => {
            e.target.style.background = 'none'
        },500)
    })
    content.appendChild(box)


} 