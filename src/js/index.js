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

/* User Agent */
// var UserAgent = UserAgentAPI();
// console.log(UserAgent.data);

/* Country */
// var country = CountryAPI();
// console.log(country);
