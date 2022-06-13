const resetButton = document.querySelector("#reset button");

function resetButtonMouseenter() {
  resetButton.style.fontWeight = "700";
}
function resetButtonMouseleave() {
  resetButton.style.fontWeight = "normal";
}
function resetButtonClick() {
  if (confirm("Are you sure you want to delete all?")) {
    localStorage.clear();
    window.location.reload();
  }
}
resetButton.addEventListener("click", resetButtonClick);
resetButton.addEventListener("mouseenter", resetButtonMouseenter);
resetButton.addEventListener("mouseleave", resetButtonMouseleave);
