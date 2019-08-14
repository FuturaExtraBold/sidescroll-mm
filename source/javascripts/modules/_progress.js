(function($) {

  const $window = $(window);
  const $sections = $(".section");
  const $progress = $(".progress");

  let $pips;

  let $thisSection;
  let windowWidth = 0;
  let offsetLeft = 0;
  let currentSection = 0;

  for (var a = 0; a < $sections.length; a++) {
    $progress.append("<div class='progress__pip'><div class='progress__pip-inside'></div></div>");
  }

  $pips = $(".progress__pip");

  function handleScroll() {
    $sections.each(function(index) {
      $thisSection = $(this);
      offsetLeft = $thisSection.offset().left + $thisSection.outerWidth() / 2;
      if (offsetLeft >= windowWidth / 2 - 300 && offsetLeft < windowWidth / 2 + 300) {
        currentSection = $thisSection.index();
      } else {
        return;
      }
    });
    changePip(currentSection);
  }

  function handleResize() {
    windowWidth = $window.outerWidth();
  }

  function changePip(index) {
    TweenMax.to($pips.children(".progress__pip-inside"), 0.2, { backgroundColor: "rgba(255,255,255,0.1)" });
    TweenMax.to($pips.eq(index).children(".progress__pip-inside"), 0.4, { backgroundColor: "#ffffff" });
  }

  function handlePipClick(event) {
    console.log("this:", $(this).index());
    $thisSection = $sections.eq($(this).index());
    TweenMax.to($window, 1, { scrollTo: $thisSection.position().left - (windowWidth / 2 - $thisSection.outerWidth() / 2), ease: "easeInOutExpo" })
  }

  $pips.on("click", handlePipClick);

  $window.on("resize", handleResize);
  $window.on("scroll", handleScroll);

  handleResize();
  handleScroll();
  changePip(0);

})(jQuery);
