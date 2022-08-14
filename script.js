var acc = document.getElementsByClassName("acordeon");
var box = document.getElementsByClassName("picture-box");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.style.fontWeight = "400";
      this.style.content.webkitTransform = 'rotate(180deg)';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.style.fontWeight = "700";
      this.style.content.webkitTransform = 'rotate(180deg)';
    } 
  });
}