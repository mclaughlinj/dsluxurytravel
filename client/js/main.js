$( document ).ready(function() {

  var viewHeight = $( window ).height() + 20 + 'px',
  viewWidth = $( window ).width() + 'px',
  viewHeightUnadjusted = $( window ).height() + 'px',
  viewHeightHalf = $( window ).height()/2 + 'px',
  $root = $('html, body');

  //get('https://prioritymomentsapi-lb.ref.o2.co.uk/offerService/geosearch/0,0/447700000401/5405f475e4b0d6d7e08299ee', succeeded, 'testing');

  // Fade in
  $('.home__section__mainContent, .about__section__mainContent, .contact__section__mainContent').fadeIn(2000, function() {
      $('.home__splash__continue, .about__splash__continue, .contact__splash__continue').fadeIn( 2000 );
    });

  $('.page__nav__reveal__div').mouseenter(function() {
    $('nav').addClass('page__nav__open');
    $('html').addClass('tapable');
    $('.page__nav__reveal__div, .page__nav__phone__div').fadeOut( 200 );
    $('.home__header').css({'z-index': '900' });
  });

  $('nav').mouseleave(function() {
    closeNav();
  });

  $('html.tapable').tap(function() {
    alert('tap');
  });

  $('.home__splash').css({'height': viewHeight});
  $('.about__splash, .contact__splash').css({'height': viewHeightUnadjusted});
  $('.home__gradient, .about__gradient, .contact__gradient').css({'height': viewHeightHalf});
  $('.about__section__contentContainer, .home__section__contentContainer, .contact__section__contentContainer').css({'max-height': viewHeightHalf});

  $('a[href^="#"]').click(function(){
      var anchor = $.attr(this, 'href');
      $root.animate({
          scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
      }, 500, function () {
        window.location.hash = anchor;
    });
      return false;
  });

});

$( window ).resize(function() {
  viewHeight = $( window ).height() + 20 + 'px',
  viewHeightUnadjusted = $( window ).height() + 'px',
  viewHeightHalf = $( window ).height()/2 + 'px';
  $('.home__splash').css({'height': viewHeight});
  $('.about__splash, .contact__splash').css({'height': viewHeightUnadjusted});
  $('.home__gradient, .about__gradient, .contact__gradient').css({'height': viewHeightHalf});
  $('.about__section__contentContainer, .home__section__contentContainer, .contact__section__contentContainer').css({'max-height': viewHeightHalf});
});

function succeeded(output) {
  alert(output);
}

function closeNav() {
  $('html').removeClass('tapable');
    $('nav').removeClass('page__nav__open');
    $('.page__nav__reveal__div, .page__nav__phone__div').fadeIn( 400, function() { $('.home__header').css({'z-index': '1000' }); } );
}

function get(url, success, loadingMessage) {
  var startTime;
  $.ajax({
    dataType: 'json',
    type: 'GET',
    url: url,
    success: function(res) {
      if (loadingMessage) {
        setTimeout(function() {
          success(res);
          loadingDialogElement.remove();
        }, 1500 - (Date.now() - startTime));
      } else {
        success(res);
      }
    },
    error: function() {
      window.location.replace('/error');
    }
  });
}

function post(url, data, success, loadingMessage) {
  var startTime;
  $.ajax({
    dataType: 'json',
    type: 'POST',
    url: url,
    data: data,
    success: function(res) {
      if (loadingMessage) {
        setTimeout(function() {
          success(res);
          loadingDialogElement.remove();
        }, 1500 - (Date.now() - startTime));
      } else {
        success(res);
      }
    },
    error: function() {
      window.location.replace('/error');
    }
  });
}
