//slick（スライダー）設定読み込み
$(function () {
  $('.slider').slick({
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
    dots: true,
    slidesToShow: 1,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" >Next</button>',
    centerMode: true,
    centerPadding:'20%',
    responsive:
    [
      {
        breakpoint: 1024,
        settings:{
          slidesToShow:1,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
        }
      },
    ]
  })
});
