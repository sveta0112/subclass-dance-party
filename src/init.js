$(document).ready(function() {
  window.dancers = [];
  window.position = [];
  //console.log(window.position);
  

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.position.push(dancer.$node.position());
  });

  $('.lineButton').on('click', function(event) {
    //console.log(window.dancers);
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
    //console.log(window.position[0].left);
  });

  $('body').on('mouseover', '.blinky', function() {
    $(this).toggleClass('blinky huge');
  });

  $('body').on('mouseleave', '.huge', function() {
    $(this).toggleClass('huge blinky');
  });
  // $('interactButton').on('click', function() {
  //   for (var i = 0; i < window.dancers.length; i++) {
  //     window.dancers[i].roundUp();
  //   }
  // });
  $('.meetupButton').on('click', function(event) {
    var firstLeft = window.position[0].left;
    var firstTop = window.position[0].top;
    var furthest = 0;
    var index = 0;
    for (var i = 1; i < window.position.length; i++) {
      var a = Math.abs(window.position[i].left - firstLeft);
      var b = Math.abs(window.position[i].top - firstTop);
      var cSquared = Math.pow(a, 2) + Math.pow(b, 2);
      if (cSquared > furthest) {
        furthest = cSquared;
        index = i;
      }
    }
    window.dancers[0].$node.animate({left: '55%', top: '50%'});
    window.dancers[index].$node.animate({left: '50%', top: '50%'});
  });
   
});

