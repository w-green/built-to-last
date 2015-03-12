module.exports = function Nav(navEl) {

  var className = 'is-active';
  var firstDividerHeight = window.innerHeight < 400 ? window.innerHeight : 400;

  function onScrollAddClass() {
    if(window.scrollY > firstDividerHeight) {
      navEl.addClass(className);

      $(window).off('scroll', onScrollAddClass);
      $(window).scroll(onScrollRemoveClass);
    }
  }

  function onScrollRemoveClass() {
    if(window.scrollY < firstDividerHeight) {
      navEl.removeClass(className);

      $(window).off('scroll', onScrollRemoveClass);
      $(window).scroll(onScrollAddClass);
    }
  }


  this.init = function initFn() {
    $(window).scroll(onScrollAddClass);
  };

};