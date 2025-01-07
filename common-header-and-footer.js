// JavaScript to include header and footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://mind-emulation.uk/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });
  fetch("https://mind-emulation.uk/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});
