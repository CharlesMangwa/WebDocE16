var options = {
  $menu: false,
  menuSelector: 'div',
  panelSelector: '> section',
  namespace: '.panelSnap',
  onSnapStart: function(){},
  onSnapFinish: function(){},
  onActivate: function(){},
  directionThreshold: 50,
  slideSpeed: 200,
  delay: 0,
  easing: 'linear',
  offset: 0,
  navigation: {
    keys: {
      nextKey: false,
      prevKey: false,
    },
    buttons: {
      $nextButton: false,
      $prevButton: false,
    },
    wrapAround: false
  }
};

$('.panel_container').panelSnap(options);
