// using browserify shim to require jquery
var $ = require('jquery');

$(function(){

  var Menu = require('./modules/menu');
  var Nav = require('./modules/nav');
  var layout = require('./modules/layout');
  var DividerCirclesPulse = require('./modules/divider-circles-pulse');


  $('.carousel-slider').slick({
    // slidesToShow : 1
    // variableWidth : true,
    dots : true,
    speed: 300
  });


  var menuEl = $('#js-menu-icon');
  var menuModule = new Menu(menuEl);
  menuModule.init();


  // var navEl = $('#main-nav-container-js');
  // var navModule = new Nav(navEl);
  // navModule.init();

  var dividers = $('.divider-one');
  layout(dividers).init();

  var dividersCircles = $('.divider__circle');
  $.each(dividersCircles, function(index, circle) {
    var module = new DividerCirclesPulse(circle);
    module.init();
  });


});
