(function($) {

  const $window = $(window);
  const $sections = $(".section");
  const $progress = $(".progress");

  let $pips;

  let thisSection;
  let windowW = 0;
  let offsetLeft = 0;
  let currentSection = 0;

  for (var a = 0; a < $sections.length; a++) {
    $progress.append("<div class='progress__pip'><div class='progress__pip-inside'></div></div>");
  }

  $pips = $(".progress__pip");

  function handleScroll() {
    $sections.each(function(index) {
      thisSection = $(this);
      offsetLeft = thisSection.offset().left;
      if (offsetLeft >= -(windowW * 0.25) && offsetLeft < windowW * 0.25) {
        currentSection = thisSection.index();
      } else {
        return;
      }
    });
    changePip(currentSection);
  }

  function changePip(index) {
    TweenMax.to($pips.children(".progress__pip-inside"), 0.2, { backgroundColor: "transparent" });
    TweenMax.to($pips.eq(index).children(".progress__pip-inside"), 0.4, { backgroundColor: "#ffffff" });
  }

  function handleResize() {
    windowW = $window.outerWidth();
  }

  $window.on("resize", handleResize);
  $window.on("scroll", handleScroll);

  handleResize();
  handleScroll();
  changePip(0);

})(jQuery);
