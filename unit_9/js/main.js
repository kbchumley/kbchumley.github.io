$(function() {

  // Hamburger
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    $(".nav-list").toggleClass("is-active");
    $(".l-page").toggleClass("is-active");
  });

  // Close mobile menu on menu click
  $(".nav__link").each(function() {
    $(this).on("click", function() {
      $hamburger.toggleClass("is-active");
      $(".nav-list").toggleClass("is-active");
    });
  });

  // Close mobile menu on site name click
  $(".site-name").on("click", function() {
    if($hamburger.hasClass("is-active")){
      $hamburger.toggleClass("is-active");
      $(".nav-list").toggleClass("is-active");
    }
  });

  // Change header background color and menu items once scroll to certain point.
  $(document).scroll(function () {
    var $header = $(".l-header");
    $header.toggleClass("scrolled", $(this).scrollTop() > $header.height());
  });

});