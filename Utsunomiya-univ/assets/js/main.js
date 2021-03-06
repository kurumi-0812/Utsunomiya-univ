

//共通パーツ読み込み
$(function () {
  $("#header").load("header.html");
  $("#header-eng").load("header.html");
  $("#footer").load("footer.html");
  $("#footer_eng").load("footer.html");
});

// バーガーメニュー
$(function() {
  $(document).on('click','.hamburger', function (){
    // $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.burger-menu').addClass('active');
        } else {
            $('.burger-menu').removeClass('active');
        }
    });
});
