let darkMode = localStorage.getItem("darkMode");
const darkModeBtn = document.getElementById("darkModeBtn");

const enabledarkMode = () => {
  document.body.classList.add("darkMode")
  localStorage.setItem("darkMode", "active")
}
const disabledarkMode = () => {
  document.body.classList.remove("darkMode")
  localStorage.setItem("darkMode", null)
}

if(darkMode === "active") enabledarkMode()

darkModeBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode")
  darkMode !== "active" ? enabledarkMode() : disabledarkMode()
})