let code = document.getElementById("code")
let btn = document.getElementById("Colorbtn")

function getRandomcolor(){
   let randomNum = Math.floor(Math.random()*16777215)
   let randomCode = "#"+randomNum.toString(16)
    document.body.style.backgroundColor = randomCode
    code.innerText = randomCode
}

btn.addEventListener("click",()=>{
    getRandomcolor()
})