describe('fancyDancer', function() {

  var fancyDancer, clock;
  var timeBetweenSteps = 200;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fancyDancer = new makeFancyDancer(15, 30, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fancyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that has a remove or add class functionality', function() {
    sinon.spy(fancyDancer.$node, 'toggleClass');
    fancyDancer.step();
    expect(fancyDancer.$node.toggleClass.called).to.be.true;
  });

  it('New Test: should have a line up function that lines elements', function() {
    sinon.spy(fancyDancer.$node, 'animate');
    fancyDancer.lineUp();
    expect(fancyDancer.$node.animate.called).to.be.true;
  });

  // it('should line up spinning dancers 200px from the left', function() {
  //   fancyDancer.lineUp();
  //   expect(fancyDancer.$node.position()).to.equal('200px');
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fancyDancer, 'step');
      expect(fancyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fancyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fancyDancer.step.callCount).to.be.equal(2);
    });
  });
});
