$(function() {
  // クリックしたメニューを選択状態にする
  $("nav li a").on("click", function() {
    $("nav li").removeClass("current");
    $(this).parent().addClass("current");
  });

  // 現在表示している本文に応じて選択状態を更新
  function updateCurrentMenu() {
    var current = -1;
    var scrollPosition = $(window).scrollTop() + 100;

    for (var i = 1; i <= 4; i++) {
      if ($("#section" + i + "-text").offset().top <= scrollPosition) {
        current = i;
      }
    }

    $("nav li").removeClass("current");
    if (current !== -1) {
      $("nav li:nth-child(" + current + ")").addClass("current");
    }
  }

  $(window).on("scroll", updateCurrentMenu);
  updateCurrentMenu();
});