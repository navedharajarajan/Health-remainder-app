// Function to Save Routine Data
function saveRoutineData(routine) {
    localStorage.setItem("userRoutine", JSON.stringify(routine));
}

// Function to Load Routine Report
function loadRoutineReport() {
    try {
        const routineData = localStorage.getItem("userRoutine");
        if (routineData) {
            const routine = JSON.parse(routineData);
            document.getElementById("routineReport").innerHTML = `
                <p><strong>Wake-up Time:</strong> ${routine.wakeTime || "Not Set"}</p>
                <p><strong>Water Intake:</strong> Every ${routine.waterIntake || "Not Set"} hour(s)</p>
                <p><strong>Meditation:</strong> ${routine.meditation || "Not Set"} mins</p>
                <p><strong>Breakfast Time:</strong> ${routine.breakfastTime || "Not Set"}</p>
                <p><strong>Lunch Time:</strong> ${routine.lunchTime || "Not Set"}</p>
                <p><strong>Dinner Time:</strong> ${routine.dinnerTime || "Not Set"}</p>
                <p><strong>Sleep Time:</strong> ${routine.sleepTime || "Not Set"}</p>
            `;
        }
    } catch (error) {
        console.error("Error loading routine report:", error);
    }
}

// Function to Save Medicine Data
function saveMedicineData(medicine) {
    let medicineList = JSON.parse(localStorage.getItem("medicineReminders")) || [];
    medicineList.push(medicine);
    localStorage.setItem("medicineReminders", JSON.stringify(medicineList));
}

// Function to Load Medicine Report
function loadMedicineReport() {
    try {
        const medicineData = localStorage.getItem("medicineReminders");
        if (medicineData) {
            const medicineReminders = JSON.parse(medicineData);
            let report = medicineReminders.length
                ? medicineReminders.map(med => `<li><strong>${med.name || "Unknown"}</strong> at ${med.time || "Unknown"}</li>`).join("")
                : "No medicine data available.";
            document.getElementById("medicineReport").innerHTML = `<ul>${report}</ul>`;
        }
    } catch (error) {
        console.error("Error loading medicine report:", error);
    }
}

// Function to Save Health Data
function saveHealthData(answers) {
    localStorage.setItem("healthAnswers", JSON.stringify(answers));
}

// Function to Load Health Insights
function loadHealthInsights() {
    try {
        const healthData = localStorage.getItem("healthAnswers");
        if (healthData) {
            const healthAnswers = JSON.parse(healthData);
            let insights = healthAnswers.length
                ? healthAnswers.map(answer => `<li>${answer}</li>`).join("")
                : "No health Q&A data available.";
            document.getElementById("healthInsights").innerHTML = `<ul>${insights}</ul>`;
        }
    } catch (error) {
        console.error("Error loading health insights:", error);
    }
}

// Function to Clear All Reports Data
function clearReports() {
    localStorage.clear();
    alert("All report data has been cleared!");
    window.location.reload();
}

// Load Data on Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadRoutineReport();
    loadMedicineReport();
    loadHealthInsights();
    document.getElementById("clearReports").addEventListener("click", clearReports);
});
