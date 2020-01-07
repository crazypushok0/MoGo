$(function(){
  $('.header__slider-items').slick({
    dots:false,
    arrows:false,
    asNavFor:'.header__pagination',
    autoplay: false,
    autoplaySpeed: 2000,
  });
  $('.header__pagination').slick({
    slidesToShow: 4,
    asNavFor: '.header__slider-items',
    dots: false,
    focusOnSelect: true,
  });
  $('.doing__item-box').on('click', function(){
    $(this).toggleClass('active').next().slideToggle();
    $('.doing__item-box').not(this).removeClass('active').next().slideUp();
  });
  $('.doing__slider-inner').slick({
    dots:false,
    arrows:true,
    nextArrow:'<img src="img/icons/arrow-left.svg" class="slick-prev">',
    prevArrow:'<img src="img/icons/arrow-right.svg" class="slick-next">'
  });
  $('.work__slider-inner').slick({
    dots:false,
    arrows:true,
    nextArrow:'<img src="img/icons/arrow-left.svg" class="slick-prev">',
    prevArrow:'<img src="img/icons/arrow-right.svg" class="slick-next">'
  });

});