window.onload = function () {
  var animation_part1 = false;
  var waypoints = $('section.part1').waypoint({
    handler: function(direction) {
      if(animation_part1 === false){
        $('.title_part1').fadeIn(2000);
        $('.title_part2').delay(5500).fadeIn(2000);
        animation_part1 = true;
      }
    }
  })
}

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

/* User Agent */
// var UserAgent = UserAgentAPI();
// console.log(UserAgent.data);

/* Country */
// var country = CountryAPI();
// console.log(country);







/*
*
* SECTION 2
*
*/


var video_part2 = document.querySelector('#background-video-section2');

$( ".btn-vid-2" ).click(function() {
    $( ".btn-vid-2" ).fadeOut( 300, function() {
        $('.part2-content').hide("slide", { direction: "right" }, 350);
        video_part2.play();
        video_part2.muted = false;
  });
});

$( ".cls-vd-2" ).click(function() {
    $('.part2-content').show("slide", { direction: "right" }, 350);
    video_part2.pause();
    video_part2.muted = true;
    $( ".btn-vid-2" ).fadeIn( 300, function() {});
});
