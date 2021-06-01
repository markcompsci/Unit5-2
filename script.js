const btn = document.getElementById("press-btn")

btn.addEventListener("click", () => {
  alert("Thanks for pressing me")
})

//Extra
const colorChangingBtn = document.getElementById("color-changing-btn")
const paraToChange = document.getElementById("para-change")

colorChangingBtn.addEventListener("click", () => {
  paraToChange.style = "color: red"
})
