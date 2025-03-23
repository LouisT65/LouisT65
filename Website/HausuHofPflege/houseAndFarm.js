function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function apartmentsAndHouseFunc() {
    const button = document.querySelector('.button-clearingOut');
    let description = document.querySelector('.apartments-description');

    if (!description) {
        description.style.display = 'flex';
        button.textContent = 'weniger anzeigen';
        return;
    }

    // Ein- oder Ausblenden der Beschreibung
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'flex';
        setTimeout(() => {
            description.classList.add("show");
        }, 10);
        button.textContent = 'weniger anzeigen';
    } else {
        description.classList.add("hide");
        setTimeout(() => {
            description.classList.remove("show", "hide");
            description.style.display = 'none';
        }, 500);
        button.textContent = 'mehr erfahren';
    }
}

function bulkyWasteAndTransportFunc() {
    const button = document.querySelector('.bulkyWasteAndTransport-button');
    let description = document.querySelector('.bulkyWasteAndTransport-description');

    if (!description) {
        description.style.display = 'flex';
        button.textContent = 'weniger anzeigen';
        return;
    }

    // Ein- oder Ausblenden der Beschreibung
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'flex';
        setTimeout(() => {
            description.classList.add("show");
        }, 10);
        button.textContent = 'weniger anzeigen';
    } else {
        description.classList.add("hide");
        setTimeout(() => {
            description.classList.remove("show", "hide");
            description.style.display = 'none';
        }, 500);
        button.textContent = 'mehr erfahren';
    }
}

function bauUndRenovierungsabfaelleFunc() {
    const button = document.querySelector('.bauUndRenovierungsabfaelle-button');
    let description = document.querySelector('.bauUndRenovierungsabfaelle-description');

    if (!description) {
        description.style.display = 'flex';
        button.textContent = 'weniger anzeigen';
        return;
    }

    // Ein- oder Ausblenden der Beschreibung
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'flex';
        setTimeout(() => {
            description.classList.add("show");
        }, 10);
        button.textContent = 'weniger anzeigen';
    } else {
        description.classList.add("hide");
        setTimeout(() => {
            description.classList.remove("show", "hide");
            description.style.display = 'none';
        }, 500);
        button.textContent = 'mehr erfahren';
    }
}

function bodenbelaegeFunc(){
    const button = document.querySelector('.bodenbelaege-button');
    let description = document.querySelector('.bodenbelaege-description');

    if (!description) {
        description.style.display = 'flex';
        button.textContent = 'weniger anzeigen';
        return;
    }

    // Ein- oder Ausblenden der Beschreibung
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'flex';
        setTimeout(() => {
            description.classList.add("show");
        }, 10);
        button.textContent = 'weniger anzeigen';
    } else {
        description.classList.add("hide");
        setTimeout(() => {
            description.classList.remove("show", "hide");
            description.style.display = 'none';
        }, 500);
        button.textContent = 'mehr erfahren';
    }
}

function elektrokleinstgeraeteFunc(){
    const button = document.querySelector('.elektrokleinstgeraete-button');
    let description = document.querySelector('.elektrokleinstgeraete-description');

    if (!description) {
        description.style.display = 'flex';
        button.textContent = 'weniger anzeigen';
        return;
    }

    // Ein- oder Ausblenden der Beschreibung
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'flex';
        setTimeout(() => {
            description.classList.add("show");
        }, 10);
        button.textContent = 'weniger anzeigen';
    } else {
        description.classList.add("hide");
        setTimeout(() => {
            description.classList.remove("show", "hide");
            description.style.display = 'none';
        }, 500);
        button.textContent = 'mehr erfahren';
    }
}

function dachrinnenReinigenFunc(){
    const button = document.querySelector('.dachrinnen-reinigen-button');
    let description = document.querySelector('.dachrinnen-reinigen-description');

    if (!description) {
        description.style.display = 'flex';
        button.textContent = 'weniger anzeigen';
        return;
    }

    // Ein- oder Ausblenden der Beschreibung
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'flex';
        setTimeout(() => {
            description.classList.add("show");
        }, 10);
        button.textContent = 'weniger anzeigen';
    } else {
        description.classList.add("hide");
        setTimeout(() => {
            description.classList.remove("show", "hide");
            description.style.display = 'none';
        }, 500);
        button.textContent = 'mehr erfahren';
    }
}