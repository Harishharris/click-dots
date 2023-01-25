const points = []

const backButton = document.createElement("button")
const forwardButton = document.createElement("button")
backButton.style.height = "30px"
backButton.style.width = "80px"
backButton.style.zIndex = 9999
backButton.innerText = "Back"
forwardButton.style.height = "30px"
forwardButton.style.width = "80px"
forwardButton.innerText = "Front"
forwardButton.style.zIndex = 9999

document.body.appendChild(backButton)
document.body.appendChild(forwardButton)

backButton.onclick = () => {
  points.pop()
  renderToDOM()
  console.log("back")
  console.log(points)
}

const renderToDOM = () => {
  points.forEach(point => {
    const clickedPlace = document.createElement("div")
    clickedPlace.style.backgroundColor = "blue"
    clickedPlace.style.width = "20px"
    clickedPlace.style.height = "20px"
    clickedPlace.style.borderRadius = "50%"
    clickedPlace.style.position = "absolute"
    document.body.appendChild(clickedPlace)
    clickedPlace.style.marginLeft = point.x - 18 + "px"
    clickedPlace.style.marginTop = point.y - 48 + "px"
  })
}

document.addEventListener("click", e => {
  points.push({ x: e.clientX, y: e.clientY })
  renderToDOM()
})

localStorage.setItem("name", "Harish")
console.log(this)

document.addEventListener("mousedown", e => {
  console.log(e)
  console.log(e.clientX, e.clientY)
})
