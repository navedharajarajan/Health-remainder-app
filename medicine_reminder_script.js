document.addEventListener("DOMContentLoaded", function () {
    displayMedicines();
});

function requestNotificationPermission() {
    if (Notification.permission === "default") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                alert("Notifications enabled!");
            }
        });
    }
}

function scheduleMedicineNotification(time, medicine) {
    const now = new Date();
    const notificationTime = new Date(now.toDateString() + " " + time);
    
    if (notificationTime > now) {
        const delay = notificationTime - now;
        setTimeout(() => {
            new Notification("Medicine Reminder", { body: `Time to take ${medicine}` });
        }, delay);
    }
}

document.getElementById("medicineForm").addEventListener("submit", function(event) {
    event.preventDefault();
    requestNotificationPermission();
    
    const medicineName = document.getElementById("medicineName").value;
    const medicineTime = document.getElementById("medicineTime").value;
    const dosage = document.getElementById("dosage").value;
    
    const medicine = { name: medicineName, dosage: dosage, time: medicineTime };
    let medicines = JSON.parse(localStorage.getItem("medicines")) || [];
    medicines.push(medicine);
    localStorage.setItem("medicines", JSON.stringify(medicines));
    
    displayMedicines();
    scheduleMedicineNotification(medicineTime, medicineName);
    alert("Medicine saved successfully!");
});

function displayMedicines() {
    const medicines = JSON.parse(localStorage.getItem("medicines")) || [];
    const medicineList = document.getElementById("medicineList");
    medicineList.innerHTML = "";
    medicines.forEach((medicine, index) => {
        medicineList.innerHTML += `<li><strong>${medicine.name}</strong> - ${medicine.dosage} at ${medicine.time} <button onclick="deleteMedicine(${index})">Delete</button></li>`;
    });
}

function deleteMedicine(index) {
    let medicines = JSON.parse(localStorage.getItem("medicines")) || [];
    medicines.splice(index, 1);
    localStorage.setItem("medicines", JSON.stringify(medicines));
    displayMedicines();
}
