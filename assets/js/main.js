$(function() {
  $("[data-toggle='tooltip']").tooltip();
});
document.querySelectorAll(".onclick-select").forEach(element => {
  element.addEventListener("click", element.select);
});
