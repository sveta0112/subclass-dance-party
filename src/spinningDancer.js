

var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function() {
   makeDancer.prototype.step.call(this);

   //this.$node.slideToggle(1000);
   this.$node.css('height', '100px');
   this.$node.css('width', '100px');
   this.$node.css('background-image', 'url(\'turtle.png\')');
    this.$node.addClass('rotate');
   
   //this.$node.animate({left: '200px'});  
};

makeSpinningDancer.prototype.lineUp = function() {
  this.$node.animate({left: '200px'});
}