describe('Airport', function(){
  var airport;
  var plane;

beforeEach(function(){
  airport = new Airport();
  plane = jasmine.createSpyObj('plane', ['landed']);

  plane.landed(false);

});

it("should land a plane at an airport", function(){
  airport.land(plane);
  expect(airport.planes()).toContain(plane);
});

it("should take off a plane", function(){
  airport.land(plane);
  airport.take_off(plane);
  expect(airport.planes()).not.toContain(plane);
});

it("should confirm that the plane has landed", function(){
  airport.land(plane);
  expect(plane.landed).toHaveBeenCalledWith(airport);
});
});
