document.addEventListener("DOMContentLoaded", function () {
    const profileForm = document.getElementById("profileForm");
    const profileDisplay = document.getElementById("profileDisplay");

    // Load saved profile data from localStorage
    function loadProfile() {
        const storedProfile = JSON.parse(localStorage.getItem("userProfile"));

        if (storedProfile) {
            document.getElementById("userName").value = storedProfile.name || "";
            document.getElementById("userAge").value = storedProfile.age || "";
            document.getElementById("userGender").value = storedProfile.gender || "";
            document.getElementById("healthConditions").value = storedProfile.conditions || "";

            // Display saved profile
            profileDisplay.innerHTML = `
                <p><strong>Name:</strong> ${storedProfile.name}</p>
                <p><strong>Age:</strong> ${storedProfile.age}</p>
                <p><strong>Gender:</strong> ${storedProfile.gender}</p>
                <p><strong>Health Conditions:</strong> ${storedProfile.conditions || "None"}</p>
            `;
        }
    }

    // Save profile data and redirect to health.html
    profileForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const userProfile = {
            name: document.getElementById("userName").value,
            age: document.getElementById("userAge").value,
            gender: document.getElementById("userGender").value,
            conditions: document.getElementById("healthConditions").value,
        };

        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        alert("Profile saved successfully! Redirecting to Health Q&A page.");
        window.location.href = "health.html"; // Redirect to Health Q&A page
    });

    // Load profile on page load
    loadProfile();
});
