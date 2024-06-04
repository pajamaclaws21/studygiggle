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
    let body = {'thumbnail': "...", "media": "...", "notes": "Uploaded by Studygiggle."}; // What should 'media' value be?

    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      const data = reader.result;
      body['xml'] = data;
  
      cloud.saveProject(projectName, body,
          (response) => {alert("Project Uploaded."); console.log(response);},
          (response) => {alert("Project Upload Fail."); console.log(response);}
      );
    });
    
    reader.readAsText(file);
}