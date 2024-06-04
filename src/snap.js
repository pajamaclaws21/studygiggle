function snapLogin() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    cloud.login(username, password, false, (user, role, response) => {
        alert("Logged in!");
        console.log(response);
    }, (response) => {
        alert("Login failed.");
        console.log(response);
    })
}

function snapUpload() {
    let projectName = document.getElementById("projectName").value;
    let file = document.getElementById("file").files[0];

    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      const data = reader.result;
      console.log(data);
    });
    
    file = reader.readAsText(file);

    cloud.saveProject(projectName, `{'xml': '${file}'}`,
        (response) => {alert("Project Uploaded."); console.log(response);},
        (response) => {alert("Project Upload Fail."); console.log(response);}
    );
}