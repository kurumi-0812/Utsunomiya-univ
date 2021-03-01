

//共通パーツ読み込み
$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

// バーガーメニュー
$(function () {
  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('is-active');
  });
}());
