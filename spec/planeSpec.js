describe('Plane', function (){

  var plane;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpy();
});

  it("should be in flight by default", function(){
    expect(plane.inFlight()).toEqual(true);
  });
});
