window.onload = function () {

  /* User Agent */
  var UserAgent = UserAgentAPI();
  $('#device').append(UserAgent.data.platform_name);

  var lithium = {
    'Mac OSX El Capitan': 8,
    'Android': 0.78,
    'Apple iPhone': 0.84
  };

  var current_lithium = lithium[UserAgent.data.platform_name];

  if (typeof current_lithium == 'undefined') {
    current_lithium = 0.74;
  }

  $('#lithium').append(current_lithium);

  // if(UserAgent.data.platform_type == 'Desktop'){

    jQuery(function($) {
      $('body').panelSnap();
    });

    var animation_part1 = false;
    var waypoints = $('section.part1').waypoint({
      handler: function(direction) {
        if((animation_part1 === false)&&(direction === 'down')){
          $('.title_part1').fadeIn(2000);
          $('.title_partContainer').delay(2000).fadeIn(2000);
          animation_part1 = true;
        }
        $('.part2-content').css('overflow-y', 'hidden');
      },
      offset: '50%'
    })
    var waypoints = $('section.part2').waypoint({
      handler: function(direction) {
        if(direction === 'down'){
          $('.part2-content').css('overflow-y', 'scroll');
          $('.part3-content').css('overflow-y', 'hidden');
        }
      }
    })
    var waypoints = $('section.part3').waypoint({
      handler: function(direction) {
        if(direction === 'down'){
          $('.part2-content').css('overflow-y', 'hidden');
          $('.part3-content').css('overflow-y', 'scroll');
          $('.part4-content').css('overflow-y', 'hidden');
        }
      }
    })
    var waypoints = $('section.part4').waypoint({
      handler: function(direction) {
        if(direction === 'down'){
          $('.part3-content').css('overflow-y', 'hidden');
          $('.part4-content').css('overflow-y', 'scroll');
          $('.part5-content').css('overflow-y', 'hidden');
        }
      }
    })
    var waypoints = $('section.part5').waypoint({
      handler: function(direction) {
        if(direction === 'down'){
          $('.part4-content').css('overflow-y', 'hidden');
          $('.part5-content').css('overflow-y', 'scroll');
        }
      }
    })
  // }else{
  //   var animation_part1 = false;
  //   var waypoints = $('section.part1').waypoint({
  //     handler: function(direction) {
  //       if((animation_part1 === false)&&(direction === 'down')){
  //         $('.title_part1').fadeIn(2000);
  //         $('.title_partContainer').delay(2000).fadeIn(2000);
  //         animation_part1 = true;
  //       }
  //     },
  //     offset: '50%'
  //   })
  // }
}

// Distance between two points
 function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
   var R = 6371; // Radius of the earth in km
   var dLat = deg2rad(lat2-lat1);  // deg2rad below
   var dLon = deg2rad(lon2-lon1);
   var a =
     Math.sin(dLat/2) * Math.sin(dLat/2) +
     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
     Math.sin(dLon/2) * Math.sin(dLon/2)
     ;
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
   var d = R * c; // Distance in km
   return d;
 }

 function deg2rad(deg) {
   return deg * (Math.PI/180)
 }


// Distance between two points
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

/* Country */
var country = CountryAPI();
$.ajax({
  url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + country.countryName,
  success: function(result) {
    $('#distance').append(getDistanceFromLatLonInKm(1.473292, -160.270608, result.results[0].geometry.location.lat, result.results[0].geometry.location.lng).toString().substring(0,8));
  }
});

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


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
