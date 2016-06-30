window.onload = function () {
  var animation_part1 = false;
  var waypoints = $('section.part1').waypoint({
    handler: function(direction) {
      if((animation_part1 === false)&&(direction === 'down')){
        $('.title_part1').fadeIn(2000);
        $('.title_partContainer').delay(3500).fadeIn(2000);
        animation_part1 = true;
      }
    },
    offset: '50%'
  })
  var waypoints = $('section.partContainer').waypoint({
    handler: function(direction) {
      if(direction === 'down'){
        $('.partContainer-content').css('overflow-y', 'scroll');
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
* MENU BUTTON
*
*/


var waypoints = $('section.part1').waypoint({
  handler: function(direction) {
    if(direction === 'down'){
    $('.men-btn').show("slide", { direction: "right" }, 350);
    $('.men-btn').css( "display", "flex");
    $('.Menu-SVG').css( "stroke", "#D61441");
  } else {
    $('.men-btn').hide("slide", { direction: "right" }, 350);
    $('.men-btn').css( "display", "none");
    $('.Menu-SVG').css( "stroke", "#D61441");
  }
  }
})

var waypoints = $('section.part3').waypoint({
  handler: function(direction) {
    if(direction === 'down'){
        $('.Menu-SVG').css( "stroke", "#F8E71C");
  } else {
      $('.Menu-SVG').css( "stroke", "#D61441");
  }
  }
})

var waypoints = $('section.part4').waypoint({
  handler: function(direction) {
    if(direction === 'down'){
        $('.Menu-SVG').css( "stroke", "#7209FF");
  } else {
      $('.Menu-SVG').css( "stroke", "#F8E71C");
  }
  }
})

var waypoints = $('section.part5').waypoint({
  handler: function(direction) {
    if(direction === 'down'){
        $('.Menu-SVG').css( "stroke", "#00FF7A");
  } else {
      $('.Menu-SVG').css( "stroke", "#7209FF");
  }
  }
})


/*
*
* VIDEO
*
*/


var video_part2 = document.querySelector('#background-video-section2');
var video_part3 = document.querySelector('#background-video-section3');
var video_part4 = document.querySelector('#background-video-section4');
var video_part5 = document.querySelector('#background-video-section5');


var waypoints = $('section.part1').waypoint({
  handler: function(direction) {
    if(direction === 'down'){
    $('.men-btn').show("slide", { direction: "right" }, 350);
    $('.men-btn').css( "display", "flex");
  } else {
    $('.men-btn').hide("slide", { direction: "right" }, 350);
    $('.men-btn').css( "display", "none");
  }
  }
})

$( ".btn-vid-2" ).click(function() {
    $( ".btn-vid-2" ).fadeOut( 300, function() {
        $('.part2-content').hide("slide", { direction: "right" }, 350);
        $('.men-btn').hide("slide", { direction: "right" }, 350);
        video_part2.play();
        video_part2.muted = false;
  });
});

$( ".cls-vd-2" ).click(function() {
    $('.part2-content').show("slide", { direction: "right" }, 350);
    $('.men-btn').show("slide", { direction: "right" }, 350);
    video_part2.pause();
    video_part2.muted = true;
    $( ".btn-vid-2" ).fadeIn( 300, function() {});
});

$( ".btn-vid-3" ).click(function() {
    $( ".btn-vid-3" ).fadeOut( 300, function() {
        $('.part3-content').hide("slide", { direction: "right" }, 350);
        $('.men-btn').hide("slide", { direction: "right" }, 350);
        video_part3.play();
        video_part3.muted = false;
  });
});

$( ".cls-vd-3" ).click(function() {
    $('.part3-content').show("slide", { direction: "right" }, 350);
    $('.men-btn').show("slide", { direction: "right" }, 350);
    video_part3.pause();
    video_part3.muted = true;
    $( ".btn-vid-3" ).fadeIn( 300, function() {});
});

$( ".btn-vid-4" ).click(function() {
    $( ".btn-vid-4" ).fadeOut( 300, function() {
        $('.men-btn').hide("slide", { direction: "right" }, 350);
        $('.part4-content').hide("slide", { direction: "right" }, 350);
        video_part4.play();
        video_part4.muted = false;
  });
});

$( ".cls-vd-4" ).click(function() {
    $('.part4-content').show("slide", { direction: "right" }, 350);
    $('.men-btn').show("slide", { direction: "right" }, 350);
    video_part4.pause();
    video_part4.muted = true;
    $( ".btn-vid-4" ).fadeIn( 300, function() {});
});

$( ".btn-vid-5" ).click(function() {
    $( ".btn-vid-5" ).fadeOut( 300, function() {
        $('.men-btn').hide("slide", { direction: "right" }, 350);
        $('.part5-content').hide("slide", { direction: "right" }, 350);
        video_part5.play();
        video_part5.muted = false;
  });
});

$( ".cls-vd-5" ).click(function() {
    $('.part5-content').show("slide", { direction: "right" }, 350);
    $('.men-btn').show("slide", { direction: "right" }, 350);
    video_part5.pause();
    video_part5.muted = true;
    $( ".btn-vid-5" ).fadeIn( 300, function() {});
});
