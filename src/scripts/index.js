// using browserify shim to require jquery
var $ = require('jquery');

$(function(){

  var myModule = require('./modules/mymodule');
  var localModule = new myModule();
  localModule.init();

});
