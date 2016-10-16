module.exports = function layout(subSections) {

  return {
    init : function initFn() {
      subSections.height(window.innerHeight - 210 + 'px'); // 210 = height of mobile nav
    }

  };

};