function snapLogin() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    cloud.login(username, password, false, (user, role, response) => {
        alert("Logged in!");
        console.log(user);
        console.log(role);
        console.log(response);
    }, (response) => {
        alert("Login failed.");
        console.log(response);
    })
}

function snapUpload() {
    let username = cloud.getCurrentUser((response) => {return response}), (response) => {
        alert("Username Failed!");
        break
    });

    let projectName = document.getElementById("projectName").value;
    let file = document.getElementById("file").files[0];

    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      const data = reader.result;
      console.log(data);
    });
    
    file = reader.readAsText(file);

    console.log(file);

    fetch(`https://cloud.snap.berkeley.edu/api/v1/projects/${username}/${projectName}`, {
        method: "POST", 
        mode: "cors",
        body: JSON.stringify({
            xml: file,
            notes: 'Uploaded from Studygiggle.'
        })
    }).then(res => res.json())
      .then((json) => {
        console.log(json);
    })
      .catch((err) => {
        console.log(err);
    })
}