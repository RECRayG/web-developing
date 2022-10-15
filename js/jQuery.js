// Установка слушателя события наведения на картнки с общим классом
$('#img1').on('mouseover', function(e) {
    $('#zoom').attr('src', 'data/img_1.jpg').css({
      'width': '340px',
      'height': '492px'
    });

    var color = $(".layout").css("background-color");
    $('#img1').css({
      'border': '2px solid ' + color
    });
});

$('#img1').on('mouseout', function(e) {
    $('#img1').css({
      'border': 'none'
    });
});

$('#img2').on('mouseover', function(e) {
    $('#zoom').attr('src', 'data/img_2.jpg').css({
      'width': '340px',
      'height': '492px'
    });

    var color = $(".layout").css("background-color");
    $('#img2').css({
      'border': '2px solid ' + color
    });
});

$('#img2').on('mouseout', function(e) {
    $('#img2').css({
      'border': 'none'
    });
});

$('#img3').on('mouseover', function(e) {
    $('#zoom').attr('src', 'data/img_3.jpg').css({
      'width': '340px',
      'height': '492px'
    });

    var color = $(".layout").css("background-color");
    $('#img3').css({
      'border': '2px solid ' + color
    });
});

$('#img3').on('mouseout', function(e) {
    $('#img3').css({
      'border': 'none'
    });
});

$('#zoom').on('mouseover', function(e) {
    // Реализация зумирования при помощи сторонней библиотеки
    $('#zoom').attr('data-magnify-src', $('#zoom').attr('src'));
    $('#zoom').magnify();


    // Реализация зумирования при помощи стандартного jQuery
    /*$('.product__images-zoom').wrap('<div></div>', {
      class: 'product__temp-div-to-zoom'
    }).css({
      'display':'inline-block',
      'overflow': 'hidden'
    });*/

    //$('#zoom').css({
    //  'transform': 'scale(1.3)'
    //});
});

/*
// Реализация зумирования при помощи стандартного jQuery
$('#zoom').on('mouseout', function(e) {
  $('#zoom').css({
    'transform': 'scale(1)'
  });

  $('.product__images-zoom').unwrap(); // Удаление приближения
  $('.product__images-zoom').attr('style',null);
  $('#zoom').attr('style',null);
});
*/

$('#buy').on('click', function(e) {
  /*new noty({
      'text'        : 'text',
      'type'        : 'type',
      'dismissQueue': 'true',
      'layout'      : 'layout',
      'theme'       : 'metroui'
    });*/
    var layout = 'topRight';
    var count = $('#count').text();
    var n = noty({
          'text'        : 'В корзину добавлено ' + count + ' товаров',
          'text-align'  : 'center',
          'type'        : 'alert',
          //'dismissQueue': 'true',
          'layout'      : layout,
          'timeout'     : '1500',
          'animateOpen': {
                          'width': '[ "toggle", "swing" ]',
                          'height': '[ "toggle", "swing" ]',
                          'opacity': 'toggle',
                          'bottom': '-10px'
                        },
          'animateClose': {
                          'width': '[ "toggle", "swing" ]',
                          'height': '[ "toggle", "swing" ]',
                          'opacity': 'toggle',
                          'bottom': '5px'
                        },
          'closeOnSelfClick': false
          //'modal': 'true'
          //'animateClose': {height: 'scrollLeft'}
          //'theme'       : 'defaultTheme'
      });
});
