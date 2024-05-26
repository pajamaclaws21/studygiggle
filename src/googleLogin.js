function handleCredentialResponse(response) {
    console.log("Auth'd with Google!");
    let body = {"credential": response.credential};

    fetch("https://studygiggle.onrender.com/signIn", {
        method: "POST", 
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then((json) => { 
            if (json.currentUser) {
                console.log("Recieved object from POST to /signIn contained currentUser object.");
                console.log("Recieved this JSON:");
                console.log(json);
                alert("Signed in with Google!");
            } else {
                console.log("Returned object from POST to /signIn didn't contain currentUser object.");
                console.log("Recieved this JSON:");
                console.log(json);
                alert("Signing in with Google didn't work. Try again?");
            }
         });

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