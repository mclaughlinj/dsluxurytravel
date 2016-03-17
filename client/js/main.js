$( document ).ready(function() {

  var viewHeight = $( window ).height() + 20 + 'px',
  viewWidth = $( window ).width() + 'px',
  viewHeightUnadjusted = $( window ).height() + 'px',
  viewHeightHalf = $( window ).height()/2 + 'px',
  viewHeightThreeQ = $( window ).height()-390 + 'px',
  position = $(window).scrollTop(),
  $root = $('html, body');

  // Fade in
  $('.home__section__mainContent, .about__section__mainContent, .contact__section__mainContent, .services__section__mainContent, .prices__section__mainContent').fadeIn(2000, function() {
      $('.home__splash__continue, .about__splash__continue, .contact__splash__continue, .services__splash__continue, .prices__splash__continue').fadeIn( 2000 );
    });

  // reveal nav on smaller screens
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

  // adjust content height to fit viewport
  $('.home__splash').css({'height': viewHeight});
  $('.about__splash, .contact__splash, .services__splash, .prices__splash').css({'height': viewHeightUnadjusted});
  $('.home__gradient, .about__gradient, .contact__gradient, .services__gradient, .prices__gradient').css({'height': viewHeightHalf});
  if ($( window ).height() >= 768) {
    $('.about__section__contentContainer, .home__section__contentContainer, .contact__section__contentContainer, .services__section__contentContainer, .prices__section__contentContainer').css({'max-height': viewHeightThreeQ});
  } else {
    $('.about__section__contentContainer, .home__section__contentContainer, .contact__section__contentContainer, .services__section__contentContainer, .prices__section__contentContainer').css({'max-height': viewHeightHalf});
  };

  // animate anchor scrolling
  $('a[href^="#"]').click(function(){
      var anchor = $.attr(this, 'href');
      $root.animate({
          scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
      }, 500, function () {
        window.location.hash = anchor;
    });
      return false;
  });

  // show child details on contact form
  $('input[name="kids"]').click(function() {
    if($(this).is(':checked')) {
      $('.contact__content__form__childrenNumber, .contact__content__form__childrenAges').fadeIn(200).children('input').prop('required', true);
    } else {
      $('.contact__content__form__childrenNumber, .contact__content__form__childrenAges').fadeOut(200).children('input').prop('required', false);
    }
  });

  // contact form validation
  $('.contact__content__form__submit, .contact__content__form__submit__two').click(function(e){
    e.preventDefault();
    var requiredFieldCount = $('input:required').length;
    var requiredFieldsFilled = 0;
    $('input:required').each(function() {
      if ($(this).val()) {
        requiredFieldsFilled++
        $(this).css('background-color','#fff');
      } else {
        $(this).css('background-color','yellow');
      }
    });
    if (requiredFieldsFilled !== requiredFieldCount) {
      $('input:required').each(function() {
        if (!$(this).val()) {
          $(this).focus();
          return false;
        }
      });
    } else {
      sendMail();
    }
  });
//
// $(window).on('scroll', function(e) {
//
// 	var delta = e.originalEvent.deltaY;
//
// 	scrollPos = $(window).scrollTop();
//
//   if (scrollPos > position) {
//     console.log('down');
//     $root.animate({
//       scrollTop: scrollPos + $( window ).height()
//       }, 500);
//   } else {
//     console.log('up');
//     $root.animate({
//       scrollTop: scrollPos - $( window ).height()
//       }, 500);
//   }
//   position = scrollPos;
//
// // 	if (delta > 0) {
// // 	    console.log('down');
// // 	    console.log(scrollPos + $( window ).height());
// //       $root.animate({
// //           scrollTop: scrollPos + $( window ).height()
// //       }, 500);
// // 	} else {
// // 	    console.log('up');
// // 	    console.log(scrollPos - $( window ).height());
// //       $root.animate({
// //           scrollTop: scrollPos - $( window ).height()
// //       }, 500);
// // 	};
// });

});

function sendMail() {
  $('.contact__content__form__submit').prop('disabled', true);
  var emailOptions = {
    email: $('input[name="email"]').val(),
    name: $('input[name="name"]').val(),
    address: $('textarea[name="address"]').val(),
    phoneDay: $('input[name="phoneDay"]').val(),
    phoneEve: $('input[name="phoneEve"]').val(),
    pickUp: $('textarea[name="pickUp"]').val(),
    date: $('input[name="date"]').val(),
    time: $('input[name="time"]').val(),
    dropOff: $('textarea[name="dropOff"]').val(),
    number: $('input[name="number"]').val(),
    kids: $('input[name="kids"]').val(),
    kidsNumber: $('input[name="kidsNumber"]').val(),
    kidsAges: $('input[name="kidsAges"]').val(),
    special: $('textarea[name="special"]').val()
  };
  post('/',emailOptions,function(response){
      if(response.success)
      {
          $('.contact__content__form__div').empty().html('Thank you for your enquiry.  I\'ll be in touch shortly.');
      } else {
          $('.contact__content__form__div').empty().html('There was a problem !');
      }
  })
};

$( window ).resize(function() {
  viewHeight = $( window ).height() + 20 + 'px',
  viewHeightUnadjusted = $( window ).height() + 'px',
  viewHeightHalf = $( window ).height()/2 + 'px',
  viewHeightThreeQ = $( window ).height()-390 + 'px';
  $('.home__splash').css({'height': viewHeight});
  $('.about__splash, .contact__splash, .services__splash, .prices__splash').css({'height': viewHeightUnadjusted});
  $('.home__gradient, .about__gradient, .contact__gradient, .services__gradient, .prices__gradient').css({'height': viewHeightHalf});
  if ($( window ).height() >= 768) {
    $('.about__section__contentContainer, .home__section__contentContainer, .contact__section__contentContainer, .services__section__contentContainer, .prices__section__contentContainer').css({'max-height': viewHeightThreeQ});
  } else {
    $('.about__section__contentContainer, .home__section__contentContainer, .contact__section__contentContainer, .services__section__contentContainer, .prices__section__contentContainer').css({'max-height': viewHeightHalf});
  };
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

function post(url, data, success) {
  var startTime;
  $.ajax({
    dataType: 'json',
    type: 'POST',
    url: url,
    data: data,
    success: function(res) {
      success(res);
    },
    error: function() {
      console.log('ERROR!');
    }
  });
}
