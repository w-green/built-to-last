module.exports = function Menu(menuEl) {

  var $body = $('body');

  this.init = function initFn() {

    console.log(menuEl);

    menuEl.on('click', function() {
      $body.addClass('nav--is-open');
    });

  };

};