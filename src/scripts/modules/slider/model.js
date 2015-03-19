module.exports = function sliderModel() {

  var dir = "/images/projects";
  var fileextension = ".jpg";

  // var numImages = 34;
  var numImages = 2;

  var domNode = document.querySelector('[data-behaviour="carousel-slider"]');

  var docFrag = document.createDocumentFragment();


  for(var i = 1; i <= numImages; i += 1) {

    var sliderItemContainer = document.createElement('div');
    var img = document.createElement('img');
    img.setAttribute('src', '/images/projects/project-image-' + i + '.jpg');

    sliderItemContainer.appendChild(img);
    docFrag.appendChild(sliderItemContainer);
  }


  // for(var i = 1; i <= numImages; i += 1) {

  //   var sliderItemContainer = document.createElement('div');
  //   var img = document.createElement('img');
  //   img.setAttribute('src', '/images/projects/project-image-' + i + '.jpg');

  //   sliderItemContainer.appendChild(img);
  //   docFrag.appendChild(sliderItemContainer);
  // }


  domNode.appendChild(docFrag);



};