window.onload = function() {
  var controller = new ScrollMagic.Controller();

// create a scene
  var scene = new ScrollMagic.Scene({
        triggerElement: '#trigger1',
        duration: 100,  // the scene should last for a scroll distance of 100px
    }) 
    .addTo(controller); // assign the scene to the controller

}

