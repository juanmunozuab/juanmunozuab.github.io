   // Pone texto de divs sidebar en modal
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
              modalTitle.textContent = link.innerText.trim(); // Utiliza el texto del enlace como título del modal
              modalContent.innerHTML = contentDiv.innerHTML;
              exampleModal.show();
            }
          }
        });

    // FIN pone texto de divs sidebar en modal

    // Script para copiar dinámicamente el contenido de autores al modal

    $('#modalAutores').on('show.bs.modal', function (event) {
        var modal = $(this);
        var autoresContent = $('.autores').html();
        $('#modalBodyAutores').html(autoresContent);

        
    });


    // Pone texto de divs imágenes en modal
    document.addEventListener('DOMContentLoaded', function() {
      const imageModal = new bootstrap.Modal(document.getElementById('ModalImage'), {
        keyboard: false
      });
      const imageModalTitle = document.querySelector('#ModalImage .modal-title');
      const imageModalContent = document.getElementById('modal-image-content');
      const modalCloseButton = document.getElementById('modalCloseButton');

      document.addEventListener('click', (event) => {
        const container = event.target.closest('.image-container');
        if (container) {
          imageModalTitle.textContent = container.getAttribute('data-bs-title');
          // Clona la imagen y aplica la clase 'modal-image'
          const originalImage = container.querySelector('img');
          const clonedImage = originalImage.cloneNode(true);
          clonedImage.classList.add('modal-image');
          imageModalContent.innerHTML = '';
          imageModalContent.appendChild(clonedImage);
          imageModal.show();
        }
      });

      modalCloseButton.addEventListener('click', () => {
        imageModal.hide();
      });
    });

    // FIN pone texto de divs imágenes en modal

    // 
    // Popover referencias
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
          return detailsContent + '<br><a href="#' + referenceId + '" class="close-popover">Ir a la referencia</a>';
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

 
