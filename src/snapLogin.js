function snapLogin() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    fetch(`https://cloud.snap.berkeley.edu/api/v1/users/${username}/login`, {
        method: "POST", 
        mode: "cors",
        body: JSON.stringify({
            password: password
        })
    }).then(res => res.json())
      .then((json) => {
        alert("Recieved response to login.");
        console.log(json);
    })
      .catch((err) => {
        alert("An error occurred logging in.");
        console.log(err[0]);
    })
}