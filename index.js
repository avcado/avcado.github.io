// Change modes
const mode = document.getElementById("mode");
let spanTest = document.getElementById("input-text");
let currentMode = "NORMAL";

// Change modes + be able to type in a span
window.onload = function(){
  document.getElementsByTagName("body")[0].onkeyup = (e) => {
    var ev = e || event;
    if(ev.keyCode == 65 || ev.keyCode == 73) {
      mode.innerHTML = "INSERT";
      mode.style.backgroundColor = "red";
      currentMode = "INSERT";
      spanTest.contentEditable = true;
    } else if(ev.keyCode == 27) {
      mode.innerHTML = "NORMAL";
      mode.style.backgroundColor = "green";
      currentMode = "NORMAL";
      spanTest.contentEditable = false;
    } else if(ev.keyCode == 86){
      mode.style.backgroundColor = "blue";
      mode.innerHTML = "VISUAL";
      currentMode = "VISUAL";
      spanTest.contentEditable = false;
    }
  }
};
