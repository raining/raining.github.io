// accordion
(function ($) {
  var allPanels = $('.accordion > dd').hide();
  $('.accordion').addClass('test');

  $('.accordion > dt > a').click(function () {
    $(this).parent().toggleClass('open');
    allPanels.slideUp();
    $('.arrow_bottom.filters__arrow_direction_top').removeClass('arrow_bottom filters__arrow_direction_top')
      .addClass('arrow_up filters__arrow_direction_bottom');

    if ($(this).parent().hasClass('open')) {
      $(this).parent().find('.arrow_up.filters__arrow_direction_bottom')
        .addClass('arrow_bottom filters__arrow_direction_top')
        .removeClass('arrow_up filters__arrow_direction_bottom');
      $(this).parent().next().slideDown();
    }
    else {
      $(this).parent().find('.arrow_bottom.filters__arrow_direction_top')
        .removeClass('arrow_bottom filters__arrow_direction_top')
        .addClass('arrow_up filters__arrow_direction_bottom');
      allPanels.slideUp();
    }
    return false;
  });
}(jQuery));