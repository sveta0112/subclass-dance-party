var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.css({height: '200px'});
  this.$node.toggle();
  this.$node.css('background-image', 'url(https://ubisafe.org/images/pokemon-svg-squirtle-1.png)');
};

makeBlinkyDancer.prototype.lineUp = function() {
  this.$node.animate({top: '400px'});
};