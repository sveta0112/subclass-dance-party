var makeFancyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeFancyDancer.prototype = Object.create(makeDancer.prototype);
makeFancyDancer.prototype.constructor = makeFancyDancer;

makeFancyDancer.prototype.step = function() {
   makeDancer.prototype.step.call(this);

   //this.$node.fadeToggle(1000);
   //this.$node.css('border', '30px solid yellow');
   //this.$node.rotate({angle: 45}, animateTo: 180);
   this.$node.animate({height: '100px'});
   this.$node.animate({height: '50px'});
   this.$node.animate({width: '100px'});
   this.$node.animate({width: '7px'});
   this.$node.css('background-image', 'url(https://img.clipartxtras.com/8146ddb1b53896985c6dc41bcac6a6f5_teenage-mutant-ninja-turtles-clip-art-clipartsco-turtles-teenage-mutant-ninja-turtle-clipart_600-600.png)')
   //this.$node.animate({left: '300px'});
};
makeFancyDancer.prototype.lineUp = function() {
  this.$node.animate({left: '300px'});
};