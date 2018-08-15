//находим текущее окно и присваиваем ссылке в меню класс active
// $(document).ready(function($) {
//   var url = document.location.pathname;
//   console.log(url);
//   $('.header_nav').each(function (){
//     var link = $(this).find('a').attr('href');
//     console.log(link);
//     if(this.href == url){
//       $(this).addClass('active');
//     }
//   });
// });

//активируем слайдер Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

