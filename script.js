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
    // Vous pouvez aussi utiliser window.matchMedia pour plus de précision
    const isMobile = window.innerWidth <= 1070;
    
    // Sélectionner toutes les flèches
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

// Exécuter au chargement
document.addEventListener('DOMContentLoaded', handleArrows);

// Exécuter à chaque redimensionnement de la fenêtre
window.addEventListener('resize', handleArrows);