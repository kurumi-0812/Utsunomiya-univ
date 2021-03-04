

//共通パーツ読み込み
$(function () {
  $("#header").load("header.html");
  $("#header-eng").load("header.html");
  $("#footer").load("footer.html");
});

// バーガーメニュー
$(function() {
  $(document).on('click','.hamburger', function (){
    // $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

// $(function () {
//   $(document).on('click','.burger-menu_btn', function (){
//     $('.burger-menu').toggleClass('is-active');
//   });
// }());
