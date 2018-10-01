var title = document.getElementById('name');

// Type effect, eacbh letter in txt appears one at a time

title.style.backgroundImage = "url("+'img/background.jpg' + ")";
// this.images.style.backgroundImage = "url(" + this.photoList[this.photoList.length-1].url + ")"

var i = 0;
var txt = 'Munder Difflin Paper Company';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("munderdifflin").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100 );
  }
}

window.addEventListener('load', typeWriter)
