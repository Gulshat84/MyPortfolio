new WOW().init();

const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.project-pagination',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true
  }
});