describe('spinningDancer', function() {

  var spinningDancer;
  beforeEach(function() {
    spinningDancer = new makeSpinningDancer(30, 40, 500);
  });

  it('New Test: should have a class rotate', function() {
    expect(spinningDancer.$node.hasClass('rotate')).to.equal(true);
  });

  // it('should line up spinning dancers 200px from the left', function() {
  //   spinningDancer.lineUp();
  //   //debugger;
  //   expect(spinningDancer.$node.offset()).to.equal('200px');
  // });
});
