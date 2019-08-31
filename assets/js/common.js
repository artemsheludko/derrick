$(document).ready(function() {
  'use strict';

  var headerOverlay = $('.header__overlay'),
    menuList = $('.main-nav__box'),
    menuOpenIcon = $('.main-nav__open'),
    menuCloseIcon = $('.main-nav__close');


  /* =======================
  // Menu and Navigation
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  headerOverlay.click(function () {
    menuClose();
    searchClose();
  });

  function menuOpen() {
    menuList.addClass('visible');
    headerOverlay.addClass('visible');
  }

  function menuClose() {
    menuList.removeClass('visible');
    headerOverlay.removeClass('visible');
  }


  /* ================================
  // AOS - Animate On Scroll Library
  ================================ */
  AOS.init();


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });


});
