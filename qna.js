document.addEventListener("DOMContentLoaded", function () {
    const healthForm = document.getElementById("healthForm");

    healthForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const responses = {
            exercise: document.getElementById("exercise").value,
            sleepHours: document.getElementById("sleepHours").value,
            diet: document.getElementById("diet").value,
            stress: document.getElementById("stress").value,
            waterIntake: document.getElementById("waterIntake").value,
            fastFood: document.getElementById("fastFood").value,
            smokeAlcohol: document.getElementById("smokeAlcohol").value,
            medicalCheckup: document.getElementById("medicalCheckup").value
        };

        let advicePages = "advice.html?";
        for (const key in responses) {
            advicePages += `${key}=${responses[key]}&`;
        }
        
        window.location.href = advicePages;
    });
    saveHealthData(["I exercise daily", "I drink 2 liters of water"]);

});
