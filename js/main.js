$(document).ready(function () {
  new WOW().init();

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    pagination: {
      el: '.project-pagination',
      bulletClass: 'project-bullet',
      bulletActiveClass: 'project-bullet-active',
      clickable: true
    }
  });

  const modalButton = $('[data-toggle=modal]');
  const closeModalButton = $(".modal-close");
  const modalOverlay = $(".modal-overlay");
  const modalDialog = $(".modal-dialog");
  const overlayButton = $("#overlay-button");

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    
    modalOverlay.addClass("modal-overlay--visible");
    modalDialog.addClass("modal-dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal-overlay--visible");
    modalDialog.removeClass("modal-dialog--visible");
  }

  overlayButton.on('click', closeModal);
});