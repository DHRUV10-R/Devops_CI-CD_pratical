// Register Function
function register() {

    // Get form values
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check empty fields
    if (
        fullName === "" ||
        email === "" ||
        username === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Username length
    if (username.length < 4) {
        alert("Username must be at least 4 characters.");
        return;
    }

    // Password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Store user data (Demo Only)
    const user = {
        fullName,
        email,
        username,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    // Redirect to Login
    window.location.href = "index.html";
}