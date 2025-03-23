function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

document.addEventListener("DOMContentLoaded", function() {
    // Stelle sicher, dass der Text in allen Boxen zu Beginn verborgen ist
    const textBoxes = document.querySelectorAll(".hidden");
    textBoxes.forEach(textBox => {
        textBox.style.display = "none"; // Text verstecken
    });

    // Stelle sicher, dass der Text in der Box mit der ID "text-2" zu Beginn verborgen ist
    let textBox2 = document.getElementById("text-2");
    if (textBox2) {
        textBox2.style.display = "none";
    }

    // Alle Buttons mit der Klasse "toggleButton" holen
    const buttons = document.querySelectorAll(".toggleButton");

    // Event Listener für jeden Button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const boxId = button.getAttribute("data-id");
            const textBox = document.getElementById(`text-${boxId}`);
            const title = document.getElementById(`title${boxId ? boxId : ''}`);
            const icon = document.getElementById(`icon${boxId ? boxId : ''}`);
            
            // Wenn der Text noch verborgen ist, ihn einblenden
            if (textBox.style.display === "none" || textBox.style.display === "") {
                textBox.style.display = "block";
                button.innerHTML = "minimieren"; // Button Text ändern
                title.style.transform = "translateY(20px)"; // Überschrift nach unten verschieben
                icon.style.display = "none"; // Das Icon für diesen Button ausblenden
            } else {
                // Text ausblenden und Button Text zurücksetzen
                textBox.style.display = "none";
                button.innerHTML = "Mehr Erfahren"; // Button Text zurücksetzen
                title.style.transform = "translateY(0)"; // Überschrift wieder nach oben verschieben
                icon.style.display = "inline-block"; // Das Icon für diesen Button wieder einblenden
            }
        });
    });
});
