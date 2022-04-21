$('.testimonial__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.services__items').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: 'unslick'
    }]
  });