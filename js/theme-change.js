function switchMode() {
  var element = document.querySelector(".data-theme");
  var icon = document.querySelector(".mode__toggle i");
  element.classList.toggle("dark-mode");
  if (element.classList.contains("dark-mode")) {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  } else {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  }
}
