//your JS code here. If required.


// Check if there are saved details
    let savedUsername = localStorage.getItem("username");
  
    if (savedUsername) {
      // Show the "Login as existing user" button
      let existingButton = document.createElement("button");
      existingButton.id = "existing";
      existingButton.textContent = "Login as existing user";
      document.body.appendChild(existingButton);
  
      // Add click event listener to the "Login as existing user" button
      existingButton.addEventListener("click", function() {
        alert("Logged in as " + savedUsername);
      });
    }
  
    // Add submit event listener to the form
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let checkbox = document.getElementById("checkbox").checked;
  
      if (checkbox) {
        // Save username to local storage
        localStorage.setItem("username", username);
      } else {
        // Clear username from local storage
        localStorage.removeItem("username");
      }
  
      alert("Logged in as " + username);
    });