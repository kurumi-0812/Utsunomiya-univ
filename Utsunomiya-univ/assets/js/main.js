

//共通パーツ読み込み
$(function () {
  $("#header").load("header.html");
  $("#header-eng").load("header.html");
  $("#footer").load("footer.html");
  $("#footer-eng").load("footer.html");
});

// バーガーメニュー
$(function () {
  $(document).on('click', '.hamburger', function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.burger-menu').addClass('active');
    } else {
      $('.burger-menu').removeClass('active');
    }
  });
});

// カレント表示
// $(function () {
//   $(document).ready(function () {
//     if (location.pathname != "/") {
//       $('.header_nav ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('current');
//     } else {
//       $('.header_nav ul li a:eq(0)').addClass('current');
//     }
//   });
// });


// $(function() {
//   $('.header_nav li a').each(function(){
//       var $href = $(this).attr('href');
//       if(location.href.match($href)) {
//           $(this).parent().addClass('current');
//       } else {
//           $(this).parent().removeClass('current');
//       }
//   });
// });
