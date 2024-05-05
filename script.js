let rayan = document.querySelector(".rayan")
let scoreHTML = document.querySelector(".score")



let score = 0

rayan.addEventListener("click", function(){
    score = score + 1
    scoreHTML.innerHTML = score
    
})
