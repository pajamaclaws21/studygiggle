function snapUpload() {
    let username = document.getElementById("username").value;
    let projectName = document.getElementById("projectName").value;
    let file = document.getElementById("file").files[0];

    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      const data = reader.result;
      console.log(data);
    });
    
    file = reader.readAsText(file);

    console.log(file);

    fetch(`https://cloud.snap.berkeley.edu/projects/${username}/${projectName}`, {
        method: "POST", 
        mode: "cors",
        body: JSON.stringify({
            xml: file,
            notes: 'Uploaded from Studygiggle.'
        })
    }).then(res => res.json())
      .then((json) => {
        alert("Success!");
        console.log(json);
    })
      .catch((err) => {
        alert("Error");
        console.log(err);
    })
}