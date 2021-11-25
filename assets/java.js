var dropzone = document.querySelector(".dropzone")
dropzone.addEventListener("dragover",(e) => {
    e.preventDefault()
})
var colors = document.querySelectorAll(".color")
colors.forEach(color => {
    color.addEventListener("dragstart", (e) => {
        circlecolor = color.getAttribute("data-id")
    })
})
dropzone.addEventListener("drop",(e) => {
    dropzone.style.backgroundColor = circlecolor
})
