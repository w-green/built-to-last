// using browserify shim to require jquery
var $ = require('jquery');

$(function(){

  // var myModule = require('./modules/mymodule');
  var Nav = require('./modules/nav');
  var layout = require('./modules/layout');
  var DividerCirclesPulse = require('./modules/divider-circles-pulse');
  var slider = require('./modules/slider/model.js');


  // var localModule = new myModule();
  // localModule.init();


  slider();


  $('.carousel-slider').slick({
    // slidesToShow : 1
    // variableWidth : true,
    dots : true,
    speed: 300
  });


  var navEl = $('#main-nav-container-js');
  var navModule = new Nav(navEl);
  navModule.init();

  var dividers = $('.divider-one');
  layout(dividers).init();

  var dividersCircles = $('.divider__circle');
  $.each(dividersCircles, function(index, circle) {
    var module = new DividerCirclesPulse(circle);
    module.init();
  });


});
