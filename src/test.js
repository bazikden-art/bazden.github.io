

let formData = {}
formData = {a:"text"}
console.log(formData)

let elem = document.getElementById('test')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    console.log('clicked')
    elem.scrollTo(0,0)
})

