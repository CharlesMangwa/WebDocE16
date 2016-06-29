// Smooth Scroll
jQuery(function($) {

  // Basic demo
  $('body').panelSnap();

  // Menu demo
  $('.menu_demo .panels').panelSnap({
    $menu: $('.menu_demo .menu')
  });

  // Keyboard demo
  $('.keyboard_demo .panels').panelSnap({
    navigation: {
      keys: {
        nextKey: 39,
        prevKey: 37,
      }
    }
  });

  // Button demo
  $('.button_demo .panels').panelSnap({
    navigation: {
      buttons: {
        $nextButton: $('.button.next'),
        $prevButton: $('.button.prev'),
      }
    }
  });

  // Callback demo
  $('.callback_demo .panels').panelSnap({
    onSnapStart: function($target) {

      log('callback', 'onSnapStart', $target);

    },
    onSnapFinish: function($target) {

      log('callback', 'onSnapFinish', $target);

    },
    onActivate: function($target) {

      log('callback', 'onActivate', $target);

    }
  });

  // Event demo
  $('.event_demo .panels').on('panelsnap:start', event_log);
  $('.event_demo .panels').on('panelsnap:finish', event_log);
  $('.event_demo .panels').on('panelsnap:activate', event_log);

  $('.event_demo .panels').panelSnap();

  function event_log(e, $target) {

    log('event', e.type, $target);

  }

  // Offset demo
  $('.offset_demo .panels').panelSnap({
      offset: 85
  });

  // Shared log function
  function log(type, action, $target) {

    var text = '<p>' + action + ':<br>' + $target.find('h1').text() + '</p>';
    $('.' + type + '_demo .log h2').after(text);

  }

});

anime({
  targets: '.title_part1',
  scale: {
    value: 2,
    delay: function(el, index) {
        return index * 80;
    },
    duration: 850,
    easing: 'easeInOutExpo',
  }
});

/* User Agent */
// var UserAgent = UserAgentAPI();
// console.log(UserAgent.data);

/* Country */
// var country = CountryAPI();
// console.log(country);
