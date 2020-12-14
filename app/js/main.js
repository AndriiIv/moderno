$(function(){

  

  $(".rate__star").rateYo({
    rating: 5,
    starWidth: "12px",
    ratedFill: "#ffa726",
    readOnly: true
  }); 

  $('.product__slider-inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });
  
  $('.icon-th-list').on('click', function(){
    $('.product__item-page--content').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });
  $('.icon-th-large').on('click', function(){
    $('.product__item-page--content').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  var mixer = mixitup('.product__inner-box');
  
});