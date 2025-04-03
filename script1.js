document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Simulating login authentication
            if (email === "test@example.com" && password === "password123") {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect after login
            } else {
                alert("Invalid email or password.");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            alert("Sign-up successful! Redirecting to login page.");
            window.location.href = "login.html"; // Redirect after successful sign-up
        });
    }

    const signupButton = document.querySelector(".signup-button");
    if (signupButton) {
        signupButton.addEventListener("click", function () {
            window.location.href = "signup.html";
        });
    }
});
