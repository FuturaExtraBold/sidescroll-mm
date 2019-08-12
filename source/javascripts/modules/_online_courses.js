(function($) {
  let $window = $(window);
  let windowW = $window.outerWidth();
  let $oc = $(".online-courses");

  console.log("windowW / 100:", windowW / 100);

  let opacityPercent = 0;
  let threshold = 0.75;
  let modifier = 0;
  let ol = 0;
  let wt = 0;

  $window.on("scroll", () => {
    ol = $oc.offset().left;
    wt = windowW * threshold;
    if (ol < wt) {
      opacityPercent = (1 + modifier) - (Math.floor(ol * (100 / wt))) / 100;
    } else {
      opacityPercent = 0;
    }
    if (opacityPercent >= 1) opacityPercent = 1;
    // console.log(opacityPercent);
    TweenMax.set($oc, { opacity: opacityPercent });
  });
})(jQuery);
