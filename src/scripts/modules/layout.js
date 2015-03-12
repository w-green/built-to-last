module.exports = function layout(subSections) {

  return {
    init : function initFn() {
      subSections.height(window.innerHeight + 'px');
    }

  };

};