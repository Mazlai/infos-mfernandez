function show_header() {
	document.getElementById('h-content').style.display = 'flex';
	document.getElementById('h-show').style.display = 'none';
	document.getElementById('planet-header').style.display = 'none';
}
function hide_header() {
	document.getElementById('h-content').style.display = '';
	document.getElementById('h-show').style.display = 'block';
	document.getElementById('planet-header').style.display = 'block';
}

function scrollToAnchor(anchorId) {
	const targetElement = document.getElementById(anchorId);
	if (targetElement) {
	  targetElement.scrollIntoView({ behavior: 'smooth' });
	}
}

function scrollToTop() {
	window.scrollTo({top:0, behavior:'smooth'});
}

function handleArrows() {
    const isMobile = window.innerWidth <= 1070;
    const horizontalArrows = document.querySelectorAll('.horizontal-arrow');
    const verticalArrows = document.querySelectorAll('.vertical-arrow');
    
    if (isMobile) {
        // Mode mobile - cacher les flèches horizontales, montrer les verticales
        horizontalArrows.forEach(arrow => {
            arrow.style.display = 'none';
        });
        
        verticalArrows.forEach(arrow => {
            arrow.style.display = 'block';
        });
    } else {
        // Mode desktop - montrer les flèches horizontales, cacher les verticales
        horizontalArrows.forEach(arrow => {
            arrow.style.display = 'block';
        });
        
        verticalArrows.forEach(arrow => {
            arrow.style.display = 'none';
        });
    }
}

function initCarousel() {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const slideCount = slides.length;

    // Fonction pour actualiser l'affichage du carrousel
    function updateCarousel() {
        // Mettre à jour la position du conteneur
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Mettre à jour les classes actives
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Mettre à jour les indicateurs
        indicators.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Fonction pour passer au slide suivant
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }

    // Fonction pour passer au slide précédent
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    }

    // Gestionnaires d'événements pour les boutons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Gestionnaires d'événements pour les indicateurs
    indicators.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Activer le défilement automatique (optionnel)
    // let autoplay = setInterval(nextSlide, 5000);
    
    // Pause lors du survol (optionnel)
    // container.addEventListener('mouseenter', () => clearInterval(autoplay));
    // container.addEventListener('mouseleave', () => autoplay = setInterval(nextSlide, 5000));

    // Initialiser l'affichage
    updateCarousel();

    // Navigation tactile (swipe) pour mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    }
}

// Exécuter au chargement
document.addEventListener('DOMContentLoaded', handleArrows);
document.addEventListener('DOMContentLoaded', initCarousel);

// Exécuter à chaque redimensionnement de la fenêtre
window.addEventListener('resize', handleArrows);