function Airport() {
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.land = function (plane) {
  this._hangar.push(plane);
  plane.landed(this);
};

Airport.prototype.take_off = function (plane) {
  this._hangar.pop(plane);
};
