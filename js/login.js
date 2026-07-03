// Login Function
function login() {

    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate Username
    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    // Validate Password
    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // Password length check
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Demo login success
    alert("Login Successful!");

    // Store login status (optional)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    // Redirect to Home Page
    window.location.href = "home.html";
}