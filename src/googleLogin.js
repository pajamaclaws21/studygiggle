function handleCredentialResponse(response) {
    console.log("Auth'd with Google!");
    let body = {"credential": response.credential};

    fetch("https://studygiggle.onrender.com/authenticate", 
        {method: "POST", body: body}).then((res) => { console.log(res.text()) });

}
  
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "1014931195338-bua4bsrlvspg0ta1mpe1ht3efh5k8b98.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
    );
    
    google.accounts.id.prompt(); // also display the One Tap dialog
}