/////////////////////
/// popup imagen ////
/////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen');
    const popup = document.getElementById('popup-imagen');
    const popupImage = document.getElementById('popup-image');
    const popupNumero = document.getElementById('popup-numero');
    const popupTitulo = document.getElementById('popup-titulo');
    const closeButton = document.getElementById('close-button');

    imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            const imgUrl = imagen.getAttribute('src');
            const numeroFigura = this.parentElement.querySelector('.numero-figura').textContent;
            const tituloFigura = this.parentElement.querySelector('.titulo-figura').textContent;

            popupImage.src = imgUrl;
            popupNumero.textContent = numeroFigura;
            popupTitulo.textContent = tituloFigura;

            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
// Fin popup imagen //

///////////////////////////////////////////////////////
/// Funciones para popup referencias bibliográficas ///
///////////////////////////////////////////////////////
const referencePopup = document.getElementById('reference-popup');
let activeReferenceId = null;

document.querySelectorAll('.reference').forEach(function(reference) {
    reference.addEventListener('click', function(event) {
        event.stopPropagation();
        const referenceId = this.getAttribute('data-reference-id');

        if (referenceId === activeReferenceId) {
            // Si se hace clic en el mismo enlace que abrió el popup, ciérralo
            referencePopup.style.display = 'none';
            activeReferenceId = null;
        } else {
            showReferencePopup(referenceId, this); // Pasa el enlace como argumento
        }
    });
});

function showReferencePopup(referenceId, referenceElement) {
    const referenceRect = referenceElement.getBoundingClientRect();
    const mainContent = document.querySelector('.main-content');
    const mainContentRect = mainContent.getBoundingClientRect();
    const popupWidth = referencePopup.clientWidth;

    let popupLeft = referenceRect.left - mainContentRect.left + window.scrollX;
    let popupTop = referenceRect.bottom + window.scrollY;

    // Verificar si hay desbordamiento a la derecha si el popup se coloca alineado a la izquierda del enlace
    if (popupLeft + popupWidth > mainContentRect.right) {
        popupLeft = mainContentRect.right - popupWidth;
    }

    // Ajustar la posición hacia la izquierda lo mínimo necesario para evitar el desbordamiento
    if (popupLeft < mainContentRect.left) {
        popupLeft = mainContentRect.left;
    }

    const popupReferenceDetails = document.getElementById('popup-reference-details');
    popupReferenceDetails.innerHTML = getReferenceData(referenceId);

    referencePopup.style.top = popupTop + 'px';
    referencePopup.style.left = popupLeft + 'px';

    referencePopup.style.display = 'block';

    activeReferenceId = referenceId;

    const goToReferenceList = document.getElementById('go-to-reference-list');
    goToReferenceList.setAttribute('href', `#${referenceId}`);
    goToReferenceList.onclick = function() {
        referencePopup.style.display = 'none';
        activeReferenceId = null;
    };

    const closeIcon = document.getElementById('close-icon');
    closeIcon.addEventListener('click', function() {
        referencePopup.style.display = 'none';
        activeReferenceId = null;
    });
}

function getReferenceData(referenceId) {
    const referenceElement = document.getElementById(referenceId);
    return referenceElement.innerHTML;
}

document.body.addEventListener('click', function(event) {
    if (event.target !== referencePopup && !referencePopup.contains(event.target)) {
        referencePopup.style.display = 'none';
        activeReferenceId = null;
    }
});

//////////////////////////////////////////
/// Funciones para desplegable resumen ///
//////////////////////////////////////////

// Función para mostrar/ocultar el resumen con efecto persiana
const toggleResumen = document.getElementById('toggle-resumen');
const resumen = document.getElementById('resumen');
const keywords = document.getElementById('keywords')

let isResumenVisible = false;

toggleResumen.addEventListener('click', function() {
    if (isResumenVisible) {
        resumen.style.maxHeight = '0';
        isResumenVisible = false;
    } else {
        resumen.style.maxHeight = resumen.scrollHeight + 'px';
        isResumenVisible = true;
    }
});

//////////////////////////////////////////
/// Funciones para información autores ///
//////////////////////////////////////////

// Función para mostrar el popup al hacer clic en el enlace del autor
var autorLinks = document.querySelectorAll('.autorLink');
var popup = document.querySelector('.popup');
var activeAutorLink = null; // Variable para llevar un registro del enlace activo

for (var i = 0; i < autorLinks.length; i++) {
    autorLinks[i].addEventListener('click', function(e) {
        e.preventDefault();

        if (this === activeAutorLink && popup.style.display === 'block') {
            // Si se hace clic en el mismo enlace que abrió el popup, ciérralo
            popup.style.display = 'none';
            activeAutorLink = null;
        } else {
            var nombreAutor = this.getAttribute('data-nombre');
            var universidad = this.getAttribute('data-universidad');
            var correo = this.getAttribute('data-correo');
            var orcid = this.getAttribute('data-orcid');
            var variable = this.getAttribute('data-variable');
            var otro = this.getAttribute('data-otro');
            var nombreAutorElement = popup.querySelector('.nombreAutor');
            var universidadElement = popup.querySelector('.universidad');
            var correoElement = popup.querySelector('.correo');
            var orcidElement = popup.querySelector('.orcid');
            var variableElement = popup.querySelector('.variable');
            var otroElement = popup.querySelector('.otro');

            nombreAutorElement.textContent = nombreAutor;
            if (universidad) {
                universidadElement.innerHTML = `<i class="fas fa-university"></i> ${universidad || ''}`;
            } else {
                universidadElement.innerHTML = '';
            }
            if (correo) {
                correoElement.innerHTML = `<i class="fas fa-envelope"></i>  ${correo}`;
            } else {
                correoElement.innerHTML = '';
            }
            if (orcid) {
                orcidElement.innerHTML = `<i class="fab fa-orcid"></i>  ${orcid || ''}`;
            } else {
                orcidElement.innerHTML = ' ';
            }
            if (variable) {
                variableElement.innerHTML = variable;
            } else {
                variableElement.innerHTML = ' ';
            }
            if (otro) {
                otroElement.textContent = otro;
            } else {
                otroElement.textContent = ' ';
            }

            // Obtener las coordenadas del autorLink
            var rect = this.getBoundingClientRect();
            var autorLinkTop = rect.top + window.scrollY;
            var autorLinkLeft = rect.left + window.scrollX;

            // Posicionar el popup debajo del autorLink
            popup.style.top = autorLinkTop + this.offsetHeight + 'px';
            popup.style.left = autorLinkLeft + 'px';

            popup.style.display = 'block';
            activeAutorLink = this; // Actualizar el enlace activo
        }
    });
}

window.addEventListener('click', function(e) {
    if (e.target !== popup && !e.target.classList.contains('autorLink')) {
        popup.style.display = 'none';
        activeAutorLink = null; // Restablecer el enlace activo
    }
});
