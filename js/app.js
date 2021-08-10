let introSlider = $('.ba-intro-slider')
introSlider.slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
    speed: 800,
})

let teamSlider = $('.ba-team-slider')
teamSlider.slick({
    dots: true,
})


let imageSlider = $('.ba-team-slider');

imageSlider.slick({
    dots: true,
    arrows: true,
    autoplay: true,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})