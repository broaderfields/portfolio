// Selecteer de relevante elementen
const buttons = document.querySelectorAll('.widget-option');
const slides = document.querySelectorAll('.project-slide');
let currentIndex = 0;  // Hou bij welk project momenteel zichtbaar is

function scrollToSlide(index) {
    const activeSlides = Array.from(slides).filter(slide => slide.classList.contains('active'));
    if (activeSlides.length > 0) {
        // Zorg ervoor dat de scroll alleen binnen de slider plaatsvindt
        const targetSlide = activeSlides[index % activeSlides.length];

        // Scroll naar de gewenste slide binnen de slider zonder de pagina te beïnvloeden
        targetSlide.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest', // Zorgt ervoor dat de slide goed gepositioneerd wordt zonder te scrollen
            inline: 'start'   // Zorgt ervoor dat de slide aan het begin van de container komt
        });
    }
}

// Functie voor het toepassen van filters
function applyFilter(filter) {
    // Verwijder de 'selected' klasse van alle knoppen
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Voeg de 'selected' klasse toe aan de geklikte knop
    const selectedButton = document.querySelector(`.widget-option[data-filter="${filter}"]`);
    selectedButton.classList.add('selected');

    // Pas de zichtbare slides aan op basis van het filter
    slides.forEach(slide => {
        const category = slide.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            slide.classList.add('active');  // Toon de slide
            slide.style.display = 'flex';   // Zorg ervoor dat de slide zichtbaar is
        } else {
            slide.classList.remove('active');  // Verberg de slide
            slide.style.display = 'none';      // Verberg de slide
        }
    });

    // Scroll alleen naar de eerste zichtbare slide nadat het filter is toegepast
    scrollToSlide(0);
}

// Functie voor het instellen van de projecten bij het laden
function setInitialProjects() {
    // Zorg ervoor dat we beginnen vanaf de bovenkant van de pagina als we de pagina herladen
    if (window.scrollY === 0) {
        window.scrollTo(0, 0);
    }

    // Standaard filter instellen
    const defaultFilter = 'all';  // Of je kunt de laatst geselecteerde filter gebruiken
    applyFilter(defaultFilter);
}

// Eventlistener voor de 'Volgende' knop
const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', () => {
    const activeSlides = Array.from(slides).filter(slide => slide.classList.contains('active'));
    if (activeSlides.length > 0) {
        currentIndex = (currentIndex + 1) % activeSlides.length;
        scrollToSlide(currentIndex);
        resetAutoSlide();
    }
});

// Eventlistener voor de 'Vorige' knop
const prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', () => {
    const activeSlides = Array.from(slides).filter(slide => slide.classList.contains('active'));
    if (activeSlides.length > 0) {
        currentIndex = (currentIndex - 1 + activeSlides.length) % activeSlides.length;
        scrollToSlide(currentIndex);
        resetAutoSlide();
    }
});

// Eventlistener voor de filterknoppen
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        applyFilter(filter);
        resetAutoSlide(); // Reset automatische overgang na filterkeuze
    });
});

// Zet de initiële projecten bij het laden van de pagina
window.addEventListener('load', setInitialProjects);

// Als je scrollt, blijft de scrollpositie behouden
window.addEventListener('scroll', () => {
    // Het scrollen gebeurt automatisch, we hoeven geen extra actie te ondernemen
});

// Automatische overgang elke 5 seconden
let autoSlideInterval = setInterval(() => {
    const activeSlides = Array.from(slides).filter(slide => slide.classList.contains('active'));
    if (activeSlides.length > 0) {
        currentIndex = (currentIndex + 1) % activeSlides.length;
        scrollToSlide(currentIndex);
    }
}, 8000); // 10 seconden

// Reset de automatische overgang bij handmatige interactie
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        const activeSlides = Array.from(slides).filter(slide => slide.classList.contains('active'));
        if (activeSlides.length > 0) {
            currentIndex = (currentIndex + 1) % activeSlides.length;
            scrollToSlide(currentIndex);
        }
    }, 8000);
}
