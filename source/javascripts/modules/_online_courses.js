(function($) {

  let $window = $(window);
  let windowWidth = $window.outerWidth();
  let $oc = $(".online-courses");

  let opacityPercent = 0;
  let windowStart = 0.75;
  let windowEnd = 0.25;
  let windowDiff = windowStart - windowEnd;
  let offsetLeft = $oc.offset().left;
  let range = 0;

  $window.on("scroll", () => {
    offsetLeft = $oc.offset().left;
    if (offsetLeft < windowWidth * windowStart && offsetLeft > windowWidth * windowEnd) {
      console.log("within range!");
      opacityPercent = (1 + windowDiff) - (offsetLeft * (100 / (windowDiff * windowWidth))) / 100;
    }
    if (offsetLeft >= windowWidth * windowStart) opacityPercent = 0;
    if (offsetLeft <= windowWidth * windowEnd) opacityPercent = 1;
    console.log(opacityPercent);
    TweenMax.set($oc, { opacity: opacityPercent });
  });

})(jQuery);
