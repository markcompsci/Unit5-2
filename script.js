const btn = document.getElementById("pressBtn")

btn.addEventListener("click", () => {
  alert("Thanks for pressing me")
})

//Extra
const colorChangingBtn = document.getElementById("colorChangingBtn")
const paraToChange = document.getElementById("paraChange")

colorChangingBtn.addEventListener("click", () => {
  paraToChange.style = "color: red"
})
