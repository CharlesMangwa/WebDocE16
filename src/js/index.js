window.onload = function () {
  var animation_part1 = false;
  var waypoints = $('section.part1').waypoint({
    handler: function(direction) {
      if((animation_part1 === false)&&(direction === 'down')){
        $('.title_part1').fadeIn(2000);
        $('.title_part2').delay(3500).fadeIn(2000);
        animation_part1 = true;
      }
    },
    offset: '50%'
  })
  var waypoints = $('section.part2').waypoint({
    handler: function(direction) {
      if(direction === 'down'){
        $('.part2-content').css('overflow-y', 'scroll');
      }
    }
  })
}

function replay_video(video_id){
  var current_video = document.getElementById(video_id);
  current_video.pause();
  current_video.currentTime = '0';
  current_video.play();
}

// Smooth Scroll
jQuery(function($) {

  $('body').panelSnap();

  var animation_part1 = false;
  $('.part1').panelSnap({
    onSnapFinish: function($target) {
      console.log($target);
      if(animation_part1 === false){
        $('.title_part1').fadeIn(2000);
        $('.title_part2').delay(3500).fadeIn(2000);
        animation_part1 = true;
      }
    }
  });

  $('.part2').panelSnap({
    onSnapFinish: function($target) {
      console.log($target);
      $('.part2-content').css('overflow-y', 'scroll');
    }
  });

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

  // Callback demo
  $('.callback_demo .panels').panelSnap({
    onSnapFinish: function($target) {

      log('callback', 'onSnapFinish', $target);

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
var UserAgent = UserAgentAPI();
$('#device').append(UserAgent.data.platform_name);

var lithium = {
  'Mac OSX El Capitan': 8,
  'Android': 0.78,
  'Apple iPhone': 0.84
};

var current_lithium = lithium[UserAgent.data.platform_name];

console.log(typeof(current_lithium));

if (typeof current_lithium == 'undefined') {
  current_lithium = 0.74;
}

$('#lithium').append(current_lithium);

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
