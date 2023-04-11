const titleEl = document.getElementById("title")
console.log(titleEl.textContent)

titleEl.style.color = "red"
titleEl.style.backgroundColor = "purple"

const h2Title = document.createElement("h2")
h2Title.innerText  = "đây là h2"
console.log(h2Title)
h2Title.style.color = "yellow"
document.body.appendChild(h2Title)

const button = document.querySelector("#btn-change")
console.log(button)

button.addEventListener("click", chaneColor)
function chaneColor () {
    console.log("Change color")
    titleEl.style.color = "yellow"
    console.log(window.location)
}

