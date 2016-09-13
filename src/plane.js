function Plane() {
  this._flying = true;
}

Plane.prototype.inFlight = function(){
  return this._flying;
};

Plane.prototype.landed = function(){
  this._flying = false;
};
