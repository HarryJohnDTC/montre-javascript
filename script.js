function clock() {
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
    
    // Actualiser les chiffres autour du cercle à chaque seconde
    addNumbers();
}

// Fonction pour ajouter les chiffres autour du cercle
function addNumbers() {
    const cercle = document.getElementById("cercle");
    const numberOfNumbers = 12; // 12 chiffres autour du cercle
    
    const radius = cercle.offsetHeight / 2 - 20; // Rayon dynamique ajusté à la taille du cercle

    // Supprimer les anciens chiffres avant de rajouter les nouveaux
    const existingNumbers = document.querySelectorAll('.number');
    existingNumbers.forEach(num => num.remove());

    // Pour chaque chiffre de 1 à 12
    for (let i = 1; i <= numberOfNumbers; i++) {
        const numberElement = document.createElement("div");
        numberElement.classList.add("number");
        numberElement.textContent = i;

        // Calcul de l'angle pour chaque chiffre
        const angle = 360 / numberOfNumbers * i - 90; // Répartition des chiffres autour du cercle, début à -90°

        // Calcul du positionnement du chiffre avec une rotation et une translation
        numberElement.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;

        // Ajouter chaque chiffre au cercle
        cercle.appendChild(numberElement);
    }
}

// Appeler la fonction pour ajouter les chiffres une première fois
addNumbers();

// Actualiser l'heure et les chiffres toutes les secondes
setInterval(clock, 1000);
