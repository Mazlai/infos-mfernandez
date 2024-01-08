document.addEventListener('DOMContentLoaded', function() {

    var typed1 = new Typed('#title-1', {
        strings: ['Mon CV'],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
    });

    var typed2 = new Typed('#title-2', {
        strings: ['Mon projet professionnel'],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
    });

    var typed3 = new Typed('#title-3', {
        strings: ['Mes centres d\'intérêt'],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
    });

    var typed4 = new Typed('#title-4', {
        strings: ['Mes compétences techniques et humaines'],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
    }); 

    var typed5 = new Typed('#title-5', {
        strings: ['Mes principaux projets'],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
    });

    var typed6 = new Typed('#title-6', {
        strings: ['Mes autres projets'],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
    });

    // Définissez le nombre total de compétences
    var totalCompetences = 11;

    // Utilisez une boucle pour créer les sélecteurs et les écouteurs d'événements
    for (var i = 1; i <= totalCompetences; i++) {
        // Récupérez le bouton
        var competenceBtn = document.querySelector('.comp-' + i);

        // Récupérez l'icône à remplacer
        var eyeIcon = competenceBtn.querySelector('.fa-eye');

        // Récupérez l'élément de contenu à afficher/cacher
        var timelineContent = document.getElementById('timelineContent-' + i);

        // Ajoutez un écouteur d'événement au clic sur le bouton
        competenceBtn.addEventListener('click', function(element, content) {
            return function() {
                toggleContent(content);
                toggleIcon(element);
            };
        }(eyeIcon, timelineContent));
    }

    function toggleContent(element) {
        // Vérifiez si la classe 'show' est déjà présente
        var isContentVisible = element.classList.contains('show');

        // Si le contenu est visible, cachez-le; sinon, affichez-le
        if (isContentVisible) {
            element.classList.remove('show');
        } else {
            element.classList.add('show');
        }
    }

    function toggleIcon(element) {
        // Vérifiez si la classe 'show' est déjà présente
        var isShaking = element.classList.contains('fa-shake');

        // Si le contenu est visible, cachez-le; sinon, affichez-le
        if (isShaking) {
            element.classList.replace('fa-shake', 'fa-fade');
            element.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            element.classList.replace('fa-fade', 'fa-shake');
            element.classList.replace('fa-eye-slash', 'fa-eye');
        }
    }

});