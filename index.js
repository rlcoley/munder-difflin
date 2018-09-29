var title = document.getElementById('name');

title.style.backgroundImage = "url("+'img/background.jpg' + ")";
// title.style.backgroundSize = "100% 100%";
// this.images.style.backgroundImage = "url(" + this.photoList[this.photoList.length-1].url + ")"

var i = 0;
var txt = 'Munder Difflin Paper Company';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100 );
  }
}

window.addEventListener('load', typeWriter)
