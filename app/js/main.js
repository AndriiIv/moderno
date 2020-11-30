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
  

  var mixer = mixitup('.product__inner-box');
  
});