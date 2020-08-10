$(function() {
    $.scrollify({
      section : ".hero",
      setHeights: false,
      updateHash: false,
    });
  });
  // OpenMenu
  function openMenu() {
    document.getElementById("navbar").style.height = "100%";
  }
  // CloseMenu
  function closeMenu() {
    document.getElementById("navbar").style.height = "0%";
  }
  // smoth scroll
  $(function () {
    $('.menu-item a').on('click', function () {
      $('html, body').animate({
        scrollTop:$($.attr(this, 'href')).offset().top
      },1000);
      return false;
    })
  })