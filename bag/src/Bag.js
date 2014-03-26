function Bag() {
  this._isEmpty = true;
}

Bag.prototype.isEmpty = function() {
  return this._isEmpty;
};

Bag.prototype.add = function () {
  this._isEmpty = false;
};

Bag.prototype.getSize = function() {

};