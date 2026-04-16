let btnDark = document.getElementById("btn-dark");
let starsContainer = document.getElementById("stars");
let sunrise = document.getElementById("sunrise");

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function setSunPath() {
    if (!sunrise) {
        return;
    }

    sunrise.style.setProperty("--sun-start-x", `${randomBetween(4, 14)}%`);
    sunrise.style.setProperty("--sun-start-y", `${randomBetween(68, 78)}%`);
    sunrise.style.setProperty("--sun-mid-x", `${randomBetween(24, 42)}vw`);
    sunrise.style.setProperty("--sun-mid-y", `-${randomBetween(16, 30)}vh`);
    sunrise.style.setProperty("--sun-end-x", `${randomBetween(54, 78)}vw`);
    sunrise.style.setProperty("--sun-end-y", `-${randomBetween(4, 14)}vh`);
}

function createStars(amount) {
    if (!starsContainer) {
        return;
    }

    starsContainer.innerHTML = "";

    for (let i = 0; i < amount; i += 1) {
        let star = document.createElement("span");
        let size = randomBetween(1, 3);

        star.className = "star";
        star.style.left = `${randomBetween(0, 100)}%`;
        star.style.top = `${randomBetween(0, 100)}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${randomBetween(1.8, 4)}s, ${randomBetween(8, 20)}s`;
        star.style.animationDelay = `${randomBetween(0, 2.5)}s, 0s`;
        star.style.setProperty("--drift", `${randomBetween(6, 18)}px`);

        starsContainer.appendChild(star);
    }
}
/*elemento.addEventListener("evento", function() {
    // Código a ejecutar cuando se desencadena el evento (osea acción)
});
*/ 
btnDark.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    let isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        createStars(140);
        starsContainer.classList.add("active");
    } else {
        starsContainer.classList.remove("active");
        setSunPath();
    }
});

setSunPath();