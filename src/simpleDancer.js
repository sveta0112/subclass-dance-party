

var makeSimpleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSimpleDancer.prototype = Object.create(makeDancer.prototype);
makeSimpleDancer.prototype.constructor = makeSimpleDancer;

makeSimpleDancer.prototype.step = function() {
   makeDancer.prototype.step.call(this);

   this.$node.slideToggle(1000);
   this.$node.css('border', '10px solid green');
   this.$node.animate({left: '200px'});
   
 };