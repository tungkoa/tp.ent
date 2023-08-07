import "./styles/style.scss";

$(document).ready(function () {
  AOS.init();
  $(".menu").click(function () {
    $(this).toggleClass("open menu--white");
    $("#overlay").toggleClass("open");
    $(".header").toggleClass("header--in-overlay");
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(document).on("scroll", () => {
    if ($("body").hasClass("recruitment")) {
      if ($(window).scrollTop() > 10) {
        $(".header").removeClass("header--transparent");
      } else {
        $(".header").addClass("header--transparent");
      }
    }
  });
});
