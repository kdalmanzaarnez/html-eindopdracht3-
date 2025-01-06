document.addEventListener("DOMContentLoaded", function() {
    // link naar home page
    const homeLink = document.getElementById("home-link");
    
    // Verkrijg de home-sectie
    const homeSection = document.getElementById("home");

    // click functie toevoegen
    homeLink.addEventListener("click", function(e) {
        // voorkom herladen in pagina
        e.preventDefault();
        
        // home pagina is zichtbaar
        homeSection.classList.add("visible");

    });
});
document.addEventListener("DOMContentLoaded", function() {
    // alle afbeeldingen toevoegen in de slider
    const sliderImages = document.querySelectorAll(".slider img");
    let currentImageIndex = 0;

    // afbeeldingen verbergen
    function hideImages() {
        sliderImages.forEach(image => {
            image.style.display = "none";
        });
    }

    // afbeelding weergeven
    function showImage(index) {
        sliderImages[index].style.display = "block";
    }

    // slider starten
    hideImages();
    showImage(currentImageIndex);

    // elke 3 sec nieuwe afbeelding
    setInterval(function() {
        hideImages(); // huidige afbeelding verbergen
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length; // Verhoog de index
        showImage(currentImageIndex); // Tonben van nieuwe afbeelding
    }, 3000); // elke 3 seconden veranderen
});
//eventlistener  voor de submit van het formulier
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // voorkomen van herladen

    // gegevens opslaan
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // object met de gegevens
    const formData = {
        name: name,
        email: email,
        message: message
    };
});

