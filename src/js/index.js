var pageRegex = /page2/;

if (pageRegex.test(window.location.href)) {
    var path = anime.path('path');

    anime({
      targets: 'rect',
      translateX: path,
      translateY: path,
      rotate: path,
      duration: 3000,
      loop: true,
      easing: 'linear'
    });

    anime({
      targets: 'path',
      opacity: 0,
      duration: 6000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo'
    });
}

;(function ($) {
  'use strict';
  var $body    = $('html, body'), // Define jQuery collection
      content  = $('#page2').smoothState({
        onStart : {
          duration: 1000,
          render: function () {
            content.toggleAnimationClass('is-exiting');

            // Scroll user to the top
            $body.animate({ 'scrollTop': 0 });

          }
        }
      }).data('smoothState');
})(jQuery);
