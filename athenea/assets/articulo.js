// Pone texto de divs sidebar en modal:
const exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
  keyboard: false
});
const modalTitle = document.querySelector('#exampleModal .modal-title');
const modalContent = document.getElementById('modal-content');

document.addEventListener('click', (event) => {
  const link = event.target.closest('[data-bs-toggle="modal"]');
  if (link) {
    const contentId = link.getAttribute('data-bs-content');
    const contentDiv = document.querySelector(contentId);

    if (contentDiv) {
      // Busca cualquier elemento hijo del enlace que tenga el atributo data-bs-title
      const iconElement = Array.from(link.children).find(child => child.getAttribute('data-bs-title'));

      // Obtiene el título del tooltip del icono
      const tooltipTitle = iconElement ? iconElement.getAttribute('data-bs-title') : '';

      // Asigna el título del tooltip como data-bs-title al enlace
      link.setAttribute('data-bs-title', tooltipTitle);

      // Utiliza el título del tooltip como título del modal
      modalTitle.textContent = tooltipTitle;
      modalContent.innerHTML = contentDiv.innerHTML;
      exampleModal.show();

      // Agrega un listener para el clic dentro del contenido del modal
      modalContent.addEventListener('click', closeModalOnClick);
    }
  }
});

// Función para cerrar el modal si se hace clic en un enlace dentro del contenido del modal
function closeModalOnClick(event) {
  const linkInModal = event.target.closest('a');
  if (linkInModal) {
    exampleModal.hide();
    modalContent.removeEventListener('click', closeModalOnClick); // Elimina el listener después de cerrar el modal
  }
}

// FIN pone texto de divs sidebar en modal

// Script para copiar dinámicamente el contenido de autores al modal

    $('#modalAutores').on('show.bs.modal', function (event) {
        var modal = $(this);
        var autoresContent = $('.autores').html();
        $('#modalBodyAutores').html(autoresContent);

        
    });

// Pone texto de divs imágenes en modal
document.addEventListener('DOMContentLoaded', function () {
  const imageModal = new bootstrap.Modal(document.getElementById('ModalImage'), {
    keyboard: false
  });
  const imageModalTitle = document.querySelector('#ModalImage .modal-title');
  const imageModalContent = document.getElementById('modal-image-content');
  const modalCloseButton = document.getElementById('modalCloseButton');

  document.addEventListener('click', (event) => {
    const container = event.target.closest('.image-container');
    if (container) {
      // imageModalTitle.textContent = container.getAttribute('data-bs-title');
      
      // Clona la imagen y aplica la clase 'modal-image'
      const originalImage = container.querySelector('img');
      const clonedImage = originalImage.cloneNode(true);
      clonedImage.classList.add('modal-image');

      // Crea un contenedor para la información y agrega la clase 'modal-info'
      const infoContainer = document.createElement('div');
      infoContainer.classList.add('modal-info');

      // Agrega la información de la clase 'numero-figura'
      const numeroFigura = container.querySelector('.numero-figura');
      if (numeroFigura) {
        const numeroFiguraContainer = document.createElement('div');
        numeroFiguraContainer.classList.add('modal-info-item');
        numeroFiguraContainer.textContent = numeroFigura.textContent;
        infoContainer.appendChild(numeroFiguraContainer);
      }

      // Agrega la información de la clase 'titulo-figura'
      const tituloFigura = container.querySelector('.titulo-figura');
      if (tituloFigura) {
        const tituloFiguraContainer = document.createElement('div');
        tituloFiguraContainer.classList.add('modal-info-item');
        tituloFiguraContainer.textContent = tituloFigura.textContent;
        infoContainer.appendChild(tituloFiguraContainer);
      }

      // Agrega el contenedor de información junto con la imagen al contenido del modal
      imageModalContent.innerHTML = '';
      imageModalContent.appendChild(clonedImage);
      imageModalContent.appendChild(infoContainer);

      imageModal.show();
    }
  });
});

// FIN pone texto de divs imágenes en modal

 
// Popover referencias ORIGINAL
    document.addEventListener('DOMContentLoaded', function () {
    // Inicializa los popovers de Bootstrap
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        content: function () {
          var referenceTarget = popoverTriggerEl.getAttribute('data-reference-id');
          var detailsContent = document.querySelector(referenceTarget).innerHTML;
          var referenceId = referenceTarget.substring(1); // Elimina el # del inicio

          // Construye el contenido del popover con una línea en blanco y el enlace "Ir a la referencia"
          return detailsContent + '<a href="#' + referenceId + '" class="close-popover">Ir a la referencia</a>';
        },
      });
    });

    // Cierra el popover al hacer clic en cualquier lugar de la página
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.popover') || event.target.classList.contains('close-popover')) {
        popoverList.forEach(function (popover) {
          popover.hide();
        });
      }
    });
  });
// FIN popovers referencias

 
