module.exports = function DividerCirclesPulse(dividerCircles) {

  var jqCircle = $(dividerCircles);

  var jqCircleScrollPos = jqCircle.offset().top;

  function addClassOnScroll() {
    if(window.scrollY > jqCircleScrollPos - 100) {
     jqCircle.addClass('active');

     // Remove listener after it is actioned once
    $(window).off('scroll', addClassOnScroll);

    }
  }


  this.init = function initFn() {
    $(window).scroll(addClassOnScroll);
  };

};