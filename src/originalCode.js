function sleep(ms){
    var timer;
    timer = setInterval(function(){
      console.log("Slept");
      clearInterval(timer);
    }, ms)
  }
  window.addEventListener('message', function (e) {
    if (e.data.selector == "getVar") {
      console.log(`Drive ID: ${e.data.response}`);
      let base = `https://studygiggle.onrender.com/contentAt/${e.data.response}`;
      
      fetch(base)
        .then(res => res.text())
        .then((text) => {
          console.log("Project loaded from Google Drive!");
          runApi('loadProjectXML', [text]);
          document.getElementById("Part2").hidden = true;
          document.getElementById("helper").hidden = true;
          document.getElementById("viewer").style = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;";
        })
    }
  }, false);
  
  function runApi(sel, par) {
    document.getElementById('viewer').contentWindow.postMessage(
      { selector: sel, params: par },
      '*'
    );
  }
  
  function loadProject() {
    let data = "Username=" + document.getElementById('user').value + "&ProjectName=" + encodeURIComponent(document.getElementById('proj').value);
    let tags = "&noExitWarning&noRun";
    let mySRC = "https://snap.berkeley.edu/snap.html#present:" + data + tags;
    document.getElementById('viewer').src = mySRC;
    document.getElementById("user").hidden = true;
    document.getElementById("proj").hidden = true;
    document.getElementById("Part1").hidden = true;
    document.getElementById("Part2").hidden = false;
    document.getElementById("helper").innerText = "Wait to press the button until you can see the project!";
  }