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