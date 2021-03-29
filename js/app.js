jQuery(document).ready(function ($) {
  // slider-start
  $(".slider").slick({
    dots: true,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
  });
  // slider-end

  // dropdown-start
  $(function () {
    $(".dropdown__content ul li").on("click", function () {
      var label = $(this).parent().parent().children("label");
      label.attr("data-value", $(this).attr("data-value"));
      label.html($(this).html());

      $(this).parent().children(".selected").removeClass("selected");
      $(this).addClass("selected");
    });

    $(".dropdown__content").on("click", function () {
      $(this).toggleClass("open");
    });
  });
  // dropdown-end

  // burger-menu start
  $(function () {
    $(".header__menu-burger").click(function () {
      $(".header__menu-burger").toggleClass("open-menu");
      $(".header__menu-nav").toggleClass("open-menu");
    });
  });

  $(function () {
    $(".header__menu-burger").click(function (event) {
      $(".header__menu-burger", ".header__menu-ul").toggleClass("active");
      $("body").toggleClass("fixed-page");
    });
  });

  // burger-menu end
});
