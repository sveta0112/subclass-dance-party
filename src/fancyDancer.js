var makeFancyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeFancyDancer.prototype = Object.create(makeDancer.prototype);
makeFancyDancer.prototype.constructor = makeFancyDancer;

makeFancyDancer.prototype.step = function() {
   makeDancer.prototype.step.call(this);

   this.$node.fadeToggle(1000);
   this.$node.css('border', '30px solid yellow');
   //this.$node.rotate({angle: 45}, animateTo: 180);
   this.$node.animate({height: '50px'});
   this.$node.animate({height: '5px'});
   this.$node.animate({width: '75px'});
   this.$node.animate({width: '7px'});
   this.$node.animate({left: '300px'});
};