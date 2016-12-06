function Plane() {

}

Plane.prototype.takeOff = function() {};

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
};
