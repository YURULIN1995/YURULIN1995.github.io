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
