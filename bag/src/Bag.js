function Bag() {
  this._isEmpty = true;
  this._size = 0;
}

Bag.prototype.isEmpty = function() {
  return this._isEmpty;
};

Bag.prototype.add = function () {
  this._isEmpty = false;
  this._size++;
};

Bag.prototype.getSize = function() {
  return this._size;
};