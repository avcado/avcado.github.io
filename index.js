const mode = document.getElementById("mode");

window.onload = function(){
  document.getElementsByTagName("body")[0].onkeyup = (e) => {
    var ev = e || event;
    if(ev.keyCode == 65 || ev.keyCode == 73) {
      mode.innerHTML = "INSERT";
      mode.style.backgroundColor = "red";
    } else if(ev.keyCode == 27) {
      mode.innerHTML = "NORMAL";
      mode.style.backgroundColor = "green";
    } else if(ev.keyCode == 86){
      mode.style.backgroundColor = "blue";
      mode.innerHTML = "VISUAL";
    }
  }
};
