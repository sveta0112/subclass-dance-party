var makeFancyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fancy');

};

makeFancyDancer.prototype = Object.create(makeDancer.prototype);
makeFancyDancer.prototype.constructor = makeFancyDancer;

makeFancyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  // this.$node.animate({height: '100px'});
  // this.$node.animate({height: '50px'});
  // this.$node.animate({width: '130px'});
  // this.$node.animate({width: '30px'});
  //this.toggleClass('fancy blinky');
  this.$node.css('background-image', 'url(https://img.clipartxtras.com/8146ddb1b53896985c6dc41bcac6a6f5_teenage-mutant-ninja-turtles-clip-art-clipartsco-turtles-teenage-mutant-ninja-turtle-clipart_600-600.png)');
};

makeFancyDancer.prototype.lineUp = function() {
  this.$node.animate({left: '800px'});
};

// makeFancyDancer.prototype.roundUp = function() {
//   for (var i = 0; i < window.position.length; i++) {
//     this.$node.animate({left: window.position[i].left});
//     this.$node.animate({top: window.position[i].top});
//   }

// };