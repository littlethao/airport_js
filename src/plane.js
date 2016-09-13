function Plane() {
  this.flying = true;
}

Plane.prototype.inFlight = function(){
  return this.flying;
};
// 
// Plane.prototype.landed = function(){
//   return this._flying = false;
// };
