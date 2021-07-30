// Change modes
const mode = document.getElementById("mode");
let spanTest = document.getElementById("input-text");
let spanDiv = document.getElementById("type");
let currentMode = "NORMAL";

console.log(spanDiv.style)

// Change modes + be able to type in a span
window.onload = function(){
  document.getElementsByTagName("body")[0].onkeyup = (e) => {
    var ev = e || event;
    //alert(ev.keyCode);

    if(currentMode == "VISUAL") {} else {
      if(ev.keyCode == 65 || ev.keyCode == 73) {
        mode.innerHTML = "INSERT";
        mode.style.backgroundColor = "red";
        currentMode = "INSERT";
        spanTest.contentEditable = true;
        // Make the nav VISIBLE once we enter insert mode
        let spanDiv2 = document.getElementById("type");
        spanDiv2.style.visibility = "visible";

        //  Make it visible where we can type
        let spanDiv = document.getElementById("type");
        spanDiv.style.backgroundColor = "#2a2b2a";

        /// Add padding so it doesn't look TOO ugly
        let spanWrapperDiv = document.getElementById("type-wrapper");
        spanWrapperDiv.style.paddingLeft = "450px";
        spanWrapperDiv.style.paddingRight = "450px";
      }
    }

    // Normal mode (normal)
    if(ev.keyCode == 27) {
      mode.innerHTML = "NORMAL";
      mode.style.backgroundColor = "green";
      currentMode = "NORMAL";
      spanTest.contentEditable = false;

      // Hide div
      let s2 = document.getElementById("type");
      s2.style.visibility = "hidden";

      // Set type div to normal colorscheme
      let spanDiv = document.getElementById("type");
      spanDiv.style.backgroundColor = "";
    }

    // Special logic for visual mode
    if(currentMode == "NORMAL" && (currentMode != "INSERT")){
      if(ev.keyCode == 86){
        mode.style.backgroundColor = "blue";
        mode.innerHTML = "VISUAL";
        currentMode = "VISUAL";
        spanTest.contentEditable = false;
      }
    }
  }
};
