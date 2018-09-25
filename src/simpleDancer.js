

var makeSimpleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSimpleDancer.prototype = Object.create(makeDancer.prototype);
makeSimpleDancer.prototype.constructor = makeSimpleDancer;

makeSimpleDancer.prototype.step = function() {
   makeDancer.prototype.step.call(this);

   //this.$node.slideToggle(1000);
   this.$node.css('height', '100px');
   this.$node.css('width', '100px');
   this.$node.css('background-image', 'url(https://banner2.kisspng.com/20171216/ad5/ninja-turtles-png-5a3575cb3ba7b8.4782049615134530032444.jpg)');
   
   //this.$node.animate({left: '200px'});  
};

makeSimpleDancer.prototype.lineUp = function() {
  this.$node.animate({left: '200px'});
}