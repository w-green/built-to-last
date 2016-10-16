// using browserify shim to require jquery
var $ = require('jquery');

$(function(){

  var layout = require('./modules/layout');
  var dividers = $('.divider-one');

  layout(dividers).init();

});
