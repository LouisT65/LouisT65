function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Verhindert das Standard-Formularverhalten

    let formData = new FormData(this);
    let button = document.getElementById("submit-btn");
    let successLabel = document.getElementById("successLabel");

    // Button ausblenden
    button.style.display = "none";

    try {
        let response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        let result = await response.json();

        if (result.success) {
            successLabel.style.display = "block"; // Erfolgsmeldung anzeigen
            this.reset(); // Formular zurücksetzen
        } else {    
            button.style.display = "block"; // Falls Fehler, Button wieder einblenden
        }
    } catch (error) {
        console.error("Fehler:", error);
        button.style.display = "block"; // Falls Fehler, Button wieder einblenden
    }
});

function dataProtection() {
    const submitBtn = document.getElementById("submit-btn");
    const checkbox = document.getElementById("datenschutz");

    if (!checkbox.checked) {
        submitBtn.style.backgroundColor = "grey";
        submitBtn.disabled = true; 
    } else {
        submitBtn.style.backgroundColor = "#007bff";
        submitBtn.disabled = false; 
    }
}

document.getElementById("datenschutz").addEventListener("change", dataProtection);

window.onload = dataProtection;

