document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        // Basic validation (Replace this with actual authentication logic)
        if (email.trim() !== "" && password.trim() !== "") {
            alert("Login Successful!");
            window.location.href = "profile.html"; // Redirect to health.html
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
