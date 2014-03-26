function Bag() {
  this._size = 0;
}

Bag.prototype.isEmpty = function() {
  return this._size == 0;
};

Bag.prototype.add = function () {
  this._size++;
};

Bag.prototype.getSize = function() {
  return this._size;
};

