window.onscroll = function() {header_stick()};
var header = document.querySelector(".header");

var sticky = header.offsetTop;

function header_stick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}