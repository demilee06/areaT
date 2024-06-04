let base = document.querySelector('#base')
let height = document.querySelector('#height')
let button = document.querySelector('button')
let span = document.querySelector('#triSpan')

button.addEventListener('click',()=>{
    span.innerHTML = [(0.5 *base.value * height.value)]
})