var header = document.querySelector('header');
var content = document.querySelector('header + .content');
var stickyOffset = header.offsetTop;

function showText(text) {
  var elem = document.getElementById('showText');
  elem.innerText = text;
}

showText('header offsetTop = ' + stickyOffset + ', pageYOffset = ' + window.pageYOffset);  
window.onscroll = function () {
    showText('header offsetTop = ' + stickyOffset + ', pageYOffset = ' + window.pageYOffset);
  };

// JavaScript to include header and footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
                });
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
                });
        });
